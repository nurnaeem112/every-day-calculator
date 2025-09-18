document.addEventListener('DOMContentLoaded', () => {
  /* ---------------------------
     Sidebar + overlay + years
     --------------------------- */
  document.querySelectorAll('.sidebar a').forEach(a => {
    try { if (a.href === location.href) a.classList.add('active'); } catch(e) {}
  });

  document.querySelectorAll('#year,#year2,#year3,#year4').forEach(e => {
    if (e) e.textContent = new Date().getFullYear();
  });

  const menuBtn = document.querySelector('.menu-btn');
  const sidebar = document.querySelector('.sidebar');

  // ensure overlay exists
  let overlay = document.querySelector('.sidebar-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'sidebar-overlay';
    document.body.appendChild(overlay);
  }

  // Toggle menu function
  window.toggleMenu = function () {
    if (!sidebar) return;
    sidebar.classList.toggle('open');
    overlay.classList.toggle('show');
  };

  // Close sidebar when clicking overlay
  overlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('show');
  });

  // Close sidebar when clicking a link
  document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', () => {
      sidebar.classList.remove('open');
      overlay.classList.remove('show');
    });
  });

  /* ---------------------------
     Calculator Functions
     --------------------------- */
  let currentInput = '0';
  let memory = 0;
  const display = document.getElementById('display');

  function updateDisplay() {
    if (display) display.textContent = currentInput;
  }

  window.insert = function(num) {
    if (currentInput === '0' && num !== '.') {
      currentInput = num;
    } else {
      currentInput += num;
    }
    updateDisplay();
  };

  window.clearAll = function() {
    currentInput = '0';
    updateDisplay();
  };

  window.clearEntry = function() {
    currentInput = currentInput.slice(0, -1) || '0';
    updateDisplay();
  };

  window.backspace = function() {
    currentInput = currentInput.slice(0, -1) || '0';
    updateDisplay();
  };

  window.calculate = function() {
    try {
      currentInput = eval(currentInput).toString();
    } catch {
      currentInput = 'Error';
    }
    updateDisplay();
  };

  window.percent = function() {
    currentInput = (parseFloat(currentInput) / 100).toString();
    updateDisplay();
  };

  window.squareRoot = function() {
    currentInput = Math.sqrt(parseFloat(currentInput)).toString();
    updateDisplay();
  };

  window.square = function() {
    currentInput = Math.pow(parseFloat(currentInput), 2).toString();
    updateDisplay();
  };

  window.reciprocal = function() {
    currentInput = (1 / parseFloat(currentInput)).toString();
    updateDisplay();
  };

  // Memory Functions
  window.memoryClear = function() { memory = 0; };
  window.memoryPlus = function() { memory += parseFloat(currentInput) || 0; };
  window.memoryMinus = function() { memory -= parseFloat(currentInput) || 0; };
  window.memoryRecall = function() { currentInput = memory.toString(); updateDisplay(); };

  // Initialize display
  updateDisplay();
});
