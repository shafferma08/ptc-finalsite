/* ============================================
   PTC Homepage — Interactive Behavior
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    // --- Sticky Header Shadow ---
    const header = document.getElementById('site-header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 10);
    });

    // --- Search Toggle ---
    const searchToggle = document.getElementById('search-toggle');
    const searchOverlay = document.getElementById('search-overlay');
    const searchClose = document.getElementById('search-close');
    const searchInput = document.getElementById('search-input');

    if (searchToggle && searchOverlay) {
        searchToggle.addEventListener('click', () => {
            searchOverlay.classList.add('active');
            setTimeout(() => searchInput?.focus(), 300);
        });
        searchClose?.addEventListener('click', () => {
            searchOverlay.classList.remove('active');
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') searchOverlay.classList.remove('active');
        });
    }

    // --- Mobile Menu Toggle ---
    const mobileToggle = document.getElementById('mobile-toggle');
    const campusMenuToggle = document.getElementById('campus-menu-toggle');
    const mainNav = document.getElementById('main-nav');

    // Collapse any open dropdown accordions and reset their ARIA state
    const collapseAllDropdowns = (except) => {
        document.querySelectorAll('.main-nav__item--has-dropdown').forEach(item => {
            if (item === except) return;
            item.classList.remove('accordion-open');
            const l = item.querySelector(':scope > .main-nav__link');
            if (l) l.setAttribute('aria-expanded', 'false');
        });
    };

    if (mobileToggle && mainNav) {
        mobileToggle.addEventListener('click', () => {
            const expanded = mobileToggle.getAttribute('aria-expanded') === 'true';
            mobileToggle.setAttribute('aria-expanded', !expanded);
            mainNav.classList.toggle('mobile-open');
            mobileToggle.classList.toggle('is-active');

            // Prevent body scrolling when mobile menu is open
            document.body.style.overflow = mainNav.classList.contains('mobile-open') ? 'hidden' : '';

            // When closing the menu, collapse any open accordions + reset ARIA
            if (!mainNav.classList.contains('mobile-open')) collapseAllDropdowns();
        });
    }

    // --- Dropdown ARIA + Mobile Menu Accordions ---
    // Dropdown triggers are navigation links on desktop (hover/focus menus) and
    // disclosure accordions on mobile. Wire WCAG disclosure semantics + keyboard support.
    const dropdownItems = document.querySelectorAll('.main-nav__item--has-dropdown');

    dropdownItems.forEach((item, i) => {
        const link = item.querySelector(':scope > .main-nav__link');
        const panel = item.querySelector(':scope > .main-nav__dropdown');
        if (!link) return;

        link.setAttribute('aria-haspopup', 'true');
        link.setAttribute('aria-expanded', 'false');
        if (panel) {
            if (!panel.id) panel.id = 'nav-dropdown-' + i;
            link.setAttribute('aria-controls', panel.id);
        }

        const toggleAccordion = (e) => {
            // Only act as an accordion in mobile view (hamburger visible)
            const isMobile = mobileToggle && window.getComputedStyle(mobileToggle).display !== 'none';
            if (!isMobile) return;
            e.preventDefault();
            collapseAllDropdowns(item);
            const open = item.classList.toggle('accordion-open');
            link.setAttribute('aria-expanded', open ? 'true' : 'false');
        };

        link.addEventListener('click', toggleAccordion);
        // Space should toggle the disclosure (Enter already activates the link/click)
        link.addEventListener('keydown', (e) => {
            if (e.key === ' ' || e.key === 'Spacebar') toggleAccordion(e);
        });
    });

    // Reset accordion ARIA when returning to desktop width
    window.addEventListener('resize', () => {
        const isMobile = mobileToggle && window.getComputedStyle(mobileToggle).display !== 'none';
        if (!isMobile) collapseAllDropdowns();
    });

    // --- Hero Image Slider ---
    const heroSlides = document.querySelectorAll('.hero__slide');
    if (heroSlides.length > 1) {
        let currentSlide = 0;
        setInterval(() => {
            heroSlides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % heroSlides.length;
            heroSlides[currentSlide].classList.add('active');
        }, 6000); // Change image every 6 seconds
    }

    // --- Animated Number Counter ---
    const counters = document.querySelectorAll('.hero__stat-number[data-count]');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.count);
                const suffix = el.textContent.replace(/[0-9]/g, '');
                let current = 0;
                const increment = target / 40;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    el.textContent = Math.floor(current) + suffix;
                }, 30);
                counterObserver.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(c => counterObserver.observe(c));

    // --- Scroll-Reveal Animations ---
    const revealElements = document.querySelectorAll(
        '.program-card, .campus-card, .news-card, .why-ptc__feature, .quick-link, .testimonial-card'
    );

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        revealObserver.observe(el);
    });

    // Apply staggered delays to grids
    document.querySelectorAll('.programs-grid, .news-grid, .quick-links__grid, .why-ptc__features').forEach(grid => {
        const children = grid.querySelectorAll('.program-card, .news-card, .quick-link, .why-ptc__feature');
        children.forEach((child, i) => {
            child.style.transitionDelay = `${i * 0.08}s`;
        });
    });

    // --- Revealed class style ---
    const style = document.createElement('style');
    style.textContent = `
        .revealed {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);

});
