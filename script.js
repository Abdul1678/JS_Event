// DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
    const onLoadEl = document.getElementById("onload");
    onLoadEl.innerHTML = "<h1>I loaded cause the DOM was fully loaded</h1>";
  });
  
  // KeyDown
  const directionEl = document.getElementById("direction");
  document.addEventListener("keydown", function (e) {
    directionEl.innerText = `The Key you pressed is ${e.code}`;
  });
  
  // Click event
  const clickMeBtn = document.getElementById("clickMe");
  clickMeBtn.addEventListener("click", function () {
    clickMeBtn.innerText = "You clicked me!";
  });
  
  // Random background color
  const randomColorBtn = document.getElementById("randomColorBtn");
  randomColorBtn.addEventListener("click", function () {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, 
     ${Math.floor(Math.random() * 256)}, 
     ${Math.floor(Math.random() * 256)})`;
    document.body.style.backgroundColor = randomColor;
  });
  
  // Toggle classList glow
  function changeBtnStyle() {
    const btn = document.querySelector(".cool-btn");
    btn.classList.toggle("glow");
  }
  
  // Dark mode toggle
  const darkModeToggle = document.getElementById("darkModeToggle");
  darkModeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    darkModeToggle.innerText =
     document.body.classList.contains("dark-mode") ? "Light Mode" : "Dark Mode";
  });
  