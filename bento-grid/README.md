# Bento Grid Modern Portfolio Template

A premium, modern portfolio template built with vanilla HTML, CSS, and JavaScript. Features a trendy bento grid layout that's perfect for showcasing your work, skills, and projects.

![Bento Grid Portfolio](https://via.placeholder.com/1200x600/1a1a1a/ffffff?text=Bento+Grid+Portfolio)

## 🎯 Features

- **Modern Bento Grid Layout** - Responsive grid with variable card sizes
- **Fully Responsive** - Mobile, tablet, and desktop optimized
- **Dark Theme** - Premium dark theme with subtle gradients and patterns
- **Easy Customization** - Edit one CONFIG object to personalize everything
- **Accessible** - Semantic HTML, keyboard navigation, and focus states
- **Fast Performance** - No frameworks, minimal JavaScript
- **Shareable** - Perfect for YouTube thumbnails with high-contrast design

## 🚀 Quick Start

1. **Clone or download this repository**
   ```bash
   git clone https://github.com/yourusername/bento-grid-portfolio.git
   cd bento-grid-portfolio
   ```

2. **Open in your browser**
   - Simply open `index.html` in your browser
   - Or use a local server:
     ```bash
     # Python
     python -m http.server 8000
     
     # Node.js
     npx serve .
     
     # PHP
     php -S localhost:8000
     ```

3. **Customize your portfolio**
   - Open `js/main.js`
   - Edit the `CONFIG` object at the top of the file
   - Save and refresh your browser

## 📝 Customization Guide

### Step 1: Edit the CONFIG Object

Open `js/main.js` and modify the `CONFIG` object:

```javascript
const CONFIG = {
  profile: {
    name: "Your Name",
    role: "Your Role",
    summary: "Your summary text",
    location: "Your Location",
    email: "your.email@example.com",
    cvLink: "#", // Link to your CV PDF
    socials: [
      { name: "Twitter", url: "https://twitter.com/yourhandle", icon: "𝕏" },
      { name: "GitHub", url: "https://github.com/yourusername", icon: "⚡" },
      // Add more socials...
    ],
  },
  // ... more config options
};
```

### Step 2: Customize Colors and Spacing

Open `css/styles.css` and modify CSS variables:

```css
:root {
  --bg: #0a0a0a;              /* Background color */
  --panel: #1a1a1a;           /* Card background */
  --text: #ffffff;            /* Main text color */
  --brand: #6366f1;           /* Brand/accent color */
  --radius: 12px;             /* Border radius */
  /* ... more variables */
}
```

### Step 3: Add Your Projects

In the `CONFIG` object, update the `projects` array:

```javascript
projects: [
  {
    title: "My Amazing Project",
    description: "A brief description of your project",
    tags: ["React", "TypeScript", "Node.js"],
    liveLink: "https://yourproject.com",
    repoLink: "https://github.com/yourusername/project",
  },
  // Add more projects...
],
```

### Step 4: Customize Bento Grid Cards

Modify the `bentoCards` array in `CONFIG`:

```javascript
bentoCards: [
  {
    type: "featured", // Automatically uses featuredProject
  },
  {
    type: "skills",
    title: "My Skills",
    items: ["React", "TypeScript", "Node.js", "Python"],
  },
  // Add or remove cards...
],
```

### Step 5: Add Your Images (Optional)

Place your images in the `assets/` directory:
- `avatar.png` - Your profile picture (if needed)
- `project-1.jpg` - Project screenshots (if needed)
- `project-2.jpg`
- `project-3.jpg`

Then reference them in your HTML or config as needed.

## 📁 Project Structure

```
bento-grid-portfolio/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styles and CSS variables
├── js/
│   └── main.js         # CONFIG object and rendering logic
├── assets/
│   ├── avatar.png      # Placeholder for your avatar
│   ├── project-1.jpg   # Placeholder for project images
│   ├── project-2.jpg
│   └── project-3.jpg
├── README.md           # This file
├── LICENSE             # MIT License
└── .gitignore          # Git ignore file
```

## 🎨 Bento Grid Layout

The bento grid automatically adapts to different screen sizes:

- **Mobile** (< 768px): Single column stack
- **Tablet** (768px - 1023px): 2 columns
- **Desktop** (≥ 1024px): 3-4 columns with featured card spanning 2x2

The featured project card automatically spans multiple columns on desktop for visual impact.

## 🌐 Deployment

### GitHub Pages

1. Push your code to a GitHub repository
2. Go to repository Settings → Pages
3. Select your branch (usually `main` or `master`)
4. Your site will be available at `https://yourusername.github.io/repository-name`

### Netlify

1. Drag and drop your project folder to [Netlify Drop](https://app.netlify.com/drop)
2. Your site will be live instantly!

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts

### Other Platforms

This is a static site, so it works on any hosting platform:
- Cloudflare Pages
- AWS S3 + CloudFront
- Any static hosting service

## 🔧 Advanced Customization

### Adding New Card Types

1. Add a new card type to `bentoCards` in `CONFIG`
2. Create a render function in `js/main.js` (e.g., `renderCustomCard`)
3. Add the rendering logic in `renderBentoGrid()`

### Modifying Grid Layout

Edit the grid layout in `css/styles.css`:

```css
@media (min-width: 1024px) {
  .bento-grid {
    grid-template-columns: repeat(4, 1fr);
  }
  
  .bento-card.featured {
    grid-column: span 2;
    grid-row: span 2;
  }
}
```

### Adding Animations

The template includes subtle hover effects. To customize, edit the `.bento-card:hover` styles in `css/styles.css`.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Credits

- Built with vanilla HTML, CSS, and JavaScript
- System font stack for fast loading
- Modern CSS Grid for flexible layouts

## 📧 Support

If you have questions or need help customizing the template:

1. Check the code comments in `js/main.js` and `css/styles.css`
2. Review the CONFIG object structure
3. Open an issue on GitHub

## 📋 Initial Development Prompt

This template was built using the following initial prompt:

```
You are an expert front-end developer and UI designer. Build a premium "Bento Grid" modern portfolio template that is highly shareable on YouTube (great first 3 seconds) and easy for beginners to reuse.

GOAL
Template #05 — "Bento Grid Modern Portfolio"
Hook: trendy bento layout (high CTR)
Wow feature: responsive bento grid with a featured project block
Shorts: "Bento grid in 20s", "Responsive grid trick"

TECH + CONSTRAINTS
- Vanilla HTML, CSS, and JavaScript only (no frameworks).
- Use CSS Grid for the bento layout.
- Modern, minimal, high-contrast UI (good for thumbnails).
- Fully responsive (mobile/tablet/desktop).
- Accessible: semantic HTML, focus states, keyboard-friendly.
- Fast: no heavy animations, minimal JS.
- System font stack only.

REPO STRUCTURE
/
  index.html
  css/
    styles.css
  js/
    main.js
  assets/
    avatar.png (placeholder filename only)
    project-1.jpg
    project-2.jpg
    project-3.jpg
  README.md
  LICENSE (MIT)
  .gitignore

VISUAL DESIGN (MAKE IT LOOK PREMIUM)
- Dark theme by default (better thumbnails), with subtle gradient background and faint noise/grid pattern (CSS-only).
- Cards: rounded corners, soft shadow, thin border, subtle hover lift + glow.
- Consistent spacing and typography scale.
- Use CSS variables for theme tokens:
  --bg, --panel, --text, --muted, --border, --brand, --radius, --shadow, --space-*

PAGE SECTIONS
1) Sticky header:
   - name/logo left, nav right, CTA button "Download CV" or "Contact"
2) Hero card:
   - big headline + short summary + social links
   - small stat chips (e.g., "5+ Projects", "3 Years", "Open to Work" placeholders)
3) Bento Grid (MAIN)
   - a grid of cards with varying sizes (featured card spans multiple rows/cols)
   - include:
     - Featured Project card (largest)
     - Skills card
     - About mini card
     - Latest project card
     - Tools/stack card
     - Contact card or availability card
4) Projects list section (optional) below grid: 3 smaller cards
5) Contact section
6) Footer

BENTO GRID REQUIREMENTS (IMPORTANT)
- Use CSS Grid to create a bento layout with variable card sizes.
- The grid should adapt smoothly across breakpoints:
  - Mobile: single column stack (cards full width).
  - Tablet: 2 columns.
  - Desktop: 3–4 columns with featured block spanning.
- Implement layout using grid + responsive rules (media queries).
- Prefer modern grid techniques like minmax() for flexible sizing. (minmax is designed for grid sizing ranges.) 
- DO NOT overcomplicate; keep readable CSS.
- Ensure no awkward gaps or overflow.

FEATURED PROJECT CARD (WOW)
- Big title + short case-study style blurb (Problem → Solution → Impact in 2 lines).
- Tags pills (e.g., "Next.js", "AWS", "Stripe" placeholders).
- "View Case Study" button (scrolls to a section or opens a simple modal).
- Add a subtle "shine" hover effect (optional but tasteful).

REUSABILITY (MOST IMPORTANT)
Make it super easy to customize:
- Add a big "EDIT HERE" section in index.html.
- In js/main.js create ONE CONFIG object:
  - profile: name, role, summary, location, email, socials, cvLink
  - stats: [{label, value}]
  - featuredProject: {title, summary, tags[], links}
  - bentoCards: array defining cards content (type: skills/about/project/tools/contact)
  - projects: [{title, desc, tags[], liveLink, repoLink}]
- Render:
  - Hero details from CONFIG
  - Featured card from CONFIG
  - Skills tags from CONFIG
  - Projects from CONFIG
Users should mostly only edit CONFIG.

INTERACTIONS
- Smooth scroll for nav links.
- "Copy Email" button with small toast ("Copied!").
- Card hover: lift + subtle glow.
- Optional: simple modal for "Case Study" (ESC to close, focus trap not required but nice).

README.md
- Overview + screenshot placeholder
- Quick start (open index.html)
- Customization guide (edit CONFIG + CSS variables)
- Deploy guide (GitHub Pages)
- License info

DELIVERABLE
Output full contents of:
- index.html
- css/styles.css
- js/main.js
- README.md
- LICENSE
- .gitignore

EXTRA (HIGH RETENTION)
- Make the first screen visually striking: hero + bento grid visible without scrolling on desktop.
- Keep code clean and beginner-friendly with comments.
```

---

**Made with ❤️ for developers who want a beautiful portfolio without the complexity.**

Happy coding! 🚀