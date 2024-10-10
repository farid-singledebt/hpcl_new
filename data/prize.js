$(document).ready(function () {
  document.querySelectorAll(".prizes-card").forEach((item) => {
    item.addEventListener("click", function () {
      const imgTag = item.querySelector("img");
      const title = item.querySelector("h2");
      document.getElementById("modal-img-div").setAttribute("src", imgTag.src);
      document.getElementById("image-title").innerHTML = title.innerHTML;
    });
  });
});
