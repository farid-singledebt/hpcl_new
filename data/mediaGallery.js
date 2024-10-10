$(document).ready(function () {
  let mediaGalleryDay1Data = [];
  let mediaGalleryDay2Data = [];
  let mediaGalleryDay3Data = [];

  const randomBorders = [
    "random-border-1",
    "random-border-2",
    "random-border-3",
  ];

  for (let i = 1; i <= 20; i++) {
    const sequentialClass = randomBorders[(i - 1) % randomBorders.length];

    mediaGalleryDay1Data.push({
      img: `https://hpcl.parmarketing.agency/images/hpcl/media_gallery/day1/${i}.webp`,
      className: sequentialClass,
    });
  }

  const mediaGalleryDay1 = document.getElementById("media-gallery-day1");
  const media1LoadMore = document.getElementById("media1-load-more");
  let currentIndex1 = 0;

  function loadImages(limit) {
    mediaGalleryDay1.innerHTML = "";

    for (let i = 0; i < limit && i < mediaGalleryDay1Data.length; i++) {
      const imgData = mediaGalleryDay1Data[i];

      const imgDiv = document.createElement("div");
      imgDiv.classList.add("masonry-item", imgData.className);

      const imgElement = document.createElement("img");
      imgElement.src = imgData.img;
      imgElement.alt = `Gallery Image ${i + 1}`;

      imgDiv.appendChild(imgElement);

      mediaGalleryDay1.appendChild(imgDiv);
    }
  }
  loadImages(10);

  //
  media1LoadMore.addEventListener("click", function () {
    if (currentIndex1 < mediaGalleryDay1Data.length) {
      loadImages(10);
    }

    if (currentIndex1 >= mediaGalleryDay1Data.length) {
      media1LoadMore.textContent = "Back";
    }

    if (media1LoadMore.textContent === "Back") {
      currentIndex1 = 0;
      mediaGalleryDay1.innerHTML = "";
      loadImages(10);
      media1LoadMore.textContent = "Load More";
    } else {
      media1LoadMore.textContent = "Load More";
    }
  });

  const openImage = () => {
    document.querySelectorAll(".masonry-image").forEach((item) => {
      item.addEventListener("click", function () {
        document
          .getElementById("modal-img-div")
          .setAttribute("src", this.getAttribute("src"));
      });
    });
  };
});
