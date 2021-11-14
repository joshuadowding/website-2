$(() => {
  let nav = document.querySelector("div[class='nav-content']");
  if (nav) {
    let path = window.location.pathname;
    if (path.includes("rabbitsandravens")) {
      let nav_i = nav.querySelector("div[id='nav-i-r']");
      if (nav_i) {
        nav_i.classList.add("selected");
      }
    } else if (path.includes("blog")) {
      let nav_i = nav.querySelector("div[id='nav-i-b']");
      if (nav_i) {
        nav_i.classList.add("selected");
      }
    } else if (path.includes("portfolio")) {
      let nav_i = nav.querySelector("div[id='nav-i-p']");
      if (nav_i) {
        nav_i.classList.add("selected");
      }
    }
  }
});
