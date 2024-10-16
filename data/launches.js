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
for (let i = 1; i <= 8; i++) {
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
    content:
      "A service for Domestic HP Gas customers. HP Gas Suvidha Club service shall offer  various benefits, exclusive services, and added conveniences to LPG consumers thereby improving their overall experience with HP Gas services. Membership usually involves a nominal fee of Rs. 354/- per year for one HP Gas customer.  The benefits offered outweigh the cost, making it a valuable addition for regular LPG users. This is first such service of  its kind offered by any OMC so far",
  },
  {
    title: "Lubes",
    body: "Click below button to view images of launches",
    content:
      "The Lubes SBU successfully launched Futur-X, its premium range of lubricants, as part of its ongoing business transformation. Recognized as one of India's largest lubricant players, we have traditionally been known for offering value-for-money products. However, with the launch of Futur-X, the aim was to elevate our brand through premiumization",
  },
  {
    title: "R&D & CS&P",
    body: "Click below button to view images of launches",
    content:
      "Handing over of Products by HPGRDC to Marketing was done during Marketing Conclave , for Petrochemical SBU HP-3DPP & HP- NanoKool , 3D printable polypropylene was developed for Fused Deposition Modeling (FDM) ,Solar reflectance coatings called HP NanOkool are designed to enhance the reflectivity of surfaces. For Lubes SBU HP-PCR HDPE & HP-MWF to improve the mechanical properties at par with virgin HDPE lube bottle. HP MWF significantly prolongs the lifespan of the metalworking fluid. CS & P did the Inauguration of Automated Processes through Robotic Process Automation, Safety-GPT and HSE Dashboards on HSE portal & Metaverse for LPG Bottling Plant.",
  },
  {
    title: "Mission 60",
    body: "Click below button to view images of launches",
    content:
      "There is a famous Quote “The future belongs to those who believe in the beauty of their dreams” Dreams are achieved with goals, as they provide the roadmap to turn aspirations into reality.With the Vision and Hope for HPCL beating the competitors by miles. The Mission 60 AV represents HPCL's ambitious initiative aimed at achieving excellence and growth through strategic interventions and innovations",
  },
  {
    title: "Digital initiatives",
    body: "Click below button to view images of launches",
    content:
      "TT Sentry integrates advanced Vehicle Tracking System technology to monitor tank trucks' Position, Velocity, and Time in real time. This automated system enforces discipline through system generated alerts and compares data with the Transport Discipline Guidelines to detect and take actions on deviations. CRIS empowers our team with advanced analytics, intelligent dashboards, and real-time alerts, ensuring optimal operations and proactive decision-making. This ground-breaking system supports all stakeholders, from dealers and engineering officers to regional managers and HQ officers, enhancing efficiency and operational transparency",
  },
];

const launchVideos = [
  {
    video: "https://hpcl.parmarketing.agency/videos/hpcl/launches/lpg.mp4",
  },
  {
    video: "https://hpcl.parmarketing.agency/videos/hpcl/launches/lubes.mp4",
  },
  {
    video: "https://hpcl.parmarketing.agency/videos/hpcl/launches/lubes.mp4",
  },
  {
    video:
      "https://hpcl.parmarketing.agency/videos/hpcl/launches/mission60.mp4",
  },
  {
    video:
      "https://hpcl.parmarketing.agency/videos/hpcl/launches/digital_initiatives.mp4",
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
              <div class="d-flex align-items-center justify-content-center gap-2">
                 <button class="button button-flex view-launches-image" data-index="${index}" data-array="${
      index + 1
    }" data-bs-toggle="modal" data-bs-target="#carouselModal">
                 <i class="fa fa-eye"></i>
              </button>
              <button class="button button-flex readmore-launches" data-index="${index}" data-array="${
      index + 1
    }" data-bs-toggle="modal" data-bs-target="#readMore">
                <i class="fa fa-book"></i>
              </button>
              ${
                item.title !== "R&D & CS&P"
                  ? `<button
                      class="button button-flex launch-video-button"
                      data-index="${index}"
                      data-array="${index + 1}"
                      data-bs-toggle="modal"
                      data-bs-target="#launchesVideoModal"
                    >
                      <i class="fa fa-play"></i>
                    </button>`
                  : ""
              }
              </div>
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
        startPosition: 0,
      });
    });
  });

  //
  document.querySelectorAll(".readmore-launches").forEach((item) => {
    item.addEventListener("click", function () {
      const index = this.getAttribute("data-index");
      document.getElementById("read-more-title").innerHTML =
        launchTitles[index].title;
      document.getElementById("read-more-div").innerHTML =
        launchTitles[index].content;
    });
  });

  //
  document.querySelectorAll(".launch-video-button").forEach((item) => {
    item.addEventListener("click", function () {
      let index = this.getAttribute("data-index");
      let modalVideo = document.getElementById("launches-modal-video");
      modalVideo.querySelector("source").src = launchVideos[index].video;
      modalVideo.load();
      modalVideo.play();
      //
      document.getElementById("launches-video-title").innerHTML =
        launchTitles[index].title;
    });
  });

  //
  document
    .getElementById("launches-video-modal-close")
    .addEventListener("click", () => {
      let modalVideo = document.getElementById("launches-modal-video");
      modalVideo.pause();
    });
});
