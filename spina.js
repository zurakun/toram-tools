const body = document.getElementById("main-body");
  const toggleBtn = document.getElementById("modeToggle");

  const savedMode = localStorage.getItem("mode") || "dark";
  if (savedMode === "light") {
    body.classList.add("light-mode");
    toggleBtn.textContent = "Dark Mode";
  }

  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("light-mode");
    const isLight = body.classList.contains("light-mode");
    toggleBtn.textContent = isLight ? "Dark Mode" : "Light Mode";
    localStorage.setItem("mode", isLight ? "light" : "dark");
  });