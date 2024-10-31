var icon = document.getElementById("icon");
icon.onclick = function() {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "3_Project/sun.png";
  } else {
    icon.src = "3_Project/moon.png";
  }
}