// ============================================
// EDIT HERE - Customize your email
// ============================================
const EMAIL = 'your.email@example.com';

// ============================================
// Navigation Functionality
// ============================================

// Mobile menu toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', !isExpanded);
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
    });
});

// Smooth scroll for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetSection.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Active section highlighting using IntersectionObserver
const sections = document.querySelectorAll('section[id]');
const navLinksArray = Array.from(navLinks);

const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinksArray.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});

// Fallback: Highlight active section on scroll (if IntersectionObserver not supported)
let ticking = false;

function updateActiveSection() {
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinksArray.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
    
    ticking = false;
}

if (!window.IntersectionObserver) {
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(updateActiveSection);
            ticking = true;
        }
    });
}

// ============================================
// Copy Email Functionality
// ============================================

const copyEmailBtn = document.getElementById('copyEmailBtn');
const contactEmail = document.getElementById('contactEmail');
const toast = document.getElementById('toast');

function showToast() {
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}

function copyToClipboard(text) {
    // Try modern Clipboard API first
    if (navigator.clipboard && window.isSecureContext) {
        return navigator.clipboard.writeText(text).then(() => {
            showToast();
            return true;
        }).catch(() => {
            return fallbackCopy(text);
        });
    } else {
        return fallbackCopy(text);
    }
}

function fallbackCopy(text) {
    // Fallback method: create temporary input element
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        const successful = document.execCommand('copy');
        document.body.removeChild(textArea);
        if (successful) {
            showToast();
            return true;
        }
        return false;
    } catch (err) {
        document.body.removeChild(textArea);
        return false;
    }
}

// Copy email button click handler
if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
        copyToClipboard(EMAIL);
    });
    
    // Keyboard accessibility
    copyEmailBtn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            copyToClipboard(EMAIL);
        }
    });
}

// Update contact email link and display
if (contactEmail) {
    contactEmail.textContent = EMAIL;
    contactEmail.setAttribute('href', `mailto:${EMAIL}`);
}

// ============================================
// Footer Year
// ============================================

const currentYear = document.getElementById('currentYear');
if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

// ============================================
// Handle Profile Image Error
// ============================================

const profileImg = document.getElementById('profileImg');
if (profileImg) {
    profileImg.addEventListener('error', function() {
        this.style.display = 'none';
    });
}

// ============================================
// Close mobile menu when clicking outside
// ============================================

document.addEventListener('click', (e) => {
    const isClickInsideNav = navMenu.contains(e.target) || navToggle.contains(e.target);
    
    if (!isClickInsideNav && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
    }
});

// ============================================
// Handle escape key to close mobile menu
// ============================================

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.focus();
    }
});

