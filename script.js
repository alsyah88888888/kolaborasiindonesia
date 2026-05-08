// Sticky Navbar
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

if(menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Smooth Scrolling for Anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        navLinks.classList.remove('active'); // close mobile menu on click
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70, // offset for sticky navbar
                behavior: 'smooth'
            });
        }
    });
});

// Product Catalog Data & Filtering
// Product Catalog Data (Source: katalog.js)
// We take a subset for the homepage preview
const featuredProductIds = [1, 4, 10, 12, 16, 18, 21, 46, 90]; // Selection from katalog.js with verified images
const products = typeof ecommerceProducts !== 'undefined' 
    ? ecommerceProducts.filter(p => featuredProductIds.includes(p.id))
    : [];

// categoryLabels is now defined in katalog.js for shared use

const productGrid = document.getElementById('productGrid');
const filterBtns = document.querySelectorAll('.filter-btn');

function renderProducts(filter = 'all') {
    if(!productGrid) return;
    productGrid.innerHTML = '';
    const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);
    
    filtered.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card reveal';
        
        card.innerHTML = `
            <div class="product-img-wrapper">
                <img src="${product.img}" alt="${product.name}" class="product-img" loading="lazy">
                <div class="product-overlay">
                    <a href="https://wa.me/6285774444805?text=Halo%20KOBOI,%20saya%20tertarik%20dengan%20produk%20${encodeURIComponent(product.name)}" target="_blank" class="btn-inquiry">
                        <i class="fab fa-whatsapp"></i> Tanya Stok
                    </a>
                </div>
            </div>
            <div class="product-info">
                <span class="product-category-label">${categoryLabels[product.category] || 'Umum'}</span>
                <h3>${product.name}</h3>
                <div class="product-footer">
                    <span class="quality-label"><i class="fas fa-check-circle"></i> Produk Original</span>
                    <span class="stock-status">Ready</span>
                </div>
            </div>
        `;


        productGrid.appendChild(card);
    });
}

// Initial render
renderProducts();

// Filter click events
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add to current
        btn.classList.add('active');
        // Render
        renderProducts(btn.getAttribute('data-filter'));
    });
});

// Scroll Reveal Animation (Removed legacy code, replaced by GSAP ScrollTrigger)
/* 
Logika lama dihapus karena bertabrakan dengan sistem GSAP 3D Portal.
Sistem baru sekarang dikelola oleh GSAP ScrollTrigger di bagian bawah file ini.
*/

// Animated Counters
const counters = document.querySelectorAll('.counter');
let countersStarted = false;

function formatNumber(num) {
    return Math.floor(num).toString();
}

function startCounters() {
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const duration = 2000; // ms
        const increment = target / (duration / 16); // 60fps
        
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.innerText = formatNumber(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.innerText = target;
            }
        };
        
        updateCounter();
    });
}

// Check when stats section is in view to trigger the counter
const statsSection = document.getElementById('stats');

window.addEventListener('scroll', () => {
    if (!countersStarted && statsSection) {
        const rect = statsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            startCounters();
            countersStarted = true;
        }
    }
});

/* =========================================
   DARK THEME TOGGLE
   ========================================= */
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle ? themeToggle.querySelector('i') : null;

function applyTheme(theme) {
    if (theme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        if (themeIcon) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
    } else {
        document.body.removeAttribute('data-theme');
        if (themeIcon) {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    }
}

// Check saved theme
const savedTheme = localStorage.getItem('theme') || 'light';
applyTheme(savedTheme);

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.body.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

/* =========================================
   FOOTER CONTACT FORM TO WA
   ========================================= */
const footerForm = document.getElementById('footerContactForm');
if (footerForm) {
    footerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('fcName').value;
        const email = document.getElementById('fcEmail').value;
        const msg = document.getElementById('fcMessage').value;
        
        const waText = encodeURIComponent(`Halo Tim KOBOI, saya memiliki pertanyaan via Formulir Website.\n\n*Nama:* ${name}\n*Email:* ${email}\n\n*Pesan:*\n${msg}`);
        window.open(`https://wa.me/6285774444805?text=${waText}`, '_blank');
    });
}

/* =========================================
   3D PORTAL LOGIC (GSAP)
   ========================================= */

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Hero Zoom Effect (Portal Entrance)
if (document.querySelector('.hero-content h1')) {
    gsap.to('.hero-content h1', {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        },
        scale: 5,
        opacity: 0,
        z: 500,
        ease: 'none'
    });
    
    gsap.to('.hero-video', {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        },
        scale: 1.2,
        opacity: 0.3,
        ease: 'none'
    });
}

// 3D Entrance for Reveal Elements
const revealElements = document.querySelectorAll('.reveal');
revealElements.forEach(el => {
    gsap.fromTo(el, 
        { 
            opacity: 0, 
            z: -200, 
            y: 50 
        }, 
        {
            scrollTrigger: {
                trigger: el,
                start: 'top 90%',
                toggleActions: 'play none none reverse'
            },
            opacity: 1,
            z: 0,
            y: 0,
            duration: 1,
            ease: 'power3.out'
        }
    );
});

// Quick Order Portal Removed for stability

// Parallax Orbs Animation
const orbs = document.querySelectorAll('.parallax-orb');
orbs.forEach(orb => {
    const speed = orb.getAttribute('data-speed');
    
    // Animate the Y position based on scroll
    gsap.to(orb, {
        y: () => (window.innerHeight * speed * -1), // Move up based on speed
        ease: 'none',
        scrollTrigger: {
            trigger: document.body,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1 // smooth scrubbing
        }
    });
});

// Preloader Logic
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        // Delay slightly for effect, then animate out
        gsap.to(preloader, {
            opacity: 0,
            scale: 1.1,
            duration: 1,
            delay: 0.5,
            ease: 'power2.inOut',
            onComplete: () => {
                preloader.style.visibility = 'hidden';
                preloader.style.display = 'none';
                
                // Optional: trigger hero animation explicitly here if needed
                // to ensure it starts after preloader is gone
            }
        });
    }
});
// Note: Modal logic and shared formatters have been moved to katalog.js 
// to prevent duplication and ReferenceErrors.

// Cookie Consent Logic
function initCookieConsent() {
    // Jika sudah ada persetujuan di localStorage, jangan buat banner sama sekali
    if (localStorage.getItem('cookieConsent')) return;
    if (document.getElementById('cookieConsentBanner')) return;

    const cookieConsent = document.createElement('div');
    cookieConsent.id = 'cookieConsentBanner';
    cookieConsent.className = 'cookie-consent';
    cookieConsent.innerHTML = `
        <div class="cookie-content">
            <i class="fas fa-cookie-bite"></i>
            <p>Website kami menggunakan cookie untuk meningkatkan pengalaman Anda. Dengan klik "Setuju", Anda menyetujui penggunaan cookie kami.</p>
        </div>
        <div class="cookie-btns">
            <button class="btn-cookie-decline" id="cookieDecline">Tolak</button>
            <button class="btn-cookie-accept" id="cookieAccept">Setuju</button>
        </div>
    `;
    document.body.appendChild(cookieConsent);

    const acceptBtn = document.getElementById('cookieAccept');
    const declineBtn = document.getElementById('cookieDecline');

    // Munculkan dengan animasi setelah 2 detik
    setTimeout(() => {
        cookieConsent.classList.add('show');
    }, 2000);

    acceptBtn.addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.setItem('cookieConsent', 'accepted');
        cookieConsent.classList.remove('show');
        setTimeout(() => cookieConsent.remove(), 600);
    });

    declineBtn.addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.setItem('cookieConsent', 'declined');
        cookieConsent.classList.remove('show');
        setTimeout(() => cookieConsent.remove(), 600);
    });
}

// Start Cookie Consent
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCookieConsent);
} else {
    initCookieConsent();
}
