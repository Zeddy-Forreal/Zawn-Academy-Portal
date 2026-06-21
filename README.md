<div align="center">

<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />

# 🎓 Zawn Academy — Student Portal

A cinematic, academia-themed login page built with pure HTML, CSS, and JavaScript. A split crest-and-form layout with a hand-built animated wax seal, floating-label inputs, and an orchestrated load sequence — designed for a university digital campus portal.

[Features](#-features) · [Getting Started](#-getting-started) · [File Structure](#-file-structure) · [Customization](#-customization)

</div>

---

## ✨ Features

* 🛡️ **Animated Wax Seal** — A custom SVG crest (shield, open book, circling motto) stamps itself into place on load with a spring bounce
* 🏛️ **Split Crest & Form Layout** — A navy crest panel paired with a parchment-toned sign-in panel for an institutional, prestigious feel
* 🏷️ **Floating Label Inputs** — Labels animate from placeholder to a small-caps brass label on focus or fill
* 🎓 **Student / Faculty Toggle** — Switch sign-in roles with a smooth pill-style selector
* 🎬 **Orchestrated Entrance Sequence** — Backdrop brightens, panel rises, seal stamps, then fields cascade in — one choreographed beat instead of scattered effects
* ⏳ **Working Loading & Validation States** — Submit button shows a real spinner on click, and shakes empty fields red if left blank
* ♿ **Reduced-Motion Support** — All animations are disabled for users with `prefers-reduced-motion` set
* 📱 **Fully Responsive** — Crest panel gracefully hides on narrow viewports, scaling down to small mobile screens

---

## 🚀 Getting Started

**1. Clone the repository**

```bash
git clone https://github.com/Zeddy-Forreal/Zawn-Academy-Portal.git
cd Zawn-Academy-Portal
```

**2. Open in browser**

No build step, no installs. Just open `index.html` directly:

```bash
# macOS
open index.html

# Windows
start index.html

# Linux
xdg-open index.html
```

**3. Add your wallpaper**

Drop a campus, library, or hall photo into a `media/` folder next to `index.html` as `wallpaper.jpg`. The page falls back to a CSS-only navy gradient backdrop if no image is supplied.

```
media/
└── wallpaper.jpg
```

---

## 📁 File Structure

```
Zawn-Academy-Portal/
├── index.html            Markup and structure
├── style/
│   └── main.css            All styling, theming, and entrance animations
└── javascript/
    └── main.js              Role toggle, validation, and loading-state logic
```

---

## ⚙️ How It Works

The entrance sequence is staged purely with CSS animation delays — each element animates in on its own beat instead of all at once:

```css
.form header   { animation-delay: 1.0s; }
.role-select   { animation-delay: 1.1s; }
.fields        { animation-delay: 1.2s; }
.det           { animation-delay: 1.3s; }
.login         { animation-delay: 1.4s; }
.help          { animation-delay: 1.5s; }
```

The login button validates both fields before submitting — empty fields get a red border and a shake animation, otherwise the button shows a real loading spinner:

```javascript
loginBtn.onclick = () => {
    if (!usernameInput.value || !passwordInput.value) {
        // shake + highlight whichever field is empty
        return;
    }
    loginBtn.classList.add("loading");
    // Demo only — replace with real auth call
};
```

---

## 🎨 Customization

All colors are CSS custom properties at the top of `main.css`. Edit these to retheme the whole portal:

```css
:root {
  --ink:        #0f1a2e;   /* Crest panel background       */
  --ink-2:      #16243d;   /* Crest panel gradient depth    */
  --parchment:  #f8f4ea;   /* Form panel background         */
  --parchment-2:#efe9da;   /* Role toggle background        */
  --brass:      #b8862e;   /* Primary accent color          */
  --brass-lt:   #d4a849;   /* Accent highlight / seal text  */
  --ivy:        #2c4a3a;   /* Secondary accent (links)       */
  --text-dark:  #2a2620;   /* Primary text                  */
  --text-muted: #79705f;   /* Secondary / muted text        */
}
```

The seal's motto text and emblem can be edited directly in the SVG inside `index.html`:

```html
<textPath href="#seal-text-path" startOffset="0%">
    EST. 1891 • Zawn ACADEMY • L PILTOVER •
</textPath>
```

---

<div align="center">

Made with 🖤 by [Zeddy-Forreal](https://github.com/Zeddy-Forreal)

</div>
