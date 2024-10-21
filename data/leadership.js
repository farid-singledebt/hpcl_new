const leadershipData = [
  {
    name: "Shri pushp kumar joshi",
    img: "https://hpcl.parmarketing.agency/images/hpcl/leadership/CMD.webp",
    title: "Chairman & Managing Director",
    body: "HPCL is not an organisation, HPCL is a family, HPCL is a way of life, HPCL is a spirit.",
    video: "https://hpcl.parmarketing.agency/videos/hpcl/leadership/C&MD.mp4",
  },
  {
    name: "Shri amit garg",
    img: "https://hpcl.parmarketing.agency/images/hpcl/leadership/DM.webp",
    title: "Director Marketing",
    body: "We are primarily a marketing company and as a marketing company customer comes first.",
    video: "https://hpcl.parmarketing.agency/videos/hpcl/leadership/DM.mp4",
  },
  {
    name: "Shri rajneesh narang",
    img: "https://hpcl.parmarketing.agency/images/hpcl/leadership/DF.webp",
    title: "Director Finance",
    body: "We also have to ensure that we achieve our numbers profitably.",
    video: "https://hpcl.parmarketing.agency/videos/hpcl/leadership/DF.mp4",
  },
  {
    name: "Shri s bharathan",
    img: "https://hpcl.parmarketing.agency/images/hpcl/leadership/DR.webp",
    title: "Director Refineries",
    body: "Arise, Awake & stop not, till the goal is reached.",
    video: "https://hpcl.parmarketing.agency/videos/hpcl/leadership/DR.mp4",
  },
  {
    name: "Shri k s shetty",
    img: "https://hpcl.parmarketing.agency/images/hpcl/leadership/HR.webp",
    title: "Director Human Resources",
    body: "Its important we network with our channel partners and build on legacy of relationship.",
    video: "https://hpcl.parmarketing.agency/videos/hpcl/leadership/DHR.mp4",
  },
  {
    name: "Shri A K Tiwari",
    img: "https://hpcl.parmarketing.agency/images/hpcl/leadership/CVO.webp",
    title: "Chief Vigilance Officer",
    body: "Our objective is to eliminate complaints all together.",
    video: "https://hpcl.parmarketing.agency/videos/hpcl/leadership/CVO.mp4",
  },
];

$(document).ready(function () {
  let leadershipSection = document.getElementById("leadership-section");
  leadershipSection.innerHTML = "";

  leadershipData.forEach((item, index) => {
    let box = document.createElement("div");
    box.classList.add("leadership-flex");
    box.classList.add("mb-5");
    box.innerHTML = `
          <div class="leader-image">
            <img src="${item.img}" alt="" />
          </div>
          <div class="leader-details">
          <h2 class="fw-bold fst-italic">
            "${item.body}"
            </h2>
            <p class="fw-bold text-capitalize">${item.name}</p>
            <p class="fw-bold text-capitalize">${item.title}</p>
            
            
            <button class="button leadership-video-modal-button mt-2" data-index="${index}" data-bs-toggle="modal" data-bs-target="#leadershipVideoModal">Click here</button>
          </div>
    `;
    leadershipSection.appendChild(box);
  });

  //
  const leadershipVideoModalButton = document.querySelectorAll(
    ".leadership-video-modal-button"
  );
  leadershipVideoModalButton.forEach((item) => {
    item.addEventListener("click", function () {
      const index = this.getAttribute("data-index");
      let modalVideo = document.getElementById("leadership-modal-video");
      modalVideo.querySelector("source").src = leadershipData[index].video;
      modalVideo.load();
      modalVideo.play();
      //
      document.getElementById("leadership-video-title").innerHTML =
        leadershipData[index].title;
    });
  });

  //
  document
    .getElementById("leadership-video-modal-close")
    .addEventListener("click", () => {
      let modalVideo = document.getElementById("leadership-modal-video");
      modalVideo.pause();
    });
});
