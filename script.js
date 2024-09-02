body = document.querySelector("body");
colors = document.querySelectorAll("li");

colors.forEach((el) => {
  el.onclick = (e) => (body.style.backgroundColor = e.target.id);
});
