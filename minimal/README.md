# Minimal Portfolio Template

A clean, recruiter-friendly, one-page portfolio website built with vanilla HTML, CSS, and JavaScript. Perfect for developers who want a professional online presence without the complexity of frameworks.

## ✨ Features

- **Sticky Navigation** - Navigation bar sticks to the top while scrolling with active section highlighting
- **Copy Email Button** - One-click email copying with toast notification
- **Fully Responsive** - Works beautifully on mobile, tablet, and desktop
- **Accessible** - Semantic HTML, keyboard navigation, ARIA labels, and focus states
- **Lightweight** - No external dependencies, pure vanilla code
- **Easy to Customize** - Clear "EDIT HERE" sections and comprehensive guide

## 📋 Original Project Specification

This template was built based on the following requirements:

```
You are an expert front-end developer. Generate a complete, production-ready, beginner-friendly portfolio template repo.

GOAL
Build "Minimal Recruiter-Friendly One-Pager" portfolio website.
- Ultra clean, scannable, recruiter-friendly.
- Responsive (mobile/tablet/desktop).
- Wow features:
  1) Sticky top navigation with active section highlight while scrolling.
  2) "Copy email" button that copies my email to clipboard and shows a small toast ("Copied!").

TECH + CONSTRAINTS
- Use ONLY vanilla HTML + CSS + JS (no frameworks).
- Keep code simple and well-structured for reuse by people who clone the repo.
- Avoid heavy animations; subtle transitions only.
- Must work on modern browsers (Chrome/Edge/Safari/Firefox).
- Accessibility: semantic HTML, keyboard navigation, focus states, ARIA where needed.
- Performance: lightweight, no external libraries required.

REPO STRUCTURE (create these files)
/
  index.html
  assets/
    profile.png (use placeholder name only; don't generate image)
  css/
    styles.css
  js/
    main.js
  README.md
  LICENSE (MIT)
  .gitignore

DESIGN REQUIREMENTS
- Minimal, lots of whitespace, easy to scan.
- Max content width ~ 900–1000px, centered.
- System font stack (no external fonts).
- Sections (single page):
  1) Hero (name, title, 1–2 lines summary, primary CTA: "View Projects", secondary CTA: "Copy Email")
  2) Skills (simple tags)
  3) Experience (2–3 roles, bullet points)
  4) Projects (3 cards with short impact-focused descriptions + links placeholders)
  5) Education + Certifications (optional small section)
  6) Contact (email + socials)
- Add a small footer with copyright.

REUSABILITY (VERY IMPORTANT)
Create a single source of truth for editable content:
- In index.html, define a clear "EDIT HERE" block near the top using HTML comments.
- Use data attributes (data-name, data-title, data-email, etc.) or a simple JSON object in main.js to populate content (choose whichever is simplest for vanilla).
- Provide a "Customization Guide" in README.md explaining exactly what to change (name, email, links, projects, colors), in 5 minutes.

FUNCTIONAL REQUIREMENTS
1) Sticky Nav:
- Nav sticks to top after scrolling.
- Clicking nav links smooth scrolls to sections.
- Active section link highlights based on scroll position (IntersectionObserver preferred; fallback ok).
- On mobile, nav collapses into a simple hamburger menu (accessible) OR becomes a horizontally scrollable bar (choose simplest clean option).

2) Copy Email Button:
- Copies email to clipboard.
- If clipboard API fails, fallback to selecting text in an input and copying.
- Show toast/snackbar at bottom: "Email copied".
- Button should also be keyboard accessible.

CONTENT STYLE
- Recruiter-friendly wording:
  - Focus on outcomes, impact, metrics (use placeholders).
  - Project descriptions should include what it does + tech used + results.

DELIVERABLE
Output the full contents of every file listed above.
Ensure all links are placeholders but realistic (GitHub, LinkedIn).
Make sure it looks good without any assets (profile.png optional).

EXTRA
- Add a small "Deploy" section in README: GitHub Pages steps.
- Add a short "How to record this build" checklist (for my YouTube video).
```

## 🚀 Quick Start

1. **Clone or download this repository**
   ```bash
   git clone <your-repo-url>
   cd Minimal
   ```

2. **Open `index.html` in your browser**
   - Simply double-click the file, or
   - Use a local server: `python -m http.server` or `npx serve`

3. **Customize your content** (see Customization Guide below)

## 📝 Customization Guide (5 Minutes)

### Step 1: Update Personal Information

Open `index.html` and find the **"EDIT HERE"** comment block near the top. Update:

- **Name**: Replace "Your Name" in the hero section
- **Title**: Change "Front-end Developer" to your role
- **Summary**: Update the hero summary text
- **Email**: Update `your.email@example.com` in two places:
  - In the contact section
  - In `js/main.js` at the top (update the `EMAIL` constant)

### Step 2: Update Skills

In `index.html`, find the `.skills-grid` section and replace the skill tags with your own:
```html
<span class="skill-tag">Your Skill</span>
```

### Step 3: Update Experience

Replace the experience items in the `#experience` section with your own roles. Each item includes:
- Job title
- Company name
- Date range
- Bullet points with achievements (focus on impact and metrics)

### Step 4: Update Projects

Replace the project cards in the `#projects` section. Each project card includes:
- Project title
- Description (what it does + tech used + results)
- Technology tags
- Links to GitHub and live demo

### Step 5: Update Education & Certifications

Modify the `#education` section with your educational background and certifications.

### Step 6: Update Social Links

In the `#contact` section, update the social media links:
- Replace `yourusername` with your actual usernames
- Remove any social links you don't use

### Step 7: Customize Colors (Optional)

Open `css/styles.css` and find the `:root` section at the top. Modify the CSS variables:
```css
:root {
    --primary-color: #2563eb;      /* Main brand color */
    --primary-hover: #1d4ed8;      /* Hover state */
    --secondary-color: #64748b;    /* Secondary text */
    --text-color: #1e293b;         /* Main text */
    --text-light: #64748b;         /* Light text */
    --bg-color: #ffffff;           /* Background */
    --bg-light: #f8fafc;           /* Light background */
}
```

### Step 8: Add Your Profile Picture (Optional)

1. Add your profile image to `assets/profile.png`
2. The image should be square (recommended: 300x300px or larger)
3. If no image is provided, it will be hidden automatically

### Step 9: Update Footer

In `index.html`, find the footer and replace "Your Name" with your actual name.

## 🌐 Deploy to GitHub Pages

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under "Source", select **main** branch
   - Click **Save**
   - Your site will be live at `https://yourusername.github.io/repository-name/`

3. **Custom Domain (Optional)**
   - Add a `CNAME` file in the root directory with your domain name
   - Configure DNS settings with your domain provider

## 📁 File Structure

```
Minimal/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styles
├── js/
│   └── main.js         # JavaScript functionality
├── assets/
│   └── profile.png     # Your profile picture (optional)
├── README.md           # This file
├── LICENSE             # MIT License
└── .gitignore          # Git ignore file
```

## 🎬 How to Record This Build (YouTube Video Checklist)

### Pre-Recording Setup
- [ ] Clone/download the template
- [ ] Have a code editor ready (VS Code recommended)
- [ ] Have a browser open for live preview
- [ ] Prepare your own content (name, email, projects, etc.)

### Recording Structure
1. **Introduction (30 seconds)**
   - [ ] Show the final result (live demo)
   - [ ] Explain what we're building
   - [ ] Mention key features

2. **File Structure Overview (1 minute)**
   - [ ] Show the directory structure
   - [ ] Explain each file's purpose
   - [ ] Highlight the "EDIT HERE" sections

3. **HTML Walkthrough (3-4 minutes)**
   - [ ] Show the HTML structure
   - [ ] Explain semantic HTML usage
   - [ ] Point out the customization sections
   - [ ] Show how to update content

4. **CSS Walkthrough (3-4 minutes)**
   - [ ] Explain the CSS variables (colors)
   - [ ] Show responsive design approach
   - [ ] Demonstrate sticky navigation styles
   - [ ] Show mobile menu styles

5. **JavaScript Functionality (3-4 minutes)**
   - [ ] Explain sticky nav implementation
   - [ ] Show IntersectionObserver for active sections
   - [ ] Demonstrate copy email functionality
   - [ ] Show mobile menu toggle

6. **Customization Demo (2-3 minutes)**
   - [ ] Update name and email
   - [ ] Change colors
   - [ ] Add a project
   - [ ] Show live changes

7. **Deployment (1-2 minutes)**
   - [ ] Show GitHub Pages setup
   - [ ] Demonstrate the live site

8. **Closing (30 seconds)**
   - [ ] Recap key features
   - [ ] Mention customization guide
   - [ ] Call to action (like, subscribe, etc.)

### Tips for Recording
- Use a screen recorder (OBS, Loom, or QuickTime)
- Record at 1080p minimum
- Use a clear, readable font in your editor
- Zoom in on code when explaining
- Show browser preview side-by-side when possible
- Keep explanations concise and beginner-friendly

## 🛠️ Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Feel free to fork this project and customize it for your needs. If you make improvements that could benefit others, pull requests are welcome!

## 💡 Tips

- **Keep it updated**: Regularly update your projects and experience
- **Use metrics**: Include numbers and impact in your descriptions
- **Test on mobile**: Always preview on a real device before deploying
- **Optimize images**: Compress your profile picture for faster loading
- **SEO**: Update the meta description in the `<head>` section

## 📧 Support

If you have questions or need help customizing, feel free to open an issue on GitHub.

---

**Made with ❤️ for developers who value simplicity and performance.**

