console.log("JS loaded");
let password = document.getElementById('Pass');
password.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
  e.preventDefault();
  console.log("Text input submitted:", password.value);
  if (password.value === "pass123") {
    window.location.href = "../index.html";
  }
  }
});
