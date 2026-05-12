function updateLanguage(lang) {
    if (!translations[lang]) return;

    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else if (el.getAttribute('data-i18n-html') === 'true') {
                el.innerHTML = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });

    // Update active state in switcher
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Update product categories in katalog.js if needed
    if (typeof updateProductCategoryLabels === 'function') {
        updateProductCategoryLabels(lang);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('language') || 'id';
    
    // Add event listeners to lang buttons (if any)
    document.addEventListener('click', (e) => {
        if (e.target.closest('.lang-btn')) {
            const lang = e.target.closest('.lang-btn').getAttribute('data-lang');
            updateLanguage(lang);
        }
    });

    updateLanguage(savedLang);
});
