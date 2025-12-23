# Dark Mode Dev Portfolio

A modern, clean, and recruiter-friendly single-page portfolio template with dark/light mode toggle. Built with vanilla HTML, CSS, and JavaScript - no frameworks or dependencies required.

![Portfolio Screenshot](assets/profile.png) <!-- Replace with actual screenshot -->

## ✨ Features

- 🌓 **Dark/Light Mode Toggle** - Persistent theme preference using localStorage
- 🎨 **OS Theme Detection** - Automatically respects system preference on first visit
- 📱 **Fully Responsive** - Works beautifully on mobile, tablet, and desktop
- ♿ **Accessible** - Semantic HTML, keyboard navigation, ARIA labels, focus states
- ⚡ **Fast & Lightweight** - No external dependencies, minimal assets
- 🎯 **Easy to Customize** - Simple CONFIG object for all content
- 🎨 **Modern Design** - Clean typography, smooth transitions, professional layout

## 🚀 Quick Start

1. **Clone or download** this repository
2. **Open `index.html`** in your browser - that's it!

No build step, no package installation, no configuration needed.

## 📁 Project Structure

```
/
  ├── index.html          # Main HTML file
  ├── css/
  │   └── styles.css      # All styles with CSS variables
  ├── js/
  │   └── main.js         # CONFIG object and functionality
  ├── assets/
  │   └── profile.png     # Your profile picture (add your own)
  ├── README.md
  ├── LICENSE
  └── .gitignore
```

## 🎨 Customization Guide (5 Minutes)

### Step 1: Update Your Content

Open `js/main.js` and edit the `CONFIG` object at the top:

```javascript
const CONFIG = {
    name: 'Your Name',
    role: 'Full Stack Developer',
    email: 'your.email@example.com',
    heroText: 'Your hero text here...',
    
    social: {
        github: 'https://github.com/yourusername',
        linkedin: 'https://linkedin.com/in/yourusername',
        twitter: 'https://twitter.com/yourusername'
    },
    
    skills: ['JavaScript', 'React', 'Node.js', ...],
    
    projects: [
        {
            title: 'Project Name',
            description: 'Project description...',
            tech: ['React', 'Node.js'],
            liveLink: 'https://example.com',
            repoLink: 'https://github.com/...'
        },
        // Add more projects...
    ],
    
    experience: [
        {
            title: 'Job Title',
            company: 'Company Name',
            date: '2020 - Present',
            description: 'Job description...'
        },
        // Add more experience...
    ]
};
```

### Step 2: Add Your Profile Picture

Replace `assets/profile.png` with your own profile picture. The image will automatically display as a circular image, or hide gracefully if missing.

### Step 3: Customize Colors (Optional)

Open `css/styles.css` and modify the CSS variables at the top:

```css
:root {
    /* Light Theme Colors */
    --bg-primary: #ffffff;
    --accent: #0066cc;
    /* ... modify other colors */
}

[data-theme="dark"] {
    /* Dark Theme Colors */
    --bg-primary: #1a1a1a;
    --accent: #4a9eff;
    /* ... modify other colors */
}
```

## 🌓 How Theme System Works

The theme system uses:

1. **localStorage** - Saves your theme preference (`"dark"` or `"light"`)
2. **OS Preference** - On first visit, detects `prefers-color-scheme` media query
3. **CSS Variables** - All colors are defined as CSS variables, making theme switching instant
4. **Smooth Transitions** - Background and text colors transition smoothly when switching themes

The theme toggle button:
- Shows a moon icon in light mode (click to go dark)
- Shows a sun icon in dark mode (click to go light)
- Includes a label showing current theme
- Is fully keyboard accessible

## 📱 Responsive Breakpoints

- **Desktop**: Full layout with sidebar navigation
- **Tablet** (≤768px): Stacked navigation, adjusted spacing
- **Mobile** (≤480px): Single column layout, full-width buttons

## 🚢 Deployment

### GitHub Pages (Easiest)

1. Push your code to a GitHub repository
2. Go to **Settings** → **Pages**
3. Select **main branch** (or your default branch)
4. Click **Save**
5. Your site will be live at `https://yourusername.github.io/repository-name`

### Other Hosting Options

- **Netlify**: Drag and drop the folder, or connect your Git repository
- **Vercel**: Import your Git repository
- **Any static hosting**: Upload all files to your web server

## 🎯 Features Explained

### Smooth Scrolling
Navigation links smoothly scroll to sections with proper offset for the sticky header.

### Active Nav Highlighting
Uses IntersectionObserver to highlight the current section in the navigation as you scroll.

### Theme Persistence
Your theme choice is saved in localStorage and persists across page reloads.

### Accessibility
- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus states for all interactive elements
- Reduced motion support

## 📝 License

MIT License - feel free to use this template for your portfolio. Credit is optional but appreciated!

## 🙏 Credits

Built with vanilla HTML, CSS, and JavaScript. Use this template freely for your portfolio projects.

---

**Note**: This is a beginner-friendly template designed to be easy to understand and customize. No build tools, no frameworks, just clean, semantic code.

