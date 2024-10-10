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

  for (let i = 1; i <= 76; i++) {
    const sequentialClass = randomBorders[(i - 1) % randomBorders.length];
    mediaGalleryDay2Data.push({
      img: `https://hpcl.parmarketing.agency/images/hpcl/media_gallery/day2/${i}.webp`,
      className: sequentialClass,
    });
  }

  for (let i = 1; i <= 32; i++) {
    const sequentialClass = randomBorders[(i - 1) % randomBorders.length];
    mediaGalleryDay3Data.push({
      img: `https://hpcl.parmarketing.agency/images/hpcl/media_gallery/day3/${i}.webp`,
      className: sequentialClass,
    });
  }

  const mediaGalleryDay1 = document.getElementById("media-gallery-day1");
  const media1LoadMore = document.getElementById("media1-load-more");
  let currentIndex1 = 0;
  //
  const mediaGalleryDay2 = document.getElementById("media-gallery-day2");
  const media2LoadMore = document.getElementById("media2-load-more");
  let currentIndex2 = 0;
  //
  const mediaGalleryDay3 = document.getElementById("media-gallery-day3");
  const media3LoadMore = document.getElementById("media3-load-more");
  let currentIndex3 = 0;

  function loadImages1(limit) {
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
  loadImages1(10);

  function loadImages2(limit) {
    mediaGalleryDay2.innerHTML = "";

    for (let i = 0; i < limit && i < mediaGalleryDay2Data.length; i++) {
      const imgData = mediaGalleryDay2Data[i];

      const imgDiv = document.createElement("div");
      imgDiv.classList.add("masonry-item", imgData.className);

      const imgElement = document.createElement("img");
      imgElement.src = imgData.img;
      imgElement.alt = `Gallery Image ${i + 1}`;

      imgDiv.appendChild(imgElement);

      mediaGalleryDay2.appendChild(imgDiv);
    }
  }
  loadImages2(10);

  function loadImage3(limit) {
    mediaGalleryDay3.innerHTML = "";

    for (let i = 0; i < limit && i < mediaGalleryDay3Data.length; i++) {
      const imgData = mediaGalleryDay3Data[i];

      const imgDiv = document.createElement("div");
      imgDiv.classList.add("masonry-item", imgData.className);

      const imgElement = document.createElement("img");
      imgElement.src = imgData.img;
      imgElement.alt = `Gallery Image ${i + 1}`;

      imgDiv.appendChild(imgElement);

      mediaGalleryDay3.appendChild(imgDiv);
    }
  }
  loadImage3(10);

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
