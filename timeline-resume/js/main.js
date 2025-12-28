/* ============================================
   CONFIGURATION - EDIT THIS TO CUSTOMIZE YOUR PORTFOLIO
   ============================================ */
const CONFIG = {
    // Personal Information
    name: 'John Doe',
    role: 'Frontend Developer',
    location: 'San Francisco, CA',
    email: 'your.email@example.com',
    summary: 'Passionate developer with expertise in creating beautiful, responsive web experiences. I love turning complex problems into simple, elegant solutions.',
    profileImage: 'assets/profile.png', // Path to your profile image (circular image shown in hero)
    heroImage: 'assets/hero.jpg', // Path to your hero background image (full-width background)
    
    // Social Links
    social: [
        { name: 'GitHub', url: 'https://github.com/yourusername', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>' },
        { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>' },
        { name: 'Twitter', url: 'https://twitter.com/yourusername', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>' },
        { name: 'Email', url: 'mailto:your.email@example.com', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>' }
    ],
    
    // Skills (grouped by category)
    skills: {
        'Top Skills': [
            'JavaScript', 'TypeScript', 'React', 'Node.js', 'CSS3', 'HTML5'
        ],
        'Frontend': [
            'React', 'Vue.js', 'Angular', 'Next.js', 'Tailwind CSS', 'Sass'
        ],
        'Backend': [
            'Node.js', 'Express', 'Python', 'Django', 'PostgreSQL', 'MongoDB'
        ],
        'Tools & Others': [
            'Git', 'Docker', 'AWS', 'Figma', 'Webpack', 'Jest'
        ]
    },
    
    // Timeline Items (Experience & Education)
    timeline: [
        {
            type: 'experience',
            title: 'Senior Frontend Developer',
            organization: 'Tech Company Inc.',
            date: '2022 - Present',
            location: 'San Francisco, CA',
            description: [
                'Led development of customer-facing web applications using React and TypeScript',
                'Improved application performance by 40% through code optimization and lazy loading',
                'Mentored junior developers and established coding best practices',
                'Collaborated with design team to implement pixel-perfect UI components'
            ],
            tags: ['React', 'TypeScript', 'Node.js', 'AWS']
        },
        {
            type: 'experience',
            title: 'Frontend Developer',
            organization: 'StartupXYZ',
            date: '2020 - 2022',
            location: 'Remote',
            description: [
                'Built responsive web applications from scratch using modern JavaScript frameworks',
                'Integrated RESTful APIs and implemented real-time features using WebSockets',
                'Participated in agile development process and code reviews'
            ],
            tags: ['Vue.js', 'JavaScript', 'REST APIs']
        },
        {
            type: 'education',
            title: 'Bachelor of Science in Computer Science',
            organization: 'University Name',
            date: '2016 - 2020',
            location: 'City, State',
            description: [
                'Graduated with honors (GPA: 3.8/4.0)',
                'Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems',
                'Member of Computer Science Club'
            ],
            tags: ['Computer Science', 'Web Development']
        }
    ],
    
    // Projects
    projects: [
        {
            title: 'E-Commerce Platform',
            description: 'A full-stack e-commerce solution with user authentication, payment processing, and admin dashboard. Built with React, Node.js, and PostgreSQL.',
            tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
            links: [
                { label: 'Live Demo', url: 'https://example.com' },
                { label: 'GitHub', url: 'https://github.com/yourusername/project' }
            ]
        },
        {
            title: 'Task Management App',
            description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
            tech: ['Vue.js', 'Firebase', 'CSS3'],
            links: [
                { label: 'Live Demo', url: 'https://example.com' },
                { label: 'GitHub', url: 'https://github.com/yourusername/project' }
            ]
        },
        {
            title: 'Weather Dashboard',
            description: 'A beautiful weather dashboard that displays current conditions and forecasts. Features location-based search and interactive charts.',
            tech: ['React', 'Chart.js', 'OpenWeather API'],
            links: [
                { label: 'Live Demo', url: 'https://example.com' },
                { label: 'GitHub', url: 'https://github.com/yourusername/project' }
            ]
        }
    ]
};

/* ============================================
   APPLICATION CODE - NO NEED TO EDIT BELOW
   ============================================ */

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    renderHero();
    renderSkills();
    renderTimeline();
    renderProjects();
    renderContact();
    renderFooter();
    initNavigation();
    initMobileMenu();
    initCopyEmail();
    initSmoothScroll();
    initSkillsScroll();
    initCustomCursor();
});

// Render Hero Section
function renderHero() {
    const heroName = document.getElementById('heroName');
    const heroRole = document.getElementById('heroRole');
    const heroLocation = document.getElementById('heroLocation');
    const heroSummary = document.getElementById('heroSummary');
    const profileImage = document.getElementById('profileImage');
    const heroBackground = document.getElementById('heroBackground');
    
    if (heroName) heroName.textContent = CONFIG.name;
    if (heroRole) heroRole.textContent = CONFIG.role;
    if (heroLocation) heroLocation.textContent = CONFIG.location;
    if (heroSummary) heroSummary.textContent = CONFIG.summary;
    
    // Set profile image
    if (profileImage && CONFIG.profileImage) {
        profileImage.src = CONFIG.profileImage;
        profileImage.alt = `${CONFIG.name}'s profile picture`;
    }
    
    // Set hero background image
    if (heroBackground && CONFIG.heroImage) {
        const img = new Image();
        img.onload = () => {
            heroBackground.style.backgroundImage = `url(${CONFIG.heroImage})`;
            heroBackground.classList.add('loaded');
        };
        img.onerror = () => {
            // If image fails to load, keep the gradient background
            heroBackground.style.backgroundImage = 'none';
        };
        img.src = CONFIG.heroImage;
    }
}

// Render Skills Section
function renderSkills() {
    const skillsContent = document.getElementById('skillsContent');
    if (!skillsContent) return;
    
    skillsContent.innerHTML = '';
    
    Object.entries(CONFIG.skills).forEach(([category, skills]) => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'skill-category';
        
        const title = document.createElement('h3');
        title.className = 'skill-category-title';
        title.textContent = category;
        
        const tagsDiv = document.createElement('div');
        tagsDiv.className = 'skill-tags';
        
        skills.forEach(skill => {
            const tag = document.createElement('span');
            tag.className = 'skill-tag';
            tag.innerHTML = `<span class="skill-tag-content">${skill}</span>`;
            tagsDiv.appendChild(tag);
        });
        
        categoryDiv.appendChild(title);
        categoryDiv.appendChild(tagsDiv);
        skillsContent.appendChild(categoryDiv);
    });
}

// Render Timeline Section
function renderTimeline() {
    const timelineItems = document.getElementById('timelineItems');
    if (!timelineItems) return;
    
    timelineItems.innerHTML = '';
    
    // Sort timeline items by date (most recent first)
    const sortedTimeline = [...CONFIG.timeline].sort((a, b) => {
        // Simple date comparison (you might want to improve this)
        return b.date.localeCompare(a.date);
    });
    
    sortedTimeline.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'timeline-item';
        
        const content = document.createElement('div');
        content.className = 'timeline-item-content';
        
        // Type badge
        const typeBadge = document.createElement('span');
        typeBadge.className = `timeline-item-type ${item.type}`;
        typeBadge.textContent = item.type === 'experience' ? 'Experience' : 'Education';
        content.appendChild(typeBadge);
        
        // Title
        const title = document.createElement('h3');
        title.className = 'timeline-item-title';
        title.textContent = item.title;
        content.appendChild(title);
        
        // Organization
        const org = document.createElement('p');
        org.className = 'timeline-item-org';
        org.textContent = item.organization;
        content.appendChild(org);
        
        // Date
        const date = document.createElement('p');
        date.className = 'timeline-item-date';
        date.textContent = item.date;
        content.appendChild(date);
        
        // Location (if provided)
        if (item.location) {
            const location = document.createElement('p');
            location.className = 'timeline-item-location';
            location.textContent = item.location;
            content.appendChild(location);
        }
        
        // Description
        if (item.description && item.description.length > 0) {
            const desc = document.createElement('div');
            desc.className = 'timeline-item-description';
            const ul = document.createElement('ul');
            item.description.forEach(bullet => {
                const li = document.createElement('li');
                li.textContent = bullet;
                ul.appendChild(li);
            });
            desc.appendChild(ul);
            content.appendChild(desc);
        }
        
        // Tags (if provided)
        if (item.tags && item.tags.length > 0) {
            const tagsDiv = document.createElement('div');
            tagsDiv.className = 'timeline-item-tags';
            item.tags.forEach(tag => {
                const tagSpan = document.createElement('span');
                tagSpan.className = 'timeline-item-tag';
                tagSpan.textContent = tag;
                tagsDiv.appendChild(tagSpan);
            });
            content.appendChild(tagsDiv);
        }
        
        itemDiv.appendChild(content);
        timelineItems.appendChild(itemDiv);
    });
}

// Render Projects Section
function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    if (!projectsGrid) return;
    
    projectsGrid.innerHTML = '';
    
    CONFIG.projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        
        const title = document.createElement('h3');
        title.className = 'project-card-title';
        title.textContent = project.title;
        card.appendChild(title);
        
        const description = document.createElement('p');
        description.className = 'project-card-description';
        description.textContent = project.description;
        card.appendChild(description);
        
        if (project.tech && project.tech.length > 0) {
            const techDiv = document.createElement('div');
            techDiv.className = 'project-card-tech';
            project.tech.forEach(tech => {
                const tag = document.createElement('span');
                tag.className = 'project-card-tech-tag';
                tag.textContent = tech;
                techDiv.appendChild(tag);
            });
            card.appendChild(techDiv);
        }
        
        if (project.links && project.links.length > 0) {
            const linksDiv = document.createElement('div');
            linksDiv.className = 'project-card-links';
            project.links.forEach(link => {
                const a = document.createElement('a');
                a.className = 'project-card-link';
                a.href = link.url;
                a.target = '_blank';
                a.rel = 'noopener noreferrer';
                a.textContent = link.label;
                linksDiv.appendChild(a);
            });
            card.appendChild(linksDiv);
        }
        
        projectsGrid.appendChild(card);
    });
}

// Render Contact Section
function renderContact() {
    const contactEmail = document.getElementById('contactEmail');
    const emailValue = document.getElementById('emailValue');
    const socialLinks = document.getElementById('socialLinks');
    
    if (emailValue) {
        emailValue.textContent = CONFIG.email;
    }
    
    if (contactEmail) {
        contactEmail.href = `mailto:${CONFIG.email}`;
    }
    
    if (socialLinks) {
        socialLinks.innerHTML = '';
        CONFIG.social.forEach(social => {
            const link = document.createElement('a');
            link.className = 'social-link';
            link.href = social.url;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.setAttribute('aria-label', social.name);
            link.innerHTML = social.icon;
            socialLinks.appendChild(link);
        });
    }
}

// Render Footer
function renderFooter() {
    const currentYear = document.getElementById('currentYear');
    const footerName = document.getElementById('footerName');
    
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }
    
    if (footerName) {
        footerName.textContent = CONFIG.name;
    }
}

// Initialize Navigation (active link highlighting)
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    // Intersection Observer for active nav highlighting
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
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);
    
    sections.forEach(section => observer.observe(section));
}

// Initialize Mobile Menu
function initMobileMenu() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }
}

// Initialize Copy Email Functionality
function initCopyEmail() {
    const copyBtn = document.getElementById('copyEmailBtn');
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    
    if (copyBtn && toast && toastMessage) {
        copyBtn.addEventListener('click', async (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            try {
                await navigator.clipboard.writeText(CONFIG.email);
                toastMessage.textContent = 'Email copied to clipboard!';
                toast.classList.add('show');
                
                setTimeout(() => {
                    toast.classList.remove('show');
                }, 3000);
            } catch (err) {
                toastMessage.textContent = 'Failed to copy email';
                toast.classList.add('show');
                
                setTimeout(() => {
                    toast.classList.remove('show');
                }, 3000);
            }
        });
    }
}

// Initialize Smooth Scroll
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const offsetTop = target.offsetTop - 80; // Account for sticky nav
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize Skills Scroll Arrows
function initSkillsScroll() {
    const skillsContent = document.getElementById('skillsContent');
    const scrollLeftBtn = document.getElementById('skillsScrollLeft');
    const scrollRightBtn = document.getElementById('skillsScrollRight');
    
    if (!skillsContent || !scrollLeftBtn || !scrollRightBtn) return;
    
    // Function to update button states
    const updateButtonStates = () => {
        const { scrollLeft, scrollWidth, clientWidth } = skillsContent;
        
        // Hide left button if at the start
        if (scrollLeft <= 10) {
            scrollLeftBtn.disabled = true;
            scrollLeftBtn.style.opacity = '0.3';
        } else {
            scrollLeftBtn.disabled = false;
            scrollLeftBtn.style.opacity = '1';
        }
        
        // Hide right button if at the end
        if (scrollLeft >= scrollWidth - clientWidth - 10) {
            scrollRightBtn.disabled = true;
            scrollRightBtn.style.opacity = '0.3';
        } else {
            scrollRightBtn.disabled = false;
            scrollRightBtn.style.opacity = '1';
        }
    };
    
    // Get scroll distance based on card width
    const getScrollDistance = () => {
        const firstCard = skillsContent.querySelector('.skill-category');
        if (firstCard) {
            const cardWidth = firstCard.offsetWidth;
            const gap = parseInt(getComputedStyle(skillsContent).gap) || 16;
            return cardWidth + gap;
        }
        return 320; // Fallback
    };
    
    // Scroll left
    scrollLeftBtn.addEventListener('click', () => {
        const scrollDistance = getScrollDistance();
        skillsContent.scrollBy({
            left: -scrollDistance,
            behavior: 'smooth'
        });
    });
    
    // Scroll right
    scrollRightBtn.addEventListener('click', () => {
        const scrollDistance = getScrollDistance();
        skillsContent.scrollBy({
            left: scrollDistance,
            behavior: 'smooth'
        });
    });
    
    // Update button states on scroll
    skillsContent.addEventListener('scroll', updateButtonStates);
    
    // Initial state update
    updateButtonStates();
    
    // Update on window resize
    window.addEventListener('resize', updateButtonStates);
}

// Initialize Custom Cursor
function initCustomCursor() {
    const cursor = document.getElementById('customCursor');
    const cursorDot = document.getElementById('customCursorDot');
    
    if (!cursor || !cursorDot) return;
    
    // Only show on desktop (screen width > 768px)
    if (window.innerWidth <= 768) {
        document.body.style.cursor = 'auto';
        return;
    }
    
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let dotX = 0;
    let dotY = 0;
    
    // Track mouse movement
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    // Animate cursor with smooth following
    function animateCursor() {
        // Smooth outer circle following
        cursorX += (mouseX - cursorX) * 0.1;
        cursorY += (mouseY - cursorY) * 0.1;
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        
        // Faster inner dot following
        dotX += (mouseX - dotX) * 0.3;
        dotY += (mouseY - dotY) * 0.3;
        cursorDot.style.left = dotX + 'px';
        cursorDot.style.top = dotY + 'px';
        
        requestAnimationFrame(animateCursor);
    }
    
    animateCursor();
    
    // Hover effects on interactive elements
    const interactiveElements = document.querySelectorAll(
        'a, button, .btn, .nav-link, .skill-tag, .project-card, .social-link, .timeline-item-content, .skills-scroll-btn'
    );
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
            cursorDot.classList.add('hover');
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
            cursorDot.classList.remove('hover');
        });
    });
    
    // Click animation
    document.addEventListener('mousedown', () => {
        cursor.classList.add('click');
        cursorDot.classList.add('click');
    });
    
    document.addEventListener('mouseup', () => {
        cursor.classList.remove('click');
        cursorDot.classList.remove('click');
    });
    
    // Hide cursor when leaving window
    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
        cursorDot.style.opacity = '0';
    });
    
    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = '1';
        cursorDot.style.opacity = '1';
    });
}

