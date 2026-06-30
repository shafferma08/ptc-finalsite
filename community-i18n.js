/* ============================================================
   Community Resources - Spanish translations
   Used by community-resources.html (hub) and community-directory.html.
   Agency summaries stay in English for now; this covers all UI chrome,
   filter chips, headers, callouts, and card field labels.
   ============================================================ */

const TRANSLATIONS = {
    es: {
        // Header / navigation
        "nav.brand": "Pinellas Technical College",
        "nav.back_home": "Volver a la página principal de PTC",
        "nav.back_hub": "Recursos Comunitarios",
        "nav.lang_toggle_to_es": "Español",
        "nav.lang_toggle_to_en": "English",

        // Hub page
        "hub.eyebrow": "Recursos Comunitarios",
        "hub.h1": "Ayuda para estudiantes y familias del condado de Pinellas",
        "hub.intro": "Una guía buscable que te conecta con apoyo local en un solo lugar: servicios para discapacidades, consejería, empleo, beneficios y transporte.",
        "hub.quick.h2": "Contactos rápidos",
        "hub.thanks": "Creado con dedicación por el equipo del Estudio del Libro de ESE de PTC: Brenda, Joanna, Kelly, Korey, Merritt, Suzanne y Yata. Gracias.",
        "hub.crisis.title": "¿Necesitas ayuda ahora?",
        "hub.crisis.body": "Llama o envía un mensaje al <a href=\"tel:988\">988</a> para la Línea de Vida de Suicidio y Crisis, o marca el <a href=\"tel:211\">211</a> para comunicarte con 211 Tampa Bay Cares y obtener ayuda local en el condado de Pinellas (24 horas al día, 7 días a la semana).",
        "hub.ptc.title": "¿En PTC?",
        "hub.ptc.body": "Los estudiantes con discapacidades documentadas pueden solicitar adaptaciones en el aula a través de Servicios Estudiantiles de PTC en cualquier campus. <a href=\"consumer-information.html#accessibility\">Aprende sobre las adaptaciones.</a>",
        "hub.k12.title": "¿En el sistema K-12 de Pinellas?",
        "hub.k12.body": "Comunícate con el Departamento de ESE de las Escuelas del Condado de Pinellas al <a href=\"tel:7275886032\">727-588-6032</a> o visita <a href=\"https://www.pcsb.org\" target=\"_blank\" rel=\"noopener\">pcsb.org</a>.",
        "hub.choose.h2": "El directorio de agencias",
        "hub.choose.lede": "Busca agencias que sirven al condado de Pinellas. Filtra por quién necesita ayuda y por el tipo de ayuda que buscas.",
        "hub.start.title": "Empieza en PTC",
        "hub.start.body": "Lo que la universidad te ofrece: cómo solicitar adaptaciones por discapacidad a través de Servicios Estudiantiles, además de consejería, ayuda financiera y apoyo profesional para cada estudiante de PTC. ¿Nuevo aquí? Empieza con Servicios Estudiantiles en tu campus.",
        "hub.start.cta": "Abrir recursos para estudiantes de PTC",
        "hub.start.badge": "Empieza aquí",
        "hub.secondary": "¿Buscas otra cosa? <a href=\"student-resources.html\">Servicios estudiantiles de PTC</a> &middot; <a href=\"community-staff.html\">Personal y docentes</a> &middot; <a href=\"community-employers.html\">Empleadores</a>",
        "hub.choice1.title": "Abre el directorio de agencias",
        "hub.choice1.body": "Encuentra agencias para personas con discapacidad, familias multilingües, personas que estuvieron encarceladas y jóvenes en cuidado de crianza. Filtra por necesidad: empleo, educación, consejería, transporte, dinero y más.",
        "hub.choice1.cta": "Ver el directorio",
        "hub.choice2.title": "Trabajo con estos estudiantes",
        "hub.choice2.body": "Desarrollo profesional, capacitación y apoyos curados para maestros y profesores que trabajan con estudiantes ESE, ESOL o que regresan. Incluye FDLRS, Project 10, CARD-USF y materiales del grupo de estudio.",
        "hub.choice2.cta": "Abrir recursos para personal",
        "hub.choice3.title": "Soy empleador o socio comunitario",
        "hub.choice3.body": "Programas de contratación y créditos fiscales que reducen el riesgo de ampliar tu base de contratación, incluido el Federal Bonding Program, el Work Opportunity Tax Credit, CareerSource Pinellas, y los servicios para empleadores de Rehabilitación Vocacional.",
        "hub.choice3.cta": "Ver recursos para empleadores",
        "hub.about.h3": "Antes de ir",
        "hub.about.body": "La información puede cambiar, así que siempre es buena idea llamar para confirmar. Para sugerir una corrección o un recurso que debamos agregar, envía un correo a <a href=\"mailto:shafferma@pcsb.org\">shafferma@pcsb.org</a>.",
        "hub.footer": "Pinellas Technical College &middot; <a href=\"index.html\">Volver a la página principal de PTC</a>",

        // Directory page
        "dir.eyebrow": "Para estudiantes y familias",
        "dir.h1": "Encuentra una agencia comunitaria que pueda ayudar",
        "dir.intro": "Agencias que sirven al condado de Pinellas y apoyan a estudiantes con discapacidades, familias multilingües, personas que estuvieron encarceladas y jóvenes en cuidado de crianza. Elige a quién ayudas y qué tipo de ayuda para filtrar la lista.",
        "dir.stale.label": "Bueno saber:",
        "dir.stale.body": "La información puede cambiar, así que llama antes de ir para confirmar el horario y la ubicación.",
        "dir.filter.help.label": "Cómo funciona:",
        "dir.filter.help.body": "Elige las opciones que apliquen en cada fila y la lista se actualiza al instante. Las opciones en gris no dejarían resultados.",
        "dir.pop.label": "Busco ayuda para...",
        "dir.svc.label": "¿Qué tipo de ayuda?",
        "dir.label.hint": "(elige las que apliquen)",
        "dir.chip.ese": "Una persona con discapacidad",
        "dir.chip.esol": "Una familia multilingüe",
        "dir.chip.reentry": "Alguien que estuvo encarcelado",
        "dir.chip.foster": "Jóvenes en cuidado de crianza",
        "dir.chip.job": "Empleo o capacitación",
        "dir.chip.learn": "Educación después de la secundaria",
        "dir.chip.transport": "Transporte",
        "dir.chip.independent": "Vida independiente",
        "dir.chip.talk": "Consejería",
        "dir.chip.medical": "Atención médica",
        "dir.chip.money": "Dinero o beneficios",
        "dir.chip.family": "Apoyo familiar",
        "dir.chip.day": "Programas diurnos para adultos",
        "dir.chip.rec": "Recreación y artes",
        "dir.chip.autism": "Apoyo para autismo",
        "dir.chip.deaf": "Sordo / con dificultad auditiva",
        "dir.chip.blind": "Ciego / baja visión",
        "dir.chip.advocacy": "Defensa y derechos",
        "dir.search.placeholder": "O busca por nombre o palabra clave",
        "dir.search.pill": "Búsqueda",
        "dir.filter.heading": "Filtrar agencias",
        "dir.results.heading": "Resultados",
        "dir.reset": "Restablecer",
        "dir.results.of": "de",
        "dir.results.agencies": "agencias",
        "dir.results.nofilter": "No hay filtros aplicados",
        "dir.results.filtered_by": "Filtrado por:",
        "dir.results.clear_all": "Limpiar todo",
        "dir.empty.title": "Ninguna agencia coincide con estos filtros.",
        "dir.empty.hint": "Intenta quitar una opción con la X de arriba, o presiona Restablecer. Si elegiste opciones en ambas filas, una agencia debe atender al menos una opción de cada fila para aparecer aquí.",
        "dir.card.show_details": "Ver detalles",
        "dir.card.hide_details": "Ocultar detalles",
        "dir.card.helps_with": "Ayuda con:",
        "dir.card.website": "Sitio web:",
        "dir.card.email": "Correo electrónico:",
        "dir.card.hours": "Horario:",
        "dir.card.fees": "Costo:",
        "dir.card.eligibility": "Quién puede usarlo:",
        "dir.card.intake": "Cómo empezar:",
        "dir.card.calltostart": "Para empezar, llama:",
        "dir.card.verified": "Última verificación:",
        "dir.footer": "Pinellas Technical College &middot; <a href=\"community-resources.html\">Centro de Recursos Comunitarios</a>",
        "dir.summary_note": "(El resumen y los detalles de cada agencia aparecen en inglés mientras se completa la traducción.)",

        // Month names for verified-date formatting
        "month.1": "enero", "month.2": "febrero", "month.3": "marzo",
        "month.4": "abril", "month.5": "mayo", "month.6": "junio",
        "month.7": "julio", "month.8": "agosto", "month.9": "septiembre",
        "month.10": "octubre", "month.11": "noviembre", "month.12": "diciembre"
    }
};

// Get current language from URL ?lang=es, default 'en'
function getCurrentLang() {
    const params = new URLSearchParams(window.location.search);
    const l = params.get("lang");
    return l === "es" ? "es" : "en";
}

// Swap a language in the URL (replaces current history entry to avoid scroll jumps).
function setLang(lang) {
    const url = new URL(window.location.href);
    if (lang === "en") url.searchParams.delete("lang");
    else url.searchParams.set("lang", lang);
    window.history.replaceState({}, "", url.toString());
    document.documentElement.lang = lang;
    applyTranslations();
}

// Apply translations to all [data-i18n] elements based on current lang.
// Element's innerHTML is REPLACED with translated string (so we can embed <a>, <strong>, etc.).
// Default English text lives in the HTML itself.
function applyTranslations() {
    const lang = getCurrentLang();
    document.documentElement.lang = lang;

    // Store original (English) HTML in data-i18n-en the first time we run, so toggling
    // back to English works.
    document.querySelectorAll("[data-i18n]").forEach(el => {
        if (!el.dataset.i18nEn) el.dataset.i18nEn = el.innerHTML;
        const key = el.dataset.i18n;
        if (lang === "es" && TRANSLATIONS.es[key]) {
            el.innerHTML = TRANSLATIONS.es[key];
        } else {
            el.innerHTML = el.dataset.i18nEn;
        }
    });

    // Translate attribute values (placeholder, aria-label) marked with data-i18n-attr.
    // Format: data-i18n-attr="placeholder:dir.search.placeholder,aria-label:nav.back_hub"
    document.querySelectorAll("[data-i18n-attr]").forEach(el => {
        const pairs = el.dataset.i18nAttr.split(",");
        pairs.forEach(pair => {
            const [attr, key] = pair.split(":");
            if (!attr || !key) return;
            // Stash original on first run
            const stashAttr = "data-i18n-en-" + attr;
            if (!el.getAttribute(stashAttr)) el.setAttribute(stashAttr, el.getAttribute(attr) || "");
            if (lang === "es" && TRANSLATIONS.es[key]) {
                el.setAttribute(attr, TRANSLATIONS.es[key]);
            } else {
                el.setAttribute(attr, el.getAttribute(stashAttr));
            }
        });
    });

    // Update the lang toggle button label (shows the target language)
    const toggle = document.getElementById("lang-toggle");
    if (toggle) {
        toggle.textContent = lang === "es" ? "English" : "Español";
        toggle.setAttribute("aria-label", lang === "es" ? "Switch to English" : "Cambiar a español");
    }
}

// Wire the toggle button on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
    applyTranslations();
    const toggle = document.getElementById("lang-toggle");
    if (toggle) {
        toggle.addEventListener("click", () => {
            const next = getCurrentLang() === "es" ? "en" : "es";
            setLang(next);
            // Notify other listeners (directory renderCards) that lang changed
            window.dispatchEvent(new Event("langchange"));
        });
    }
});

// Convenience for JS that renders content dynamically (e.g., directory cards)
function t(key) {
    const lang = getCurrentLang();
    if (lang === "es" && TRANSLATIONS.es[key]) return TRANSLATIONS.es[key];
    return null; // null means "use the default English string in your template"
}
