const specialData = [
  {
    img: "https://hpcl.parmarketing.agency/images/hpcl/leadership/1.webp",
    title: "Nayi Soch, Naya Josh",
    body: "“Nayi Soch Naya Josh”, is the vibrant heartbeat of HPCL's flagship annual conference, Clairvoyance. In sync with management's call of Nayaa HPCL, this song reflects HPCL's commitment to creating new ideas, embracing fresh perspectives, and fostering a culture of positivity and growth. The visuals in the song feature HPCL's workforce, facilities, and everyday operations, aligning them with the themes of progress and technology. The lyrics resonate with the core message of “new thinking” and “new energy,” emphasizing HPCL's commitment to embracing change and driving success with passion. As you listen to this song, it conveys a sense of excitement and motivation, encouraging every employee to take ownership of their role in shaping the company's future with passion and energy. The song reinforces the idea of teamwork and collaboration, where all employees' contributions lead to collective success of the organization - in true spirit of HP FIRST.",
    video:
      "https://hpcl.parmarketing.agency/videos/hpcl/event_special/nsnj.mp4",
  },
  {
    img: "https://hpcl.parmarketing.agency/images/hpcl/leadership/3.webp",
    title: "Mission 60",
    body: "The Mission 60 AV represents HPCL's ambitious initiative aimed at achieving excellence and growth through strategic interventions and innovations. This AV outlines the company's roadmap towards reaching significant milestones across various business verticals, so as to collectively exceed volume of 60MMT by FY 26' completion.",
    video:
      "https://hpcl.parmarketing.agency/videos/hpcl/event_special/mission60.mp4",
  },
  {
    img: "https://hpcl.parmarketing.agency/images/hpcl/leadership/3.webp",
    title: "'Hero's of Marketing'",
    body: "Heroes are not just in stories — they exist right here in our workplace! The 'Heroes of Marketing' proudly showcase the extraordinary achievements of our remarkable Marketing Team during the fiscal year 2023-24. This year stands as a testament to our collective effort, filled with record-breaking milestones and numerous “Highest Evers” by each Marketing SBU that have set new benchmarks for success. This victory belongs to every team member who demonstrated unwavering dedication, creativity, hard work, and commitment to our shared vision. Every individual played a pivotal role in transforming ambitious goals into tangible achievements. Behind every milestone is a hero — someone who goes above and beyond to turn HPCL's vision into reality. Let this celebration serve as a powerful reminder of what we can accomplish when we unite with a common purpose. As we reflect on these accomplishments, may we find inspiration to push boundaries, break barriers, and continue delivering excellence in every aspect of our work, all while upholding the spirit of HP FIRST!",
    video:
      "https://hpcl.parmarketing.agency/videos/hpcl/event_special/heroes_of_hpcl.mp4",
  },
  {
    img: "https://hpcl.parmarketing.agency/images/hpcl/leadership/3.webp",
    title: "Sand art performance",
    body: "Heroes are not just in stories — they exist right here in our workplace! The 'Heroes of Marketing' proudly showcase the extraordinary achievements of our remarkable Marketing Team during the fiscal year 2023-24. This year stands as a testament to our collective effort, filled with record-breaking milestones and numerous “Highest Evers” by each Marketing SBU that have set new benchmarks for success. This victory belongs to every team member who demonstrated unwavering dedication, creativity, hard work, and commitment to our shared vision. Every individual played a pivotal role in transforming ambitious goals into tangible achievements. Behind every milestone is a hero — someone who goes above and beyond to turn HPCL's vision into reality. Let this celebration serve as a powerful reminder of what we can accomplish when we unite with a common purpose. As we reflect on these accomplishments, may we find inspiration to push boundaries, break barriers, and continue delivering excellence in every aspect of our work, all while upholding the spirit of HP FIRST!",
    video:
      "https://hpcl.parmarketing.agency/videos/hpcl/event_special/sandart.mp4",
  },
  {
    img: "https://hpcl.parmarketing.agency/images/hpcl/leadership/3.webp",
    title: "panchtattav",
    body: "HPCL's Panchtattva initiative is a sustainability and environmental stewardship program aimed at promoting ecological balance and energy conservation. The name 'Panchtattva' comes from the Sanskrit term referring to the five elements of nature—Earth, Water, Fire, Air, and Space— which are seen as fundamental components of life. HPCL’s initiative emphasizes the interconnectedness of these elements and highlights the importance of preserving them",
    video:
      "https://hpcl.parmarketing.agency/videos/hpcl/event_special/panchtatva.mp4",
  },
];

$(document).ready(function () {
  const specialDiv = document.getElementById("special-div");
  let specialResult = "";
  specialData
    .map((item, index) => {
      specialResult += `
        <div class="special-flex mb-4">
            <div class="special-left">
              <img
                src="${item.img}"
                alt=""
              />
              <div class="special-overlay">
          <button class="button video-modal-button" data-index="${index}" data-bs-toggle="modal" data-bs-target="#videoModal">
            <i class="fa-solid fa-play text-white"></i>
          </button>
        </div>
            </div>
            <div class="special-right">
              <h2 class="text-capitalize">${item.title}</h2>
              <p>
                ${item.body}
              </p>
            </div>
          </div>
    `;
    })
    .join("");
  specialDiv.innerHTML = specialResult;

  //
  const videoModalButton = document.querySelectorAll(".video-modal-button");
  videoModalButton.forEach((item) => {
    item.addEventListener("click", function () {
      const index = this.getAttribute("data-index");
      let modalVideo = document.getElementById("modal-video");
      modalVideo.querySelector("source").src = specialData[index].video;
      modalVideo.load();
      modalVideo.play();
      //
      document.getElementById("video-title").innerHTML =
        specialData[index].title;
    });
  });

  //
  document.getElementById("video-modal-close").addEventListener("click", () => {
    let modalVideo = document.getElementById("modal-video");
    modalVideo.pause();
  });
});
