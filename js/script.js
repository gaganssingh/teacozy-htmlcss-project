// DOM SELECTORS
const currentYearEl = document.getElementById("currentYear");

// FUNCTIONS
const displayCurrentYear = () => {
  const getCurrentYear = new Date().getFullYear();
  currentYearEl.textContent = getCurrentYear;
};

// FUNCTIONS THAT RUN ON APP LOAD
displayCurrentYear();
