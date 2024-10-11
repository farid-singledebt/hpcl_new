const launch1Data = [];
for (let i = 1; i <= 5; i++) {
  launch1Data.push({
    img: `https://hpcl.parmarketing.agency/images/hpcl/launches/launch1/${i}.webp`,
  });
}
//
const launch2Data = [];
for (let i = 1; i <= 9; i++) {
  launch2Data.push({
    img: `https://hpcl.parmarketing.agency/images/hpcl/launches/launch2/${i}.webp`,
  });
}
//
const launch3Data = [];
for (let i = 1; i <= 13; i++) {
  launch3Data.push({
    img: `https://hpcl.parmarketing.agency/images/hpcl/launches/launch3/${i}.webp`,
  });
}
//
const launch4Data = [];
for (let i = 1; i <= 8; i++) {
  launch4Data.push({
    img: `https://hpcl.parmarketing.agency/images/hpcl/launches/launch4/${i}.webp`,
  });
}
//
const launch5Data = [];
for (let i = 1; i <= 7; i++) {
  launch5Data.push({
    img: `https://hpcl.parmarketing.agency/images/hpcl/launches/launch5/${i}.webp`,
  });
}
//
const launchTitles = [
  {
    title: "LPG",
    body: "Click below button to view images of launches",
  },
  {
    title: "Lubes",
    body: "Click below button to view images of launches",
  },
  {
    title: "R&D",
    body: "Click below button to view images of launches",
  },
  {
    title: "Mission 60",
    body: "Click below button to view images of launches",
  },
  {
    title: "Digital initiatives",
    body: "Click below button to view images of launches",
  },
];

$(document).ready(function () {
  const mainLaunchData = [];
  function addFirstItems(mainArray, ...arrays) {
    arrays.forEach((array) => {
      if (array.length > 0) {
        mainArray.push(array[0]); // Push the first item if the array is not empty
      }
    });
  }

  // Call the function with the arrays you want to add
  addFirstItems(
    mainLaunchData,
    launch1Data,
    launch2Data,
    launch3Data,
    launch4Data,
    launch5Data
  );

  mainLaunchData.forEach((item, index) => {
    item.title = launchTitles[index].title;
    item.body = launchTitles[index].body;
  });

  const allData = {
    1: launch1Data,
    2: launch2Data,
    3: launch3Data,
    4: launch4Data,
    5: launch5Data,
  };

  const launchesContainer = document.getElementById("launches-container");
  let mainLaunchResult = "";
  mainLaunchData.map((item, index) => {
    mainLaunchResult += `
    <div class="launches-flex-box">
            <div class="launches-overlay2">
              <h2 class="text-capitalize">${item.title}</h2>
              <button class="button button-flex view-launches-image" data-index="${index}" data-array="${
      index + 1
    }" data-bs-toggle="modal" data-bs-target="#carouselModal">
                View <i class="fa fa-eye"></i>
              </button>
              <button class="button button-flex readmore-launches" data-index="${index}" data-array="${
      index + 1
    }" data-bs-toggle="modal" data-bs-target="#readMore">
                Read <i class="fa fa-book"></i>
              </button>
            </div>
            <img src="${item.img}" alt="Image 1" />
          </div>
    `;
  }).join;
  launchesContainer.innerHTML = mainLaunchResult;

  document.querySelectorAll(".view-launches-image").forEach((item) => {
    item.addEventListener("click", function () {
      const index = this.getAttribute("data-index");
      const arrayNumber = this.getAttribute("data-array");
      const selectedArray = allData[arrayNumber];

      const $owl = $("#modal-carousel");
      if ($owl.hasClass("owl-loaded")) {
        $owl.trigger("destroy.owl.carousel");
        $owl.removeClass("owl-loaded");
        $owl.find(".owl-stage-outer").children().unwrap();
      }

      let carouselItems = selectedArray
        .map(
          (launchItem, i) => `
      <div class="item">
        <img src="${launchItem.img}" alt="Image ${i + 1}" />
      </div>
    `
        )
        .join("");

      document.getElementById("modal-carousel").innerHTML = carouselItems;
      document.getElementById("carousel-image-title").innerHTML =
        launchTitles[index].title;

      $("#modal-carousel").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: false,
        startPosition: index,
      });
    });
  });

  //
  document.querySelectorAll(".readmore-launches").forEach((item) => {
    item.addEventListener("click", function () {});
  });
});
