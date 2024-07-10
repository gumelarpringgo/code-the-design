const tonggle = document.getElementById("theme-toggle");
const theme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

var loveIcon = document.getElementById("love-icon");

const themeCheck = () => {
  if (theme === "dark" || (!theme && systemTheme)) {
    document.documentElement.classList.add("dark");
    tonggle.textContent = "light";
    return;
  }
};

const themeSwitch = () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    tonggle.textContent = "dark";
    return;
  }

  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
  tonggle.textContent = "light";
  loveIcon.src = "./images/Vector.png";
};

tonggle.addEventListener("click", () => {
  themeSwitch();
});

themeCheck();
