// Scientific Calculator Logic + Theme Toggle + Responsiveness

const display = document.getElementById('display');
const themeToggleBtn = document.getElementById('themeToggleBtn');
const themeIcon = document.getElementById('themeIcon');

// --- Calculator Logic ---
function insert(val) {
  if (display.innerText === '0' || display.innerText === 'Error') {
    display.innerText = '';
  }
  display.innerText += val;
}

function clearDisplay() {
  display.innerText = '0';
}

function deleteLast() {
  if (display.innerText.length > 1 && display.innerText !== 'Error') {
    display.innerText = display.innerText.slice(0, -1);
  } else {
    display.innerText = '0';
  }
}

function calculate() {
  let expr = display.innerText
    .replace(/÷/g, '/')
    .replace(/×/g, '*')
    .replace(/π|pi/g, 'Math.PI')
    .replace(/√/g, 'Math.sqrt')
    .replace(/(\d+)\s*([a-zA-Z])/g, '$1*$2');

  expr = expr
    .replace(/sin\(/g, 'Math.sin(')
    .replace(/cos\(/g, 'Math.cos(')
    .replace(/tan\(/g, 'Math.tan(')
    .replace(/log\(/g, 'Math.log10(')
    .replace(/ln\(/g, 'Math.log(')
    .replace(/sqrt\(/g, 'Math.sqrt(')
    .replace(/(\d+)\^(\d+)/g, 'Math.pow($1,$2)');

  expr = expr.replace(/([0-9.]+)\^([0-9.]+)/g, 'Math.pow($1,$2)');

  try {
    // eslint-disable-next-line no-eval
    let result = eval(expr);
    if (typeof result === "number" && isFinite(result)) {
      display.innerText = (+result.toFixed(10)).toString();
    } else {
      display.innerText = 'Error';
    }
  } catch (e) {
    display.innerText = 'Error';
  }
}

// --- Theme Toggle Logic ---
function setTheme(dark) {
  if (dark) {
    document.body.classList.add('dark-mode');
    themeIcon.textContent = '☀️';
    localStorage.setItem('calc-theme', 'dark');
  } else {
    document.body.classList.remove('dark-mode');
    themeIcon.textContent = '🌙';
    localStorage.setItem('calc-theme', 'light');
  }
}

function toggleTheme() {
  setTheme(!document.body.classList.contains('dark-mode'));
}

// Load theme from localStorage or system preference
(function initTheme() {
  const userPref = localStorage.getItem('calc-theme');
  if (userPref) {
    setTheme(userPref === 'dark');
  } else {
    // Use system preference as default
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark);
  }
})();

themeToggleBtn.addEventListener('click', toggleTheme);
themeToggleBtn.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    toggleTheme();
    e.preventDefault();
  }
});

// --- Dynamic/Futuristic Touches ---
// Keyboard support for calculator (dynamic experience)
window.addEventListener('keydown', (e) => {
  if (document.activeElement === themeToggleBtn) return; // don't interfere with toggle button

  // Map keyboard keys to calculator buttons
  const map = {
    '0': '0', '1': '1', '2': '2', '3': '3', '4': '4',
    '5': '5', '6': '6', '7': '7', '8': '8', '9': '9',
    '.': '.', '+': '+', '-': '-', '*': '*', '/': '/',
    '(': '(', ')': ')', '^': '^',
    'Enter': '=', '=': '=', 'Backspace': '⌫', 'Delete': 'C'
  };
  if (e.key in map) {
    e.preventDefault();
    if (map[e.key] === '=') calculate();
    else if (map[e.key] === 'C') clearDisplay();
    else if (map[e.key] === '⌫') deleteLast();
    else insert(map[e.key]);
  } else if (e.key === 's') insert('sin(');
  else if (e.key === 'c') insert('cos(');
  else if (e.key === 't') insert('tan(');
  else if (e.key === 'l') insert('log(');
  else if (e.key === 'n') insert('ln(');
  else if (e.key === 'r') insert('sqrt(');
  else if (e.key === 'p') insert('pi');
});