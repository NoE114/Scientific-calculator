
A responsive, futuristic scientific calculator with light/dark mode, implemented in HTML, CSS, and JavaScript.

## Features

- **Onscreen Light/Dark Mode Toggle:** Floating button toggles theme instantly, with smooth transitions and remembers user choice.
- **Responsive Design:** Looks great and works well on all screen sizes, from mobile to desktop.
- **Futuristic & Dynamic UI:**  
  - Glassmorphism, neon accents, animated transitions.
  - Large, touch-friendly buttons.
  - Keyboard support for number pad, operators, and functions.
- **Scientific Functions:** Basic arithmetic, sin, cos, tan, log, ln, √, ^, π, parentheses, clear, and delete.

---

## How Theme Toggle Works

- **Floating Toggle:**  
  A button at the top-right corner with an icon (🌙 for light mode, ☀️ for dark mode).
- **Implementation:**  
  - Clicking or pressing Enter/Space on the button toggles between themes.
  - CSS variables (`:root`) define all colors for both modes.
  - Dark mode uses `.dark-mode` class on `<body>`.
  - User preference is saved in `localStorage` for persistence.
  - If no preference is set, the calculator follows your system's color scheme.
- **Accessibility:**  
  - Button is keyboard accessible (`tabindex="0"`, responds to Enter and Space).

---

## How Responsiveness & Futurism is Achieved

- **Responsive CSS:**  
  - Uses `vw` units, flexible paddings, media queries.
  - Buttons and display scale for mobile screens.
- **Futuristic Look:**  
  - Glassy backgrounds (`backdrop-filter: blur`), soft glows, smooth transitions.
  - Neon accent (`--accent`) and animated button effects.
- **Dynamic Experience:**  
  - Keyboard mapping for quick input.
  - Button and theme transitions for lively interaction.

---

## Usage

1. **Open `index.html`** in your browser.
2. **Use the calculator**: Click/tap buttons or use your keyboard.
3. **Switch theme**: Click/tap the floating moon/sun icon or focus and hit Enter/Space.
4. **Mobile Friendly**: Try it on your phone/tablet!

---

## Code Structure

- **index.html**: Structure of calculator, theme toggle button.
- **style.css**: All styling, theme variables, transitions, responsiveness, and futuristic touches.
- **script.js**: Calculator logic, theme toggle logic, keyboard support.

---

Enjoy your dynamic, modern scientific calculator!
