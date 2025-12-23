/* ============================================
   EDIT HERE: Customize your portfolio content
   ============================================
   Update the CONFIG object below with your information
*/

const CONFIG = {
    // Personal Information
    name: 'Your Name',
    role: 'Full Stack Developer',
    email: 'your.email@example.com',
    heroText: 'Building modern web applications with clean code and user-focused design.',
    
    // Social Links
    social: {
        github: 'https://github.com/yourusername',
        linkedin: 'https://linkedin.com/in/yourusername',
        twitter: 'https://twitter.com/yourusername'
    },
    
    // Skills Array
    skills: [
        'JavaScript',
        'HTML5',
        'CSS3',
        'React',
        'Node.js',
        'Python',
        'Git',
        'MongoDB',
        'Express',
        'TypeScript'
    ],
    
    // Projects Array
    projects: [
        {
            title: 'E-Commerce Platform',
            description: 'A full-stack e-commerce solution with user authentication, payment processing, and admin dashboard. Built with modern technologies for optimal performance and user experience.',
            tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            liveLink: 'https://example.com',
            repoLink: 'https://github.com/yourusername/project1'
        },
        {
            title: 'Task Management App',
            description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Helps teams stay organized and productive.',
            tech: ['Vue.js', 'Firebase', 'CSS3'],
            liveLink: 'https://example.com',
            repoLink: 'https://github.com/yourusername/project2'
        },
        {
            title: 'Weather Dashboard',
            description: 'A responsive weather dashboard that displays current conditions and forecasts. Features location-based weather data and beautiful visualizations.',
            tech: ['JavaScript', 'HTML5', 'CSS3', 'API'],
            liveLink: 'https://example.com',
            repoLink: 'https://github.com/yourusername/project3'
        }
    ],
    
    // Experience Array
    experience: [
        {
            title: 'Senior Frontend Developer',
            company: 'Tech Company Inc.',
            date: '2022 - Present',
            description: 'Leading frontend development initiatives, mentoring junior developers, and building scalable web applications. Improved application performance by 40% and reduced load times by 50%.'
        },
        {
            title: 'Full Stack Developer',
            company: 'Startup Solutions',
            date: '2020 - 2022',
            description: 'Developed and maintained multiple client projects using modern web technologies. Collaborated with cross-functional teams to deliver high-quality software solutions on time.'
        }
    ]
};

// ============================================
// Theme Management
// ============================================

function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    let theme = 'light';
    
    if (savedTheme) {
        theme = savedTheme;
    } else if (prefersDark) {
        theme = 'dark';
    }
    
    document.documentElement.setAttribute('data-theme', theme);
    updateThemeUI(theme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeUI(newTheme);
}

function updateThemeUI(theme) {
    const themeLabel = document.getElementById('themeLabel');
    if (themeLabel) {
        themeLabel.textContent = theme === 'dark' ? 'Dark' : 'Light';
    }
}

// ============================================
// Render Functions
// ============================================

function renderSkills() {
    const container = document.getElementById('skillsContainer');
    if (!container) return;
    
    container.innerHTML = CONFIG.skills.map(skill => 
        `<span class="skill-tag">${skill}</span>`
    ).join('');
}

function renderProjects() {
    const container = document.getElementById('projectsContainer');
    if (!container) return;
    
    container.innerHTML = CONFIG.projects.map(project => `
        <div class="project-card">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">
                ${project.tech.map(tech => `<span class="project-tech-tag">${tech}</span>`).join('')}
            </div>
            <div class="project-links">
                <a href="${project.liveLink}" class="project-link" target="_blank" rel="noopener noreferrer">
                    Live Demo →
                </a>
                <a href="${project.repoLink}" class="project-link" target="_blank" rel="noopener noreferrer">
                    Code →
                </a>
            </div>
        </div>
    `).join('');
}

function renderExperience() {
    const container = document.getElementById('experienceContainer');
    if (!container) return;
    
    container.innerHTML = CONFIG.experience.map(exp => `
        <div class="experience-item">
            <div class="experience-header">
                <div>
                    <h3 class="experience-title">${exp.title}</h3>
                    <p class="experience-company">${exp.company}</p>
                </div>
                <span class="experience-date">${exp.date}</span>
            </div>
            <p class="experience-description">${exp.description}</p>
        </div>
    `).join('');
}

function renderSocialLinks() {
    const container = document.getElementById('socialLinks');
    if (!container) return;
    
    const socialIcons = {
        github: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`,
        linkedin: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
        twitter: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>`
    };
    
    const links = [];
    if (CONFIG.social.github) {
        links.push(`<a href="${CONFIG.social.github}" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub">${socialIcons.github} GitHub</a>`);
    }
    if (CONFIG.social.linkedin) {
        links.push(`<a href="${CONFIG.social.linkedin}" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">${socialIcons.linkedin} LinkedIn</a>`);
    }
    if (CONFIG.social.twitter) {
        links.push(`<a href="${CONFIG.social.twitter}" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="Twitter">${socialIcons.twitter} Twitter</a>`);
    }
    
    container.innerHTML = links.join('');
}

function renderHero() {
    const heroName = document.getElementById('heroName');
    const heroRole = document.getElementById('heroRole');
    const heroText = document.getElementById('heroText');
    const contactEmail = document.getElementById('contactEmail');
    const footerName = document.getElementById('footerName');
    
    if (heroName) heroName.textContent = CONFIG.name;
    if (heroRole) heroRole.textContent = CONFIG.role;
    if (heroText) heroText.textContent = CONFIG.heroText;
    if (contactEmail) {
        contactEmail.textContent = CONFIG.email;
        contactEmail.href = `mailto:${CONFIG.email}`;
    }
    if (footerName) footerName.textContent = CONFIG.name;
}

function updateCurrentYear() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// ============================================
// Navigation & Scroll Behavior
// ============================================

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function initActiveNavHighlight() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (sections.length === 0 || navLinks.length === 0) return;
    
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('data-section') === id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);
    
    sections.forEach(section => observer.observe(section));
}

// ============================================
// Initialize Everything
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize theme
    initTheme();
    
    // Theme toggle button
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    // Handle missing profile image gracefully
    const profileImage = document.querySelector('.hero-image');
    if (profileImage) {
        profileImage.addEventListener('error', function() {
            this.style.display = 'none';
        });
    }
    
    // Render content from CONFIG
    renderHero();
    renderSkills();
    renderProjects();
    renderExperience();
    renderSocialLinks();
    updateCurrentYear();
    
    // Initialize navigation
    initSmoothScroll();
    initActiveNavHighlight();
    
    // Listen for OS theme changes (only if no saved preference)
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            const newTheme = e.matches ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', newTheme);
            updateThemeUI(newTheme);
        }
    });
});

