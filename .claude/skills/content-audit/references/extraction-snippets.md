# Extraction Snippets — copy-paste JS for Chrome MCP

These are the JavaScript snippets to paste into `mcp__Claude_in_Chrome__javascript_tool` for each stage. They're tuned for Finalsite-rendered PTC pages.

## Stage 1 — Hub link inventory (count + paginate)

First, get the count to know how many pages the hub points to:

```js
(() => {
  const main = document.querySelector('#fsPageContent') || document.querySelector('main') || document.body;
  const links = Array.from(main.querySelectorAll('a[href]'))
    .filter(a => a.innerText.trim() && a.href.includes('myptc.edu'));
  return 'COUNT=' + links.length;
})();
```

Then get the first ~7 links (full text fits before MCP truncation):

```js
(() => {
  const main = document.querySelector('#fsPageContent') || document.querySelector('main') || document.body;
  const links = Array.from(main.querySelectorAll('a[href]'))
    .filter(a => a.innerText.trim() && a.href.includes('myptc.edu'));
  return links.map(a => a.innerText.trim() + ' -> ' + a.href).join('\n');
})();
```

If the count was > 7, paginate the rest:

```js
(() => {
  const main = document.querySelector('#fsPageContent') || document.querySelector('main') || document.body;
  const links = Array.from(main.querySelectorAll('a[href]'))
    .filter(a => a.innerText.trim() && a.href.includes('myptc.edu'))
    .slice(7);  // change offset
  return links.map(a => a.innerText.trim() + ' -> ' + a.href).join('\n');
})();
```

## Stage 2 — Per-page content extraction (single-pass, for pages < 1300 chars)

```js
(() => {
  const m = document.querySelector('#fsPageContent') || document.querySelector('main');
  if (!m) return 'NO_MAIN';
  const t = m.innerText.trim();
  const pdfs = Array.from(m.querySelectorAll('a[href*=".pdf"]')).map(a => a.href);
  return JSON.stringify({
    title: document.title,
    url: location.href,
    len: t.length,
    p1: t.slice(0, 1200),
    pdfs
  });
})();
```

## Stage 2 — Two-pass extraction (for pages > 1300 chars)

First pass:
```js
(() => {
  const m = document.querySelector('#fsPageContent');
  return 'PART1:' + m.innerText.trim().slice(0, 1300);
})();
```

Second pass (run in same tab without navigating away):
```js
(() => {
  const m = document.querySelector('#fsPageContent');
  return 'PART2:' + m.innerText.trim().slice(1300, 2700);
})();
```

Third pass if needed:
```js
(() => {
  const m = document.querySelector('#fsPageContent');
  return 'PART3:' + m.innerText.trim().slice(2700);
})();
```

## Stage 2 — Type detection (PDF wrapper vs. substantive HTML)

If `len < 100` and the page just has a single PDF in `pdfs[]`, it's a PDF wrapper. Save with `type: PDF wrapper` in frontmatter and don't try to extract more. If you need iframe/embed/PDF detection:

```js
(() => {
  const m = document.querySelector('#fsPageContent');
  const iframes = Array.from(m.querySelectorAll('iframe')).map(i => ({src: i.src, w: i.width, h: i.height}));
  const embeds = Array.from(m.querySelectorAll('embed,object,video')).map(e => ({tag: e.tagName, src: e.src || e.data}));
  const pdfs = Array.from(m.querySelectorAll('a[href*=".pdf"]')).map(a => ({text: a.innerText.trim(), href: a.href}));
  return JSON.stringify({iframes, embeds, pdfs, html: m.innerHTML.slice(0, 600)});
})();
```

## Stage 2 — Parallel extraction across 3 tabs (browser_batch)

Cycle one tab through www, one through clearwater, one through stpete. Each round is one `browser_batch` call:

```json
[
  {"name": "navigate", "input": {"tabId": <www_tab_id>, "url": "https://www.myptc.edu/..."}},
  {"name": "navigate", "input": {"tabId": <clw_tab_id>, "url": "https://clearwater.myptc.edu/..."}},
  {"name": "navigate", "input": {"tabId": <stp_tab_id>, "url": "https://stpete.myptc.edu/..."}},
  {"name": "computer", "input": {"tabId": <stp_tab_id>, "action": "wait", "duration": 5}},
  {"name": "javascript_tool", "input": {"tabId": <www_tab_id>, "action": "javascript_exec", "text": "<single-pass JS>"}},
  {"name": "javascript_tool", "input": {"tabId": <clw_tab_id>, "action": "javascript_exec", "text": "<single-pass JS>"}},
  {"name": "javascript_tool", "input": {"tabId": <stp_tab_id>, "action": "javascript_exec", "text": "<single-pass JS>"}}
]
```

Then write 3 markdown files in one bash + Python heredoc.

## Setting up the 3 tabs at the start of Stage 2

```json
[
  {"name": "navigate", "input": {"tabId": <existing_tab>, "url": "https://www.myptc.edu/<first-www-url>"}},
  {"name": "tabs_create_mcp", "input": {"url": "https://clearwater.myptc.edu/<first-clw-url>"}},
  {"name": "tabs_create_mcp", "input": {"url": "https://stpete.myptc.edu/<first-stp-url>"}},
  {"name": "computer", "input": {"tabId": <existing_tab>, "action": "wait", "duration": 5}}
]
```

Note: `tabs_create_mcp` with `url` sometimes fails to navigate. If the resulting tab title is "New Tab", follow up with explicit `navigate` calls.

## Recovering when the MCP tab group dissolves

If you close the last tab in the group, the group is auto-removed and any other tabs are orphaned. Recreate the group:

```
mcp__Claude_in_Chrome__tabs_context_mcp({"createIfEmpty": true})
```

Then navigate the new tab to your first URL, and create 2 more tabs for the other sites.

## Bash + Python file write batch (Stage 2 helper)

```bash
cat > /tmp/save.py << 'PYEOF'
import os
base = '/sessions/<session>/mnt/ptc-finalsite/docs/audit/<cluster>/extracted'

files = {
    f'{base}/www/<slug>.md': """---
source_url: https://www.myptc.edu/...
title: ...
scraped: 2026-MM-DD
char_count: NNN
campus: institutional
note: ...
---

[content]
""",
    # ... 2 more files
}

for path, content in files.items():
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w') as f:
        f.write(content)
    print(f'wrote {path}')
PYEOF
python3 /tmp/save.py
```
