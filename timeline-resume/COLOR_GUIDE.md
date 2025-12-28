# 🎨 Color Customization Guide

## Quick Start: Change Primary Color

To change the primary color of your portfolio, simply edit **one line** in `css/styles.css`:

### Step 1: Open `css/styles.css`

### Step 2: Find this section (near the top):

```css
/* ========================================
   🎨 PRIMARY COLOR - CHANGE THIS ONE!
   ======================================== */
--color-primary: #059669;  /* ← Change this hex color */
```

### Step 3: Replace `#059669` with your desired color

**Popular Color Options:**
- **Emerald Green**: `#059669` (current)
- **Deep Blue**: `#2563eb`
- **Indigo**: `#6366f1`
- **Teal**: `#0d9488`
- **Purple**: `#7c3aed`
- **Burgundy**: `#991b1b`
- **Orange**: `#ea580c`
- **Pink**: `#db2777`

### Step 4: (Optional) Update Shadow Colors

If you want shadows to match your new primary color, update these two lines:

```css
--color-shadow: rgba(5, 150, 105, 0.1);
--color-shadow-hover: rgba(5, 150, 105, 0.2);
```

**To get RGB values from your hex color:**
1. Use an online tool like [hex-to-rgb.com](https://www.hex-to-rgb.com)
2. Or use this format: `rgba(R, G, B, opacity)`
   - Example: `#059669` = `rgba(5, 150, 105, 0.1)`

### Step 5: (Optional) Adjust Color Variations

You can also fine-tune these related colors:

```css
--color-primary-dark: #047857;  /* Darker version for hover states */
--color-accent: #10b981;         /* Lighter/accent version */
```

**Tips:**
- `--color-primary-dark` should be darker than your primary color
- `--color-accent` should be lighter or a complementary color
- You can use a color picker tool to find variations

## What Gets Updated Automatically?

When you change `--color-primary`, these elements will update:
- ✅ Buttons (primary and secondary)
- ✅ Links and navigation
- ✅ Timeline elements
- ✅ Skill tags
- ✅ Section title underlines
- ✅ Profile image border
- ✅ All accent colors

## Need Help?

- Use a color picker: [Coolors.co](https://coolors.co)
- Convert hex to RGB: [Hex to RGB Converter](https://www.hex-to-rgb.com)
- Find complementary colors: [Adobe Color Wheel](https://color.adobe.com)

