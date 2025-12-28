# Timeline Resume Portfolio

A beautiful, modern, and animated portfolio template featuring a stunning CSS-only timeline layout. Perfect for showcasing your experience, education, skills, and projects in an instantly impressive way.

![Portfolio Preview](https://via.placeholder.com/1200x600?text=Timeline+Resume+Portfolio+Preview)

## ✨ Features

- **CSS-Only Timeline Animation** - Smooth, impressive timeline animations without JavaScript
- **Fully Responsive** - Looks great on desktop, tablet, and mobile devices
- **Easy Customization** - Edit one CONFIG object to update all content
- **Modern Design** - Clean, minimal, recruiter-friendly interface
- **Accessible** - Semantic HTML, keyboard navigation, focus styles
- **Lightweight** - No frameworks or external dependencies
- **System Fonts** - Fast loading with native system fonts

## 🚀 Quick Start

1. **Clone or download this repository**
   ```bash
   git clone https://github.com/yourusername/timeline-resume-portfolio.git
   cd timeline-resume-portfolio
   ```

2. **Open `index.html` in your browser**
   - That's it! No build process, no dependencies to install.

3. **Customize your content**
   - Open `js/main.js`
   - Edit the `CONFIG` object with your information
   - See the [Customization Guide](#customization-guide) below

## 📝 Customization Guide (5 Minutes)

### Step 1: Update Personal Information

Open `js/main.js` and edit the `CONFIG` object:

```javascript
const CONFIG = {
    name: 'Your Name',
    role: 'Your Role',
    location: 'Your Location',
    email: 'your.email@example.com',
    summary: 'Your professional summary...',
    profileImage: 'assets/profile.png', // Circular profile image (150x150px or larger)
    heroImage: 'assets/hero.jpg', // Hero background image (1920x1080px recommended)
    // ... rest of the config
};
```

### Step 2: Add Your Skills

Update the `skills` object in `CONFIG`:

```javascript
skills: {
    'Top Skills': ['JavaScript', 'React', 'Node.js'],
    'Frontend': ['React', 'Vue.js', 'CSS3'],
    'Backend': ['Node.js', 'Python', 'PostgreSQL'],
    'Tools & Others': ['Git', 'Docker', 'AWS']
}
```

### Step 3: Add Timeline Items

Add your experience and education to the `timeline` array:

```javascript
timeline: [
    {
        type: 'experience', // or 'education'
        title: 'Job Title',
        organization: 'Company Name',
        date: '2022 - Present',
        location: 'City, State',
        description: [
            'Achievement or responsibility 1',
            'Achievement or responsibility 2'
        ],
        tags: ['React', 'TypeScript', 'Node.js']
    }
]
```

### Step 4: Add Projects

Update the `projects` array:

```javascript
projects: [
    {
        title: 'Project Name',
        description: 'Project description...',
        tech: ['React', 'Node.js'],
        links: [
            { label: 'Live Demo', url: 'https://...' },
            { label: 'GitHub', url: 'https://...' }
        ]
    }
]
```

### Step 5: Customize Colors

**Easy Method:** Simply change the primary color in one place! Open `css/styles.css` and find:

```css
--color-primary: #059669;  /* ← Change this one line */
```

See **[COLOR_GUIDE.md](COLOR_GUIDE.md)** for a complete guide with color examples and tips!

**Advanced:** Edit all CSS variables at the top of `css/styles.css`:

```css
:root {
    --color-primary: #2563eb;      /* Main brand color */
    --color-primary-dark: #1e40af;
    --color-accent: #0ea5e9;
    --color-text: #1e293b;
    /* ... more variables */
}
```

### Step 6: Add Your Images

1. **Profile Image** (`profile.png`):
   - Add your profile image to the `assets/` folder
   - Recommended: 150x150px or larger, square aspect ratio
   - The image will be automatically cropped to a circle
   - Or update the path in `CONFIG.profileImage`

2. **Hero Background Image** (`hero.jpg`):
   - Add a hero background image to the `assets/` folder
   - Recommended: 1920x1080px or larger, landscape orientation
   - This creates a stunning full-width background in the hero section
   - Choose images with good contrast for text readability
   - Or update the path in `CONFIG.heroImage`

## 🎨 Design Customization

### Colors

**Quick Color Change:** To change the primary color, simply edit **one line** in `css/styles.css`:

```css
--color-primary: #059669;  /* ← Change this to your color */
```

See **[COLOR_GUIDE.md](COLOR_GUIDE.md)** for detailed instructions and color examples!

All colors are defined as CSS variables in `css/styles.css`. Change them to match your brand:

- `--color-primary`: Main brand color (buttons, links, accents)
- `--color-accent`: Secondary accent color
- `--color-text`: Main text color
- `--color-bg`: Background color

### Spacing

Adjust spacing using the spacing variables:

```css
--spacing-xs: 0.5rem;
--spacing-sm: 1rem;
--spacing-md: 1.5rem;
--spacing-lg: 2rem;
--spacing-xl: 3rem;
--spacing-2xl: 4rem;
```

### Typography

The template uses system fonts for fast loading. To use custom fonts:

1. Add your font files to the `assets/` folder
2. Add `@font-face` declarations in `css/styles.css`
3. Update `--font-family` variable

## 📱 Responsive Breakpoints

- **Desktop**: Default styles (max-width: 1100px)
- **Tablet**: 768px and below
- **Mobile**: 480px and below

The timeline automatically adapts to smaller screens, becoming a single-column layout on mobile.

## 🚀 Deployment

This is a simple HTML/CSS template with no build process required, making deployment extremely easy and free!

**Recommended Free Hosting Options:**

- **[GitHub Pages](https://pages.github.com/)** - Free hosting directly from your GitHub repository
- **[Vercel](https://vercel.com/)** - Free deployment with drag-and-drop or Git integration
- **[Netlify](https://www.netlify.com/)** - Free hosting with continuous deployment

Simply push your code to GitHub and enable GitHub Pages, or drag and drop your folder to Vercel/Netlify. No configuration needed - it's that simple!

## 📂 Project Structure

```
timeline-resume-portfolio/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styles and animations
├── js/
│   └── main.js         # CONFIG object and rendering logic
├── assets/
│   ├── profile.png     # Your profile image (circular, 150x150px+)
│   └── hero.jpg        # Hero background image (1920x1080px recommended)
├── README.md           # This file
├── LICENSE             # MIT License
└── .gitignore          # Git ignore file
```

## 🎯 Key Features Explained

### Timeline Animation

The timeline features a CSS-only animation that:
- Draws the vertical line from top to bottom on page load
- Staggers the appearance of timeline items with fade-in and slide effects
- Respects `prefers-reduced-motion` for accessibility

### Skill Tags

Modern, pill-shaped skill tags with:
- Hover effects
- Category grouping
- Easy to scan and customize

### Navigation

- Sticky navigation bar
- Smooth scrolling to sections
- Active section highlighting using IntersectionObserver
- Mobile-friendly hamburger menu

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Credits

Built with the Timeline Resume Portfolio template. Feel free to use this template for your own portfolio!

## 💡 Tips

- **Keep it updated**: Regularly update your timeline and projects
- **Use real images**: Replace placeholder images with your own (both profile.png and hero.jpg)
- **Test on mobile**: Always preview your site on mobile devices
- **Optimize images**: Compress your profile image for faster loading
- **Add analytics**: Consider adding Google Analytics or similar

## 🐛 Troubleshooting

**Timeline not animating?**
- Check that CSS is loading properly
- Ensure JavaScript is enabled
- Check browser console for errors

**Images not showing?**
- Verify image paths are correct
- Check that images are in the `assets/` folder
- Ensure image filenames match exactly (case-sensitive)

**Styles not applying?**
- Clear browser cache
- Check that `css/styles.css` is linked correctly in `index.html`

## 📞 Support

If you encounter any issues or have questions:
1. Check this README first
2. Review the code comments in `js/main.js`
3. Open an issue on GitHub

---

**Made with ❤️ for developers who want a beautiful portfolio without the complexity.**

