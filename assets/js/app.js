cl = console.log;

const toggleSidebar = [...document.querySelectorAll(".togglesidebar")];

const backdrop = document.getElementById("backdrop");

const sideBar = document.getElementById("sidebar");

const onNavToggle = () => {
  sideBar.classList.toggle("active");
  backdrop.classList.toggle("active");
};

toggleSidebar.forEach((ele) => {
  ele.addEventListener("click", onNavToggle);
});

backdrop.addEventListener("click", onNavToggle);
