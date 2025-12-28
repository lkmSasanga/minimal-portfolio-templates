/* ============================================
   EDIT HERE: Add Your Projects
   ============================================
   Update this PROJECTS array with your own project data.
   Each project will automatically appear as a card and open
   into a detailed case study when clicked.
   ============================================ */

const PROJECTS = [
    {
        id: "project-1",
        title: "E-Commerce Platform Redesign",
        shortDesc: "Complete redesign of an e-commerce platform focusing on improving conversion rates and user experience.",
        image: "assets/project1.jpg",
        tech: ["React", "TypeScript", "Node.js", "MongoDB", "Stripe"],
        problem: "The existing e-commerce platform had a high cart abandonment rate (68%) and poor mobile experience, resulting in lost revenue and frustrated customers. Users found the checkout process confusing and the product discovery difficult.",
        solution: "Redesigned the entire user flow with a focus on mobile-first design, simplified checkout process, and intelligent product recommendations. Implemented a clean, modern UI that reduced cognitive load and improved navigation.",
        features: [
            "Streamlined checkout process (reduced from 5 to 2 steps)",
            "Intelligent product recommendations based on browsing behavior",
            "Mobile-optimized interface with touch-friendly interactions",
            "Real-time inventory updates and stock notifications",
            "Seamless payment integration with multiple payment methods",
            "Enhanced search with filters and sorting options"
        ],
        results: "Cart abandonment rate decreased by 42%, mobile conversion increased by 65%, and overall sales improved by 38% within 3 months of launch.",
        liveLink: "https://example.com",
        repoLink: "https://github.com/yourusername/project-1"
    },
    {
        id: "project-2",
        title: "Task Management SaaS Application",
        shortDesc: "Built a collaborative task management tool for remote teams with real-time synchronization and advanced filtering.",
        image: "assets/project2.jpg",
        tech: ["Vue.js", "Firebase", "Tailwind CSS", "WebSocket"],
        problem: "Remote teams struggled with project visibility and task coordination. Existing tools were either too complex or lacked real-time collaboration features, leading to communication gaps and missed deadlines.",
        solution: "Created an intuitive task management platform with real-time updates, visual project boards, and seamless collaboration features. Designed with simplicity in mind while offering powerful features for team coordination.",
        features: [
            "Real-time task synchronization across all team members",
            "Visual kanban boards with drag-and-drop functionality",
            "Advanced filtering and search capabilities",
            "Team activity feed and notifications",
            "Customizable project templates",
            "Time tracking and productivity analytics",
            "Integration with popular tools (Slack, GitHub, etc.)"
        ],
        results: "Teams using the platform reported a 52% improvement in project visibility and 35% reduction in missed deadlines. User retention rate is 78% after 6 months.",
        liveLink: "https://example.com",
        repoLink: "https://github.com/yourusername/project-2"
    },
    {
        id: "project-3",
        title: "Healthcare Appointment Booking System",
        shortDesc: "Digital appointment booking system for healthcare providers, reducing no-shows and improving patient experience.",
        image: "assets/project3.jpg",
        tech: ["Next.js", "PostgreSQL", "Redis", "Twilio API"],
        problem: "Healthcare clinics faced high no-show rates (30%) and inefficient appointment scheduling processes. Patients found it difficult to book, reschedule, or cancel appointments, leading to wasted time and resources.",
        solution: "Developed a user-friendly appointment booking system with automated reminders, easy rescheduling, and calendar integration. Built with HIPAA compliance in mind and optimized for both patients and healthcare staff.",
        features: [
            "Online appointment booking with real-time availability",
            "Automated SMS and email reminders",
            "Easy rescheduling and cancellation",
            "Provider calendar management dashboard",
            "Patient history and medical records integration",
            "Multi-provider and multi-location support",
            "Waitlist management for last-minute cancellations"
        ],
        results: "No-show rate reduced by 45%, appointment booking efficiency increased by 60%, and patient satisfaction scores improved from 3.2 to 4.6 out of 5.",
        liveLink: "https://example.com",
        repoLink: "https://github.com/yourusername/project-3"
    },
    {
        id: "project-4",
        title: "Social Media Analytics Dashboard",
        shortDesc: "Comprehensive analytics dashboard for social media managers to track engagement, growth, and campaign performance.",
        image: "assets/project4.jpg",
        tech: ["React", "D3.js", "Python", "PostgreSQL", "AWS"],
        problem: "Social media managers lacked a unified platform to analyze performance across multiple channels. Data was scattered across different platforms, making it difficult to identify trends and measure campaign effectiveness.",
        solution: "Built a comprehensive analytics dashboard that aggregates data from multiple social media platforms. Designed intuitive visualizations and automated reporting features to help teams make data-driven decisions.",
        features: [
            "Real-time data aggregation from major social platforms",
            "Interactive charts and graphs using D3.js",
            "Customizable reporting templates",
            "Automated weekly and monthly reports",
            "Competitor analysis and benchmarking",
            "ROI tracking for paid campaigns",
            "Export capabilities for presentations"
        ],
        results: "Users saved an average of 8 hours per week on reporting. Campaign performance insights led to a 28% increase in engagement rates and 35% improvement in ROI.",
        liveLink: "https://example.com",
        repoLink: "https://github.com/yourusername/project-4"
    },
    {
        id: "project-5",
        title: "Learning Management System",
        shortDesc: "Modern LMS platform for educational institutions with interactive content, assessments, and progress tracking.",
        image: "assets/project1.jpg",
        tech: ["Vue.js", "Node.js", "MongoDB", "Socket.io", "Stripe"],
        problem: "Educational institutions needed a modern learning platform that supported interactive content, real-time collaboration, and comprehensive progress tracking. Existing solutions were outdated and expensive.",
        solution: "Developed a feature-rich LMS with interactive video lessons, live collaboration tools, automated assessments, and detailed analytics. Focused on creating an engaging learning experience for students and efficient management for educators.",
        features: [
            "Interactive video lessons with quizzes",
            "Real-time chat and collaboration features",
            "Automated grading and feedback system",
            "Progress tracking and certificates",
            "Mobile app for iOS and Android",
            "Integration with payment systems",
            "Comprehensive admin dashboard"
        ],
        results: "Student engagement increased by 45%, course completion rates improved by 38%, and teacher workload decreased by 30% due to automated features.",
        liveLink: "https://example.com",
        repoLink: "https://github.com/yourusername/project-5"
    },
    {
        id: "project-6",
        title: "Real Estate Property Management Platform",
        shortDesc: "End-to-end property management solution for landlords and property managers with tenant management and maintenance tracking.",
        image: "assets/project2.jpg",
        tech: ["React", "Express.js", "PostgreSQL", "Stripe", "Twilio"],
        problem: "Property managers struggled with manual processes for rent collection, maintenance requests, and tenant communication. Paperwork and spreadsheets led to errors and inefficiencies.",
        solution: "Created a comprehensive platform that digitizes all property management workflows. Includes online rent collection, maintenance request system, tenant portal, and automated communication tools.",
        features: [
            "Online rent collection and payment processing",
            "Maintenance request and tracking system",
            "Tenant and lease management",
            "Automated rent reminders and notices",
            "Document storage and digital signatures",
            "Financial reporting and analytics",
            "Mobile-responsive tenant portal"
        ],
        results: "Rent collection efficiency increased by 60%, maintenance response time decreased by 45%, and tenant satisfaction scores improved significantly. Property managers reported saving 15+ hours per week on administrative tasks.",
        liveLink: "https://example.com",
        repoLink: "https://github.com/yourusername/project-6"
    }
];

/* ============================================
   Application State & DOM Elements
   ============================================ */

let currentProjectIndex = -1;
let currentProjectsCarouselIndex = 0;
let cardsPerView = 1;

const elements = {
    projectsGrid: document.getElementById('projects-grid'),
    projectsDots: document.getElementById('projects-dots'),
    projectsPrev: document.getElementById('projects-prev'),
    projectsNext: document.getElementById('projects-next'),
    caseStudy: document.getElementById('case-study'),
    backBtn: document.getElementById('back-btn'),
    prevBtn: document.getElementById('prev-btn'),
    nextBtn: document.getElementById('next-btn'),
    caseStudyCounter: document.getElementById('case-study-counter'),
    caseStudyTitle: document.getElementById('case-study-title'),
    caseStudyMeta: document.getElementById('case-study-meta'),
    caseStudyHero: document.getElementById('case-study-hero'),
    caseStudyProblem: document.getElementById('case-study-problem'),
    caseStudySolution: document.getElementById('case-study-solution'),
    caseStudyTech: document.getElementById('case-study-tech'),
    caseStudyFeatures: document.getElementById('case-study-features'),
    caseStudyResults: document.getElementById('case-study-results'),
    caseStudyLive: document.getElementById('case-study-live'),
    caseStudyRepo: document.getElementById('case-study-repo'),
    navToggle: document.querySelector('.nav__toggle'),
    navList: document.querySelector('.nav__list'),
    currentYear: document.getElementById('current-year')
};

/* ============================================
   Utility Functions
   ============================================ */

function formatYear() {
    if (elements.currentYear) {
        elements.currentYear.textContent = new Date().getFullYear();
    }
}

function setupMobileNav() {
    if (!elements.navToggle || !elements.navList) return;
    
    elements.navToggle.addEventListener('click', () => {
        const isExpanded = elements.navToggle.getAttribute('aria-expanded') === 'true';
        elements.navToggle.setAttribute('aria-expanded', !isExpanded);
        elements.navList.setAttribute('aria-expanded', !isExpanded);
    });
    
    // Close mobile nav when clicking on a link
    const navLinks = elements.navList.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            elements.navToggle.setAttribute('aria-expanded', 'false');
            elements.navList.setAttribute('aria-expanded', 'false');
        });
    });
}

function setupSmoothScroll() {
    const headerHeight = 90; // Height of sticky header
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function setupActiveNav() {
    const sections = document.querySelectorAll('.section[id]');
    const navLinks = document.querySelectorAll('.nav__link');
    const headerHeight = 90; // Height of sticky header
    
    function updateActiveNav() {
        let current = '';
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 50; // Add extra offset
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav();
}

/* ============================================
   Project Cards Rendering
   ============================================ */

function createProjectCard(project) {
    const card = document.createElement('article');
    card.className = 'project-card';
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `View case study: ${project.title}`);
    
    const image = document.createElement('img');
    image.src = project.image;
    image.alt = `${project.title} preview`;
    image.className = 'project-card__image';
    image.loading = 'lazy';
    
    const content = document.createElement('div');
    content.className = 'project-card__content';
    
    const title = document.createElement('h3');
    title.className = 'project-card__title';
    title.textContent = project.title;
    
    const description = document.createElement('p');
    description.className = 'project-card__description';
    description.textContent = project.shortDesc;
    
    const tech = document.createElement('div');
    tech.className = 'project-card__tech';
    project.tech.forEach(techName => {
        const tag = document.createElement('span');
        tag.className = 'tech-tag';
        tag.textContent = techName;
        tech.appendChild(tag);
    });
    
    content.appendChild(title);
    content.appendChild(description);
    content.appendChild(tech);
    
    card.appendChild(image);
    card.appendChild(content);
    
    // Event listeners
    const projectIndex = PROJECTS.findIndex(p => p.id === project.id);
    card.addEventListener('click', () => openCaseStudy(projectIndex));
    card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openCaseStudy(projectIndex);
        }
    });
    
    return card;
}

function updateCardsPerView() {
    const width = window.innerWidth;
    if (width >= 1024) {
        cardsPerView = 3;
    } else if (width >= 768) {
        cardsPerView = 2;
    } else {
        cardsPerView = 1;
    }
}

function renderProjectCards() {
    if (!elements.projectsGrid) return;
    
    updateCardsPerView();
    elements.projectsGrid.innerHTML = '';
    
    PROJECTS.forEach((project, index) => {
        const card = createProjectCard(project);
        if (index < cardsPerView) {
            card.classList.add('project-card--active');
        }
        elements.projectsGrid.appendChild(card);
    });
    
    renderProjectDots();
    updateProjectsCarousel();
}

function renderProjectDots() {
    if (!elements.projectsDots) return;
    
    elements.projectsDots.innerHTML = '';
    
    // Create one dot for each project card
    for (let i = 0; i < PROJECTS.length; i++) {
        const dot = document.createElement('button');
        dot.className = 'projects__dot';
        if (i === 0) {
            dot.classList.add('projects__dot--active');
        }
        dot.setAttribute('aria-label', `Go to project ${i + 1}: ${PROJECTS[i].title}`);
        dot.addEventListener('click', () => goToCard(i));
        elements.projectsDots.appendChild(dot);
    }
}

function updateProjectsCarousel() {
    if (!elements.projectsGrid) return;
    
    const cards = elements.projectsGrid.querySelectorAll('.project-card');
    const maxIndex = PROJECTS.length - cardsPerView;
    
    // Ensure current index is within bounds
    if (currentProjectsCarouselIndex > maxIndex) {
        currentProjectsCarouselIndex = maxIndex;
    }
    if (currentProjectsCarouselIndex < 0) {
        currentProjectsCarouselIndex = 0;
    }
    
    // Reset all cards
    cards.forEach(card => {
        card.classList.remove('project-card--active');
    });
    
    // Show active cards
    const startIndex = currentProjectsCarouselIndex;
    const endIndex = Math.min(startIndex + cardsPerView, PROJECTS.length);
    
    for (let i = startIndex; i < endIndex; i++) {
        if (cards[i]) {
            cards[i].classList.add('project-card--active');
        }
    }
    
    // Update dots - highlight the first visible card
    const dots = elements.projectsDots?.querySelectorAll('.projects__dot');
    if (dots) {
        dots.forEach((dot, index) => {
            if (index === currentProjectsCarouselIndex) {
                dot.classList.add('projects__dot--active');
            } else {
                dot.classList.remove('projects__dot--active');
            }
        });
    }
    
    // Update navigation buttons
    const maxIndexForNav = PROJECTS.length - cardsPerView;
    if (elements.projectsPrev && elements.projectsNext) {
        elements.projectsPrev.disabled = currentProjectsCarouselIndex === 0;
        elements.projectsNext.disabled = currentProjectsCarouselIndex >= maxIndexForNav;
    }
    
    // Update transform - move by card width percentage
    const cardWidthPercent = 100 / cardsPerView;
    const translateX = -(currentProjectsCarouselIndex * cardWidthPercent);
    elements.projectsGrid.style.transform = `translateX(${translateX}%)`;
}

function goToCard(cardIndex) {
    const maxIndex = PROJECTS.length - cardsPerView;
    // Ensure we don't go beyond the limit
    if (cardIndex > maxIndex) {
        cardIndex = maxIndex;
    }
    if (cardIndex >= 0 && cardIndex < PROJECTS.length) {
        currentProjectsCarouselIndex = Math.min(cardIndex, maxIndex);
        updateProjectsCarousel();
    }
}

function nextProjectsSlide() {
    const maxIndex = PROJECTS.length - cardsPerView;
    if (currentProjectsCarouselIndex < maxIndex) {
        currentProjectsCarouselIndex++;
        updateProjectsCarousel();
    }
}

function prevProjectsSlide() {
    if (currentProjectsCarouselIndex > 0) {
        currentProjectsCarouselIndex--;
        updateProjectsCarousel();
    }
}

/* ============================================
   Case Study Rendering
   ============================================ */

function openCaseStudy(projectIndex) {
    if (projectIndex < 0 || projectIndex >= PROJECTS.length) return;
    
    currentProjectIndex = projectIndex;
    const project = PROJECTS[projectIndex];
    
    // Hide main sections
    const mainSections = document.querySelectorAll('.section:not(#case-study)');
    mainSections.forEach(section => {
        section.style.display = 'none';
    });
    
    // Show case study
    elements.caseStudy.setAttribute('aria-hidden', 'false');
    elements.caseStudy.style.display = 'block';
    
    // Populate case study content
    elements.caseStudyTitle.textContent = project.title;
    
    // Meta (tech tags)
    elements.caseStudyMeta.innerHTML = '';
    project.tech.forEach(techName => {
        const tag = document.createElement('span');
        tag.className = 'tech-tag';
        tag.textContent = techName;
        elements.caseStudyMeta.appendChild(tag);
    });
    
    // Hero image
    const img = document.createElement('img');
    img.src = project.image;
    img.alt = `${project.title} hero image`;
    img.className = 'case-study__hero-image';
    elements.caseStudyHero.innerHTML = '';
    elements.caseStudyHero.appendChild(img);
    
    // Content
    elements.caseStudyProblem.textContent = project.problem;
    elements.caseStudySolution.textContent = project.solution;
    
    // Tech stack
    elements.caseStudyTech.innerHTML = '';
    project.tech.forEach(techName => {
        const tag = document.createElement('span');
        tag.className = 'tech-tag';
        tag.textContent = techName;
        elements.caseStudyTech.appendChild(tag);
    });
    
    // Features
    elements.caseStudyFeatures.innerHTML = '';
    project.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        elements.caseStudyFeatures.appendChild(li);
    });
    
    // Results
    elements.caseStudyResults.textContent = project.results;
    
    // Links
    elements.caseStudyLive.href = project.liveLink;
    elements.caseStudyRepo.href = project.repoLink;
    
    // Update counter
    updateCaseStudyCounter();
    
    // Update navigation buttons
    updateCarouselButtons();
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateCaseStudyCounter() {
    if (elements.caseStudyCounter) {
        elements.caseStudyCounter.textContent = `${currentProjectIndex + 1} / ${PROJECTS.length}`;
    }
}

function updateCarouselButtons() {
    if (elements.prevBtn && elements.nextBtn) {
        elements.prevBtn.disabled = currentProjectIndex === 0;
        elements.nextBtn.disabled = currentProjectIndex === PROJECTS.length - 1;
        
        // Add visual styling for disabled state
        if (elements.prevBtn.disabled) {
            elements.prevBtn.style.opacity = '0.5';
            elements.prevBtn.style.cursor = 'not-allowed';
        } else {
            elements.prevBtn.style.opacity = '1';
            elements.prevBtn.style.cursor = 'pointer';
        }
        
        if (elements.nextBtn.disabled) {
            elements.nextBtn.style.opacity = '0.5';
            elements.nextBtn.style.cursor = 'not-allowed';
        } else {
            elements.nextBtn.style.opacity = '1';
            elements.nextBtn.style.cursor = 'pointer';
        }
    }
}

function navigateToPrevious() {
    if (currentProjectIndex > 0) {
        openCaseStudy(currentProjectIndex - 1);
    }
}

function navigateToNext() {
    if (currentProjectIndex < PROJECTS.length - 1) {
        openCaseStudy(currentProjectIndex + 1);
    }
}

function closeCaseStudy() {
    currentProjectIndex = -1;
    
    // Hide case study
    elements.caseStudy.setAttribute('aria-hidden', 'true');
    elements.caseStudy.style.display = 'none';
    
    // Show main sections
    const mainSections = document.querySelectorAll('.section:not(#case-study)');
    mainSections.forEach(section => {
        section.style.display = 'block';
    });
    
    // Scroll to projects section
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

/* ============================================
   Initialize Application
   ============================================ */

function setupSkillsScroll() {
    const skillsList = document.getElementById('skills-list');
    const skillsDuplicate = document.getElementById('skills-list-duplicate');
    
    if (skillsList && skillsDuplicate) {
        // Clone all items from the original list to create seamless infinite scroll
        skillsDuplicate.innerHTML = skillsList.innerHTML;
    }
}

function setupNavbarScroll() {
    const header = document.getElementById('header');
    const hero = document.getElementById('home');
    
    if (!header || !hero) return;
    
    function handleScroll() {
        const heroBottom = hero.getBoundingClientRect().bottom;
        const scrollY = window.scrollY;
        
        if (scrollY > 50 || heroBottom < 70) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
}

function init() {
    formatYear();
    renderProjectCards();
    setupMobileNav();
    setupSmoothScroll();
    setupActiveNav();
    setupSkillsScroll();
    setupNavbarScroll();
    
    // Projects carousel navigation event listeners
    if (elements.projectsPrev) {
        elements.projectsPrev.addEventListener('click', prevProjectsSlide);
    }
    
    if (elements.projectsNext) {
        elements.projectsNext.addEventListener('click', nextProjectsSlide);
    }
    
    // Handle window resize for responsive carousel
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            updateCardsPerView();
            const maxIndex = PROJECTS.length - cardsPerView;
            // Keep current card in view, but adjust if necessary
            if (currentProjectsCarouselIndex > maxIndex) {
                currentProjectsCarouselIndex = Math.max(0, maxIndex);
            }
            updateProjectsCarousel();
        }, 250);
    });
    
    // Case study navigation event listeners
    if (elements.backBtn) {
        elements.backBtn.addEventListener('click', closeCaseStudy);
    }
    
    if (elements.prevBtn) {
        elements.prevBtn.addEventListener('click', navigateToPrevious);
    }
    
    if (elements.nextBtn) {
        elements.nextBtn.addEventListener('click', navigateToNext);
    }
    
    // Keyboard navigation for case study
    document.addEventListener('keydown', (e) => {
        if (currentProjectIndex >= 0) {
            if (e.key === 'ArrowLeft') {
                navigateToPrevious();
            } else if (e.key === 'ArrowRight') {
                navigateToNext();
            } else if (e.key === 'Escape') {
                closeCaseStudy();
            }
        }
    });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

