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

  for (let i = 1; i <= 33; i++) {
    const sequentialClass = randomBorders[(i - 1) % randomBorders.length];
    mediaGalleryDay3Data.push({
      img: `https://hpcl.parmarketing.agency/images/hpcl/media_gallery/day3/${i}.webp`,
      className: sequentialClass,
    });
  }

  // media 1 start
  const mediaGalleryDay1 = document.getElementById("media-gallery-day1");
  const loadMoreButton1 = document.getElementById("media1-load-more");
  let displayedImages1 = 10;

  function renderImages1(limit) {
    mediaGalleryDay1.innerHTML = "";

    for (let i = 0; i < limit && i < mediaGalleryDay1Data.length; i++) {
      const item = mediaGalleryDay1Data[i];

      const masonryItem = document.createElement("div");
      masonryItem.classList.add("masonry-item", item.className);

      const imgElement = document.createElement("img");
      imgElement.src = item.img;
      imgElement.alt = `Gallery Image ${i + 1}`;

      masonryItem.appendChild(imgElement);

      mediaGalleryDay1.appendChild(masonryItem);
    }
  }

  renderImages1(displayedImages1);

  loadMoreButton1.addEventListener("click", () => {
    if (displayedImages1 < mediaGalleryDay1Data.length) {
      displayedImages1 += 10;
      renderImages1(displayedImages1);

      if (displayedImages1 >= mediaGalleryDay1Data.length) {
        loadMoreButton1.textContent = "Go back";
      }
    } else {
      displayedImages1 = 10;
      renderImages1(displayedImages1);
      loadMoreButton1.textContent = "Load more";
    }
  });
  // media 1 end

  // media 2 start
  const mediaGalleryDay2 = document.getElementById("media-gallery-day2");
  const loadMoreButton2 = document.getElementById("media2-load-more");
  let displayedImages2 = 10;

  function renderImages2(limit) {
    mediaGalleryDay2.innerHTML = "";

    for (let i = 0; i < limit && i < mediaGalleryDay2Data.length; i++) {
      const item = mediaGalleryDay2Data[i];

      const masonryItem = document.createElement("div");
      masonryItem.classList.add("masonry-item", item.className);

      const imgElement = document.createElement("img");
      imgElement.src = item.img;
      imgElement.alt = `Gallery Image ${i + 1}`;

      masonryItem.appendChild(imgElement);

      mediaGalleryDay2.appendChild(masonryItem);
    }
  }

  renderImages2(displayedImages2);

  loadMoreButton2.addEventListener("click", () => {
    if (displayedImages2 < mediaGalleryDay2Data.length) {
      displayedImages2 += 10;
      renderImages2(displayedImages2);

      if (displayedImages2 >= mediaGalleryDay2Data.length) {
        loadMoreButton2.textContent = "Go back";
      }
    } else {
      displayedImages2 = 10;
      renderImages2(displayedImages2);
      loadMoreButton2.textContent = "Load more";
    }
  });
  // media 2 end

  // media 2 start
  const mediaGalleryDay3 = document.getElementById("media-gallery-day3");
  const loadMoreButton3 = document.getElementById("media3-load-more");
  let displayedImages3 = 10;

  function renderImages3(limit) {
    mediaGalleryDay3.innerHTML = "";

    for (let i = 0; i < limit && i < mediaGalleryDay3Data.length; i++) {
      const item = mediaGalleryDay3Data[i];

      const masonryItem = document.createElement("div");
      masonryItem.classList.add("masonry-item", item.className);

      const imgElement = document.createElement("img");
      imgElement.src = item.img;
      imgElement.alt = `Gallery Image ${i + 1}`;

      masonryItem.appendChild(imgElement);

      mediaGalleryDay3.appendChild(masonryItem);
    }
  }

  renderImages3(displayedImages3);

  loadMoreButton3.addEventListener("click", () => {
    if (displayedImages3 < mediaGalleryDay3Data.length) {
      displayedImages3 += 10;
      renderImages3(displayedImages3);

      if (displayedImages3 >= mediaGalleryDay3Data.length) {
        loadMoreButton3.textContent = "Go back";
      }
    } else {
      displayedImages3 = 10;
      renderImages3(displayedImages3);
      loadMoreButton3.textContent = "Load more";
    }
  });
  // media 2 end
});
