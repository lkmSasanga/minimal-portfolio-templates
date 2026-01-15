// ============================================
// ⚠️ EDIT HERE - CUSTOMIZE YOUR PORTFOLIO ⚠️
// ============================================
// All customization happens in the CONFIG object below.
// Modify the values to match your profile, projects, and content.
// ============================================

const CONFIG = {
  // Profile Information
  profile: {
    name: "John Doe",
    role: "Full Stack Developer",
    summary: "Building beautiful digital experiences with modern web technologies.",
    location: "San Francisco, CA",
    email: "john@example.com",
    cvLink: "#", // Link to your CV/Resume PDF
    socials: [
      { name: "Twitter", url: "https://twitter.com", icon: "𝕏" },
      { name: "GitHub", url: "https://github.com", icon: "⚡" },
      { name: "LinkedIn", url: "https://linkedin.com", icon: "💼" },
      { name: "Email", url: "mailto:alex@example.com", icon: "✉️" },
    ],
  },

  // Stats displayed in hero section
  stats: [
    { label: "Projects", value: "5+" },
    { label: "Years", value: "3" },
    { label: "Status", value: "Open to Work" },
  ],

  // Featured Project (displays in bento grid)
  featuredProject: {
    title: "E-Commerce Platform",
    summary: "Built a scalable e-commerce platform with real-time inventory, payment processing, and analytics. Increased conversion by 40% and reduced load time by 60%.",
    image: "assets/ecom.jpg", // Path to project image
    tags: ["Next.js", "AWS", "Stripe", "PostgreSQL", "Redis", "TypeScript"],
    stats: [
      { label: "Conversion", value: "+40%" },
      { label: "Performance", value: "98%" },
      { label: "Uptime", value: "99.9%" },
      { label: "Load Time", value: "-60%" },
    ],
    highlights: [
      "Real-time inventory management",
      "Secure payment processing",
      "Advanced analytics dashboard",
      "Mobile-responsive design",
      "Multi-vendor support",
      "AI-powered recommendations"
    ],
    challenges: [
      "Scaled to handle 1M+ daily users",
      "Integrated 10+ payment gateways",
      "Reduced server costs by 45%"
    ],
    links: {
      live: "https://example.com",
      repo: "https://github.com",
      caseStudy: "#case-study", // Optional: link to case study or section
    },
  },

  // Bento Grid Cards
  // Each card has a type: 'featured', 'skills', 'about', 'project', 'tools', 'contact', 'availability'
  bentoCards: [
    {
      type: "featured",
      // Featured project card (uses featuredProject from above)
      // This will span 2x2 on desktop automatically
    },
    {
      type: "skills",
      title: "Skills & Expertise",
      items: [
        "React", "TypeScript", "Node.js", "Python",
        "AWS", "PostgreSQL", "Docker", "GraphQL",
      ],
      // Optional: Group by categories for better organization
      categories: {
        "Frontend": ["React", "TypeScript"],
        "Backend": ["Node.js", "Python", "GraphQL"],
        "DevOps": ["AWS", "Docker"],
        "Database": ["PostgreSQL"],
      },
    },
    {
      type: "experience",
      title: "Experience",
      items: [
        {
          role: "Senior Developer",
          company: "Tech Corp",
          period: "2022 - Present",
          description: "Leading frontend architecture"
        },
        {
          role: "Full Stack Developer",
          company: "StartupXYZ",
          period: "2020 - 2022",
          description: "Built scalable web applications"
        },
        {
          role: "Junior Developer",
          company: "Dev Agency",
          period: "2019 - 2020",
          description: "Developed client projects"
        },
      ],
    },
    {
      type: "about",
      title: "About",
      content: "I'm a passionate developer who loves creating innovative solutions. I focus on clean code, user experience, and scalable architectures.",
      highlights: [
        "Clean Code Enthusiast",
        "UX Focused",
        "Problem Solver"
      ],
    },
  ],

  // Projects List (displayed below bento grid)
  projects: [
    {
      title: "Task Management App",
      description: "A collaborative task management tool with real-time updates and team features.",
      tags: ["React", "Socket.io", "MongoDB"],
      liveLink: "https://example.com",
      repoLink: "https://github.com",
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather dashboard with location-based forecasts and interactive maps.",
      tags: ["Vue.js", "OpenWeather API", "Chart.js"],
      liveLink: "https://example.com",
      repoLink: "https://github.com",
    },
    {
      title: "Blog Platform",
      description: "Modern blog platform with markdown support, syntax highlighting, and SEO optimization.",
      tags: ["Next.js", "MDX", "Prisma"],
      liveLink: "https://example.com",
      repoLink: "https://github.com",
    },
  ],
};

// ============================================
// RENDERING LOGIC (No need to edit below)
// ============================================

// Initialize the portfolio
document.addEventListener("DOMContentLoaded", () => {
  renderHero();
  renderBentoGrid();
  renderProjects();
  renderContact();
  renderFooter();
  setupInteractions();
});

// Render Hero Section
function renderHero() {
  const heroTitle = document.getElementById("heroTitle");
  const heroSummary = document.getElementById("heroSummary");
  const heroStats = document.getElementById("heroStats");
  const heroSocial = document.getElementById("heroSocial");
  const cvBtn = document.getElementById("cvBtn");

  if (heroTitle) heroTitle.textContent = CONFIG.profile.role;
  if (heroSummary) heroSummary.textContent = CONFIG.profile.summary;
  if (cvBtn) cvBtn.href = CONFIG.profile.cvLink;

  // Render stats
  if (heroStats) {
    const statIcons = {
      Projects: "📁",
      Years: "💼",
      Status: "💡",
      Experience: "💼",
      "Open to Work": "✨",
    };

    heroStats.innerHTML = CONFIG.stats
      .map((stat) => {
        const icon = statIcons[stat.label] || "📊";
        const isStatus = stat.label.toLowerCase().includes("status") || 
                        stat.label.toLowerCase().includes("open") ||
                        stat.value.toLowerCase().includes("open to work");
        const statusClass = isStatus ? "status-available" : "";
        
        return `
      <div class="stat-chip ${statusClass}">
        <span class="stat-icon">${icon}</span>
        <span class="stat-value">${stat.value}</span>
        <span class="stat-label">${stat.label}</span>
      </div>
    `;
      })
      .join("");
  }

  // Render social links
  if (heroSocial) {
    heroSocial.innerHTML = CONFIG.profile.socials
      .map(
        (social) => `
      <a href="${social.url}" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="${social.name}">
        <span>${social.icon}</span>
        <span>${social.name}</span>
      </a>
    `
      )
      .join("");
  }
}

// Render Bento Grid
function renderBentoGrid() {
  const bentoGrid = document.getElementById("bentoGrid");
  if (!bentoGrid) return;

  bentoGrid.innerHTML = CONFIG.bentoCards
    .map((card) => {
      if (card.type === "featured") {
        return renderFeaturedCard();
      } else if (card.type === "skills") {
        return renderSkillsCard(card);
      } else if (card.type === "about") {
        return renderAboutCard(card);
      } else if (card.type === "project") {
        return renderProjectCard(card);
      } else if (card.type === "tools") {
        return renderToolsCard(card);
      } else if (card.type === "experience") {
        return renderExperienceCard(card);
      } else if (card.type === "availability") {
        return renderAvailabilityCard(card);
      } else if (card.type === "contact") {
        return renderContactCard(card);
      }
      return "";
    })
    .join("");
}

// Render Featured Project Card
function renderFeaturedCard() {
  const { featuredProject } = CONFIG;
  const tags = featuredProject.tags
    .map((tag) => `<span class="tag brand">${tag}</span>`)
    .join("");
  
  const imageHTML = featuredProject.image 
    ? `<div class="featured-image-wrapper">
        <img src="${featuredProject.image}" alt="${featuredProject.title}" class="featured-image" loading="lazy" />
      </div>`
    : `<div class="featured-image-placeholder">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 16L8.586 11.414C9.367 10.633 10.633 10.633 11.414 11.414L16 16M14 14L15.586 12.414C16.367 11.633 17.633 11.633 18.414 12.414L22 16M2 20H22C23.105 20 24 19.105 24 18V6C24 4.895 23.105 4 22 4H2C0.895 4 0 4.895 0 6V18C0 19.105 0.895 20 2 20Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>Project Image</span>
      </div>`;

  // Render stats if available
  const statsHTML = featuredProject.stats
    ? `<div class="featured-stats">
        ${featuredProject.stats.map(stat => `
          <div class="featured-stat">
            <span class="featured-stat-value">${stat.value}</span>
            <span class="featured-stat-label">${stat.label}</span>
          </div>
        `).join("")}
      </div>`
    : "";

  // Render highlights if available
  const highlightsHTML = featuredProject.highlights
    ? `<div class="featured-highlights">
        <h4 class="featured-highlights-title">Key Features</h4>
        <ul class="featured-highlights-list">
          ${featuredProject.highlights.map(highlight => `
            <li class="featured-highlight-item">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.333 4L6 11.333L2.667 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>${highlight}</span>
            </li>
          `).join("")}
        </ul>
      </div>`
    : "";

  // Render challenges if available
  const challengesHTML = featuredProject.challenges
    ? `<div class="featured-challenges">
        <h4 class="featured-challenges-title">Key Achievements</h4>
        <ul class="featured-challenges-list">
          ${featuredProject.challenges.map(challenge => `
            <li class="featured-challenge-item">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 1L9 5L13 5.5L10 8.5L10.5 13L7 11L3.5 13L4 8.5L1 5.5L5 5L7 1Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>${challenge}</span>
            </li>
          `).join("")}
        </ul>
      </div>`
    : "";

  return `
    <div class="bento-card featured" data-card-type="featured">
      ${imageHTML}
      <div class="featured-content">
        <h3 class="bento-card-title">${featuredProject.title}</h3>
        <div class="bento-card-content">${featuredProject.summary}</div>
        ${statsHTML}
        <div class="tags">${tags}</div>
        <div class="featured-sections">
          ${highlightsHTML}
          ${challengesHTML}
        </div>
        <div class="bento-card-footer">
          <a href="${featuredProject.links.live}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">View Live</a>
          <a href="${featuredProject.links.repo}" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">View Code</a>
          ${featuredProject.links.caseStudy ? `<button class="btn btn-secondary" onclick="openCaseStudy()">View Case Study</button>` : ""}
        </div>
      </div>
    </div>
  `;
}

// Render Skills Card
function renderSkillsCard(card) {
  // Group skills by category if provided, otherwise use all items
  const skills = card.items || [];
  const categories = card.categories || null;
  
  let skillsHTML = '';
  
  if (categories) {
    // Render by categories
    skillsHTML = Object.entries(categories)
      .map(([category, items]) => {
        const categorySkills = items
          .map((skill) => `<span class="skill-tag">${skill}</span>`)
          .join("");
        return `
          <div class="skill-category">
            <h4 class="skill-category-title">${category}</h4>
            <div class="skill-tags">${categorySkills}</div>
          </div>
        `;
      })
      .join("");
  } else {
    // Render as simple tags
    skillsHTML = skills
      .map((skill) => `<span class="skill-tag">${skill}</span>`)
      .join("");
    skillsHTML = `<div class="skill-tags">${skillsHTML}</div>`;
  }

  return `
    <div class="bento-card skills-card" data-card-type="skills">
      <h3 class="bento-card-title">${card.title}</h3>
      <div class="skills-content">${skillsHTML}</div>
    </div>
  `;
}

// Render About Card
function renderAboutCard(card) {
  const highlightsHTML = card.highlights
    ? `<div class="about-highlights">
        ${card.highlights.map((highlight, index) => {
          const icons = ["✨", "🚀", "💡", "🎯", "⚡"];
          const icon = icons[index % icons.length];
          return `
            <div class="about-highlight-item">
              <span class="about-highlight-icon">${icon}</span>
              <span class="about-highlight-text">${highlight}</span>
            </div>
          `;
        }).join("")}
      </div>`
    : "";

  return `
    <div class="bento-card about-card" data-card-type="about">
      <h3 class="bento-card-title">${card.title}</h3>
      <div class="bento-card-content">${card.content}</div>
      ${highlightsHTML}
    </div>
  `;
}

// Render Project Card (in bento grid)
function renderProjectCard(card) {
  const tags = card.tags
    .map((tag) => `<span class="tag">${tag}</span>`)
    .join("");

  return `
    <div class="bento-card" data-card-type="project">
      <h3 class="bento-card-title">${card.title}</h3>
      <div class="bento-card-content">${card.description}</div>
      <div class="tags">${tags}</div>
      <div class="bento-card-footer">
        <a href="${card.links.live}" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">View Live</a>
        <a href="${card.links.repo}" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">View Code</a>
      </div>
    </div>
  `;
}

// Render Tools Card
function renderToolsCard(card) {
  // Tool icons mapping
  const toolIcons = {
    "VS Code": "💻",
    "Git": "🔀",
    "Figma": "🎨",
    "Notion": "📝",
    "Vercel": "▲",
    "MongoDB": "🍃",
    "Redis": "⚡",
    "Jest": "🧪",
    "Docker": "🐳",
    "AWS": "☁️",
    "GitHub": "🐙",
    "Postman": "📮",
    "Slack": "💬",
    "Linear": "📊",
  };

  const tools = card.items.map((tool) => {
    const icon = toolIcons[tool] || "⚙️";
    return `
      <div class="tool-item">
        <span class="tool-icon">${icon}</span>
        <span class="tool-name">${tool}</span>
      </div>
    `;
  }).join("");

  return `
    <div class="bento-card tools-card" data-card-type="tools">
      <h3 class="bento-card-title">${card.title}</h3>
      <div class="tools-grid">${tools}</div>
    </div>
  `;
}

// Render Experience Card
function renderExperienceCard(card) {
  const experiences = card.items || [];
  
  const experienceHTML = experiences.map((exp, index) => {
    const isLast = index === experiences.length - 1;
    return `
      <div class="experience-item ${isLast ? 'experience-item-last' : ''}">
        <div class="experience-timeline">
          <div class="experience-dot"></div>
          ${!isLast ? '<div class="experience-line"></div>' : ''}
        </div>
        <div class="experience-content">
          <div class="experience-header">
            <h4 class="experience-role">${exp.role}</h4>
            <span class="experience-period">${exp.period}</span>
          </div>
          <div class="experience-company">${exp.company}</div>
          <div class="experience-description">${exp.description}</div>
        </div>
      </div>
    `;
  }).join("");

  return `
    <div class="bento-card experience-card" data-card-type="experience">
      <h3 class="bento-card-title">${card.title}</h3>
      <div class="experience-list">${experienceHTML}</div>
    </div>
  `;
}

// Render Availability Card
function renderAvailabilityCard(card) {
  return `
    <div class="bento-card" data-card-type="availability">
      <h3 class="bento-card-title">${card.title}</h3>
      <div class="bento-card-content">${card.content}</div>
    </div>
  `;
}

// Render Contact Card (in bento grid)
function renderContactCard(card) {
  return `
    <div class="bento-card" data-card-type="contact">
      <h3 class="bento-card-title">${card.title}</h3>
      <div class="bento-card-content">${card.content}</div>
      <div class="bento-card-footer">
        <a href="mailto:${CONFIG.profile.email}" class="btn btn-primary">Get In Touch</a>
      </div>
    </div>
  `;
}

// Render Projects Section
function renderProjects() {
  const projectsGrid = document.getElementById("projectsGrid");
  if (!projectsGrid) return;

  projectsGrid.innerHTML = CONFIG.projects
    .map(
      (project) => {
        const tags = project.tags
          .map((tag) => `<span class="tag">${tag}</span>`)
          .join("");

        return `
      <div class="project-card">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-desc">${project.description}</p>
        <div class="tags">${tags}</div>
        <div class="project-links">
          <a href="${project.liveLink}" class="project-link" target="_blank" rel="noopener noreferrer">View Live →</a>
          <a href="${project.repoLink}" class="project-link" target="_blank" rel="noopener noreferrer">View Code →</a>
        </div>
      </div>
    `;
      }
    )
    .join("");
}

// Render Contact Section
function renderContact() {
  const emailValue = document.getElementById("emailValue");
  const locationValue = document.getElementById("locationValue");

  if (emailValue) emailValue.textContent = CONFIG.profile.email;
  if (locationValue) locationValue.textContent = CONFIG.profile.location;
}

// Render Footer
function renderFooter() {
  const currentYear = document.getElementById("currentYear");
  const footerName = document.getElementById("footerName");

  if (currentYear) currentYear.textContent = new Date().getFullYear();
  if (footerName) footerName.textContent = CONFIG.profile.name;
}

// Setup Interactions
function setupInteractions() {
  // Smooth scroll for nav links with header offset
  const header = document.getElementById("header");
  const headerHeight = header ? header.offsetHeight : 80;
  
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href === "#" || href === "#case-study") return;

      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = targetPosition - headerHeight - 20; // Extra 20px spacing

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // Copy email functionality - make entire email item clickable
  const copyEmailBtn = document.getElementById("copyEmailBtn");
  const emailContactItem = document.getElementById("emailContactItem");
  const toast = document.getElementById("toast");
  const toastText = document.getElementById("toastText");

  const copyEmail = () => {
    navigator.clipboard
      .writeText(CONFIG.profile.email)
      .then(() => {
        if (toast && toastText) {
          const messages = [
            "Copied! ✨",
            "Email copied! 🎉",
            "Ready to paste! 📋",
            "All set! 🚀",
            "Copied to clipboard! 💫"
          ];
          const randomMessage = messages[Math.floor(Math.random() * messages.length)];
          toastText.textContent = randomMessage;
          toast.classList.add("show");
          setTimeout(() => {
            toast.classList.remove("show");
          }, 3000);
        }
      })
      .catch((err) => {
        console.error("Failed to copy email:", err);
      });
  };

  // Make copy button clickable
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent triggering parent click
      copyEmail();
    });
  }

  // Make entire email item clickable to copy
  if (emailContactItem) {
    emailContactItem.addEventListener("click", () => {
      copyEmail();
    });
  }

  // Modal functionality (for case study)
  const modal = document.getElementById("modal");
  const modalOverlay = document.getElementById("modalOverlay");
  const modalClose = document.getElementById("modalClose");

  if (modal && modalOverlay && modalClose) {
    const openModal = () => {
      if (modal) {
        modal.classList.add("active");
        modal.showModal();
        document.body.style.overflow = "hidden";
      }
    };

    const closeModal = () => {
      if (modal) {
        modal.classList.remove("active");
        modal.close();
        document.body.style.overflow = "";
      }
    };

    modalOverlay.addEventListener("click", closeModal);
    modalClose.addEventListener("click", closeModal);

    // Close on ESC key (native dialog handles this, but keeping for consistency)
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && (modal.classList.contains("active") || modal.open)) {
        closeModal();
      }
    });

    // Make openCaseStudy available globally
    window.openCaseStudy = () => {
      const modalTitle = document.getElementById("modalTitle");
      const modalBody = document.getElementById("modalBody");

      if (modalTitle) {
        modalTitle.textContent = CONFIG.featuredProject.title;
      }

      if (modalBody) {
        modalBody.innerHTML = `
          <p>${CONFIG.featuredProject.summary}</p>
          <div class="tags" style="margin-top: 1rem;">
            ${CONFIG.featuredProject.tags
              .map((tag) => `<span class="tag brand">${tag}</span>`)
              .join("")}
          </div>
          <div style="margin-top: 1.5rem;">
            <a href="${CONFIG.featuredProject.links.live}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">View Live Site</a>
            <a href="${CONFIG.featuredProject.links.repo}" class="btn btn-secondary" target="_blank" rel="noopener noreferrer" style="margin-left: 0.5rem;">View Code</a>
          </div>
        `;
      }

      openModal();
    };
  }
}