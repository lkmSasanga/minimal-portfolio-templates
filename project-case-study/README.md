# Project Case-Study Portfolio

A clean, modern, single-page portfolio template that showcases your projects as detailed case studies. Perfect for developers and designers who want a professional portfolio without the complexity of frameworks or build tools.

![Portfolio Template](screenshot.png)

## ✨ Features

- **Single-page design** - All content on one page, no routing needed
- **Case study layout** - Project cards expand into detailed case studies with problem/solution/impact format
- **Fully responsive** - Mobile, tablet, and desktop optimized
- **Accessible** - Semantic HTML, keyboard navigation, ARIA labels
- **Performance-focused** - Vanilla JavaScript, no dependencies, lightweight
- **Easy to customize** - Edit one array to update all projects
- **Modern UI** - Clean, product-style design with smooth interactions

## 🚀 Quick Start

1. Clone or download this repository
2. Open `index.html` in your browser
3. That's it! No build process or dependencies required.

## 📁 Project Structure

```
/
  index.html          # Main HTML file
  css/
    styles.css        # All styles (customize colors & spacing here)
  js/
    main.js           # JavaScript logic (edit PROJECTS array here)
  assets/
    project-1.jpg     # Project images (replace with your own)
    project-2.jpg
    project-3.jpg
  README.md
  LICENSE
  .gitignore
```

## 🎨 Customization Guide

### Adding/Editing Projects

Open `js/main.js` and find the `PROJECTS` array. Update it with your own project data:

```javascript
const PROJECTS = [
    {
        id: "project-1",                    // Unique ID
        title: "Your Project Name",          // Project title
        shortDesc: "Brief description...",   // Shown on card
        image: "assets/project-1.jpg",       // Image path
        tech: ["React", "Node.js"],          // Tech stack tags
        problem: "The problem statement...",
        solution: "How you solved it...",
        features: [
            "Feature 1",
            "Feature 2",
            // Add more features
        ],
        results: "Results and impact metrics...",
        liveLink: "https://yourproject.com",  // Live demo URL
        repoLink: "https://github.com/..."    // GitHub repo URL
    },
    // Add more projects...
];
```

**Tips:**
- Add as many projects as you want
- Images should be at least 800px wide for best quality
- Use realistic, impactful metrics in your results section
- Keep short descriptions concise (1-2 sentences)

### Changing Colors & Spacing

Open `css/styles.css` and find the `:root` section at the top. Update the CSS variables:

```css
:root {
    /* Colors */
    --color-primary: #2563eb;        /* Primary brand color */
    --color-primary-dark: #1e40af;   /* Darker shade for hover */
    --color-text: #1e293b;           /* Main text color */
    --color-bg: #ffffff;             /* Background color */
    
    /* Spacing */
    --spacing-md: 1.5rem;            /* Default spacing */
    --spacing-xl: 3rem;              /* Large spacing */
    
    /* Typography */
    --font-size-lg: 1.5rem;          /* Large text size */
    
    /* Layout */
    --container-width: 1000px;       /* Max content width */
}
```

### Updating Personal Information

1. **Header/Navigation**: Edit the logo text in `index.html`:
   ```html
   <a href="#home" class="nav__logo">Your Name</a>
   ```

2. **Hero Section**: Update the hero text in `index.html`:
   ```html
   <h1 class="hero__title">Your Headline</h1>
   <p class="hero__description">Your description...</p>
   ```

3. **About Section**: Update your bio and skills in `index.html`

4. **Contact Section**: Update email and social links in `index.html`:
   ```html
   <a href="mailto:your.email@example.com">your.email@example.com</a>
   ```

5. **Footer**: Update copyright text in `index.html`

6. **Meta Tags**: Update the `<title>` and `<meta name="description">` in the `<head>` section

### Adding Project Images

1. Add your project images to the `assets/` folder
2. Name them consistently (e.g., `project-1.jpg`, `project-2.jpg`)
3. Update the `image` property in the `PROJECTS` array to match your filenames
4. Recommended size: 1200x800px (3:2 ratio) for best results

## 🌐 Deployment

### GitHub Pages

1. Push your repository to GitHub
2. Go to **Settings** → **Pages**
3. Select the branch (usually `main` or `master`)
4. Select `/ (root)` as the source folder
5. Click **Save**
6. Your site will be live at `https://yourusername.github.io/repository-name`

### Other Hosting Options

- **Netlify**: Drag and drop the folder to Netlify Drop
- **Vercel**: Connect your GitHub repo or deploy via CLI
- **Any static hosting**: Upload all files to any web server

No build step required - just upload the files as-is!

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

Uses modern CSS features like CSS Grid and Flexbox. Gracefully degrades in older browsers.

## 🎯 Best Practices

### Writing Case Studies

Follow this structure for compelling case studies:

1. **Problem**: Define the challenge clearly
2. **Solution**: Explain your approach and design decisions
3. **Features**: List key functionality and highlights
4. **Results**: Include metrics and impact (use real data when possible)

### Image Optimization

- Use WebP or optimized JPG/PNG formats
- Aim for file sizes under 200KB per image
- Use appropriate dimensions (don't use massive images)

### Performance Tips

- Lazy load images (already implemented)
- Keep project descriptions concise
- Optimize your images before adding them

## 📄 License

MIT License - feel free to use this template for personal or commercial projects.

## 🤝 Contributing

This is a template repository, but if you find bugs or have suggestions:
1. Fork the repository
2. Make your changes
3. Submit a pull request

## 💡 Tips for Beginners

- Start by editing the `PROJECTS` array - it's the easiest way to see changes
- Use browser DevTools (F12) to inspect and understand the CSS
- Don't worry about getting everything perfect - iterate and improve over time
- Replace placeholder images before sharing your portfolio

## 📞 Support

For issues or questions:
- Open an issue on GitHub
- Check the code comments (marked with `EDIT HERE`) for guidance

---

## 🔧 Original Generation Prompt

This template was generated using the following Cursor prompt:

```text
You are an expert front-end developer and UI designer. Generate a complete, production-ready, beginner-friendly portfolio template repo.

GOAL
Build "Project Case-Study Portfolio" — a modern, product-style single-page portfolio that showcases projects as real-world case studies.

Hook:
- Looks like a professional SaaS/product case study website.

Wow feature:
- Clicking a project opens a full-width case study view with a horizontal carousel (slides).

TECH + CONSTRAINTS
- Use ONLY vanilla HTML, CSS, and JavaScript.
- No frameworks, no build tools, no external libraries.
- Simple, readable code for beginners.
- Fully responsive (mobile, tablet, desktop).
- Accessible: semantic HTML, keyboard navigation, focus states.
- Performance-focused: lightweight, minimal animations.
- Use system font stack only.

REPO STRUCTURE
/
  index.html
  css/
    styles.css
  js/
    main.js
  assets/
    project-1.jpg
    project-2.jpg
    project-3.jpg
  README.md
  LICENSE (MIT)
  .gitignore

DESIGN REQUIREMENTS
- Clean, premium, product-style UI.
- Soft shadows, subtle gradients, rounded cards.
- Max width ~ 1100px centered.
- Sections:
  1) Sticky header (logo + nav)
  2) Hero (intro + CTA: "View Case Studies")
  3) Projects grid
  4) Case study carousel section (hidden by default)
  5) About / Skills
  6) Contact
  7) Footer

PROJECT CARDS
- Grid cards with:
  - Image
  - Title
  - Short summary
  - Tech tags
- Hover effect: lift + shadow / border glow.
- Clear CTA: "View Case Study".

CASE STUDY CAROUSEL (MAIN FEATURE)
- Hidden section shown when a project is clicked.
- Layout:
  - Back button (← All Projects)
  - Project title + subtitle
  - Carousel container.
- Slides:
  1) Overview (hero image + summary)
  2) Problem
  3) Solution
  4) Key Features (bullets)
  5) Tech Stack (tags)
  6) Results / Impact
  7) Links (Live + GitHub)

CAROUSEL FUNCTIONALITY
- Vanilla JS implementation:
  - Next / Prev buttons.
  - Swipe support for mobile.
  - Keyboard arrows support.
  - Dots or progress indicator.
- Smooth transform-based sliding.
- Reset to first slide when opening a new project.

INTERACTION FLOW
1) Click project card.
2) Hide main sections.
3) Show case study section.
4) Load content dynamically.
5) Back button returns to grid and scrolls up.

REUSABILITY (VERY IMPORTANT)
Make customization extremely easy:

- Add a big "EDIT HERE" comment block in index.html.
- In js/main.js define a PROJECTS array:

[
  {
    id: "project-1",
    title: "SaaS Dashboard",
    subtitle: "Analytics platform for teams",
    image: "assets/project-1.jpg",
    shortDesc: "Track KPIs in real time.",
    tech: ["HTML", "CSS", "JavaScript", "API"],
    overview: "High-level intro of the project.",
    problem: "The problem it solves.",
    solution: "How it solves it.",
    features: [
      "Real-time charts",
      "Auth system",
      "Role-based access"
    ],
    results: "Improved engagement by 40%.",
    liveLink: "#",
    repoLink: "#"
  }
]

- Render both:
  - Project cards
  - Case study slides
from this array.
- Users should only edit this config to update content.

RESPONSIVE BEHAVIOR
- Projects grid:
  - 1 column (mobile)
  - 2 columns (tablet)
  - 3 columns (desktop)
- Carousel slides stack vertically on mobile.
- Sticky header collapses to simple mobile nav.

STYLING
- Use CSS variables for colors, spacing, radius.
- Light theme by default (dark optional).
- Subtle transitions only.

NAV + UX
- Smooth scroll nav.
- Active link highlight on scroll.
- Sticky header with background blur.
- Scroll to top when opening case study.

README.md REQUIREMENTS
Include:
- Overview + screenshot placeholders.
- Quick start (open index.html).
- Customization guide:
  - Edit PROJECTS array.
  - Change CSS variables.
- How carousel works.
- Deploy guide (GitHub Pages).
- MIT license note.

DELIVERABLE
Output full contents of:
- index.html
- css/styles.css
- js/main.js
- README.md
- LICENSE
- .gitignore

EXTRA
- Keep UI premium but code simple.
- No unnecessary complexity.
- Everything in a single page.
```
---

**Perfect for dev/design portfolios & case studies.** Made with ❤️ using vanilla HTML, CSS, and JavaScript.