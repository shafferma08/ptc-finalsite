"""Stage 2 extractor for Admissions cluster.

Fetches each URL with curl-style requests (User-Agent set), saves raw HTML,
parses the <main> element via BeautifulSoup, and writes a verbatim markdown
file with frontmatter matching the counselors-cluster format.

Reuses CLW + STP admissions hub extracts from the counselors cluster (already
identical content), so this script only fetches the 16 fresh URLs.
"""

from __future__ import annotations
import datetime as _dt
import pathlib
import re
import sys
import urllib.request
from bs4 import BeautifulSoup, NavigableString

HERE = pathlib.Path(__file__).parent
EXTRACTED = HERE / "extracted"
SCRAPE_DATE = _dt.date.today().isoformat()

# (campus, slug, url)
URLS: list[tuple[str, str, str]] = [
    # CLW — 8 fresh URLs (admissions hub already in counselors/clearwater/)
    ("clearwater", "admissions-acceptable-proofs-of-residency",
     "https://clearwater.myptc.edu/admissions/admissions/acceptable-proofs-of-residency"),
    ("clearwater", "admissions-shadowing-days-times",
     "https://clearwater.myptc.edu/admissions/admissions/shadowing-days-times"),
    ("clearwater", "admissions-transfer",
     "https://clearwater.myptc.edu/admissions/admissions/transfer"),
    ("clearwater", "admissions-readmission",
     "https://clearwater.myptc.edu/admissions/admissions/readmission"),
    ("clearwater", "admissions-enrollment-options",
     "https://clearwater.myptc.edu/admissions/admissions/enrollment-options"),
    ("clearwater", "testing",
     "https://clearwater.myptc.edu/admissions/testing"),
    ("clearwater", "testing-casas",
     "https://clearwater.myptc.edu/admissions/testing/casas"),
    ("clearwater", "testing-teas",
     "https://clearwater.myptc.edu/admissions/testing/teas"),
    # STP — 8 fresh URLs (admissions hub already in counselors/stpete/)
    ("stpete", "admissions-acceptable-proofs-of-residency",
     "https://stpete.myptc.edu/admissions/admissions/acceptable-proofs-of-residency"),
    ("stpete", "admissions-shadowing-days-times",
     "https://stpete.myptc.edu/admissions/admissions/shadowing-days-times"),
    ("stpete", "admissions-transfer",
     "https://stpete.myptc.edu/admissions/admissions/transfer"),
    ("stpete", "admissions-readmission",
     "https://stpete.myptc.edu/admissions/admissions/readmission"),
    ("stpete", "admissions-enrollment-options",
     "https://stpete.myptc.edu/admissions/admissions/enrollment-options"),
    ("stpete", "testing",
     "https://stpete.myptc.edu/admissions/testing"),
    ("stpete", "testing-casas",
     "https://stpete.myptc.edu/admissions/testing/casas"),
    ("stpete", "testing-teas",
     "https://stpete.myptc.edu/admissions/testing/teas"),
]

UA = (
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
    "AppleWebKit/537.36 (KHTML, like Gecko) "
    "Chrome/124.0.0.0 Safari/537.36"
)


def fetch(url: str) -> str:
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=30) as resp:
        return resp.read().decode("utf-8", errors="replace")


def md_from_main(html: str) -> tuple[str, str]:
    """Return (page_title, verbatim markdown body) extracted from <main>."""
    soup = BeautifulSoup(html, "html.parser")

    # Title preference: og:title -> <title>
    og = soup.find("meta", attrs={"property": "og:title"})
    if og and og.get("content"):
        title = og["content"].strip()
    elif soup.title and soup.title.string:
        title = soup.title.string.strip()
    else:
        title = ""

    main = soup.find("main") or soup.select_one("#fsPageContent") or soup
    # Drop side nav + breadcrumb + utility blocks if Finalsite includes them inside <main>.
    for sel in [
        "nav", ".breadcrumb", ".fsBreadcrumbs", ".fsPageNav",
        ".fsPageNavList", ".sidebar", ".side-nav", "footer",
    ]:
        for el in main.select(sel):
            el.decompose()

    lines: list[str] = []
    for el in main.descendants:
        if isinstance(el, NavigableString):
            continue
        name = el.name
        if name in {"h1", "h2", "h3", "h4", "h5", "h6"}:
            txt = el.get_text(" ", strip=True)
            if txt:
                lines.append("")
                lines.append(("#" * int(name[1])) + " " + txt)
                lines.append("")
        elif name == "li":
            txt = el.get_text(" ", strip=True)
            if txt:
                lines.append("- " + txt)
        elif name == "p":
            txt = el.get_text(" ", strip=True)
            if txt:
                lines.append(txt)
                lines.append("")
        elif name in {"a"} and el.parent and el.parent.name not in {"li", "p", "h1", "h2", "h3", "h4", "h5", "h6"}:
            href = el.get("href", "").strip()
            txt = el.get_text(" ", strip=True)
            if txt and href:
                lines.append(f"[{txt}]({href})")

    # Collapse multiple blank lines.
    body = "\n".join(lines)
    body = re.sub(r"\n{3,}", "\n\n", body).strip()
    # Replace nbsp with regular space (verbatim, but readable).
    body = body.replace(" ", " ")
    return title, body


def write_extract(campus: str, slug: str, url: str) -> dict:
    out_dir = EXTRACTED / campus
    out_dir.mkdir(parents=True, exist_ok=True)
    raw_path = out_dir / f"{slug}.raw.html"
    md_path = out_dir / f"{slug}.md"

    html = fetch(url)
    raw_path.write_text(html, encoding="utf-8")

    title, body = md_from_main(html)
    char_count = len(body)

    # Detect PDF wrapper pages (very short body, single PDF link).
    pdf_url = ""
    pdf_match = re.search(r'href="([^"]+\.pdf[^"]*)"', html, re.I)
    if pdf_match and char_count < 400:
        pdf_url = pdf_match.group(1)

    page_type = "admissions-sub-page"
    if "testing" in slug and slug == "testing":
        page_type = "testing-hub"
    elif "testing" in slug:
        page_type = "testing-sub-page"

    fm = [
        "---",
        f"source_url: {url}",
        f"campus: {campus}",
        f"title: {title}",
        f"type: {page_type}",
        f"scrape_date: {SCRAPE_DATE}",
        "scrape_method: curl + python parse",
        f"char_count: {char_count}",
    ]
    if pdf_url:
        fm.append(f"pdf_url: {pdf_url}")
    fm.append(f"notes: Stage 2 extract for Admissions cluster. Raw HTML at {slug}.raw.html.")
    fm.append("---")

    md_path.write_text("\n".join(fm) + "\n\n" + body + "\n", encoding="utf-8")

    return {
        "campus": campus,
        "slug": slug,
        "url": url,
        "title": title,
        "chars": char_count,
        "pdf": bool(pdf_url),
    }


def main() -> int:
    results = []
    for campus, slug, url in URLS:
        try:
            r = write_extract(campus, slug, url)
            results.append(r)
            print(f"[OK]  {campus}/{slug} - {r['chars']} chars - {r['title'][:60]}")
        except Exception as e:
            print(f"[ERR] {campus}/{slug} - {e}", file=sys.stderr)
            results.append({"campus": campus, "slug": slug, "url": url, "error": str(e)})

    # Brief summary table.
    print()
    print("Summary:")
    print(f"  Total: {len(results)}")
    print(f"  OK:    {sum(1 for r in results if 'error' not in r)}")
    print(f"  ERR:   {sum(1 for r in results if 'error' in r)}")
    return 0 if all("error" not in r for r in results) else 1


if __name__ == "__main__":
    raise SystemExit(main())
