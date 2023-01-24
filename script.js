const toggle = document.querySelector(".toggle-button");
const links = document.querySelector(".links");

toggle.addEventListener("click", () => {
  links.classList.toggle("active");
});
const toparrow = document.querySelector(".top");
toparrow.addEventListener("click", (e) => {
  document.documentElement.scrollTop = 0;
});

const refresh = () => {
  if (document.documentElement.scrollTop < 150) {
    toparrow.style.display = "none";
  } else {
    toparrow.style.display = "block";
  }
};
refresh();
document.addEventListener("scroll", (e) => {
  refresh();
});
