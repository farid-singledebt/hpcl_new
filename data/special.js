const specialData = [
  {
    img: "https://hpcl.parmarketing.agency/images/hpcl/event_special/thumbnail/nsnj_thumbnail.webp",
    title: "'Nayi Soch, Naya Josh'",
    body: "“Nayi Soch Naya Josh”, is the vibrant heartbeat of HPCL's flagship annual conference, Clairvoyance. In sync with management's call of Nayaa HPCL, this song reflects HPCL's commitment to creating new ideas, embracing fresh perspectives, and fostering a culture of positivity and growth. The visuals in the song feature HPCL's workforce, facilities, and everyday operations, aligning them with the themes of progress and technology. The lyrics resonate with the core message of “new thinking” and “new energy,” emphasizing HPCL's commitment to embracing change and driving success with passion. As you listen to this song, it conveys a sense of excitement and motivation, encouraging every employee to take ownership of their role in shaping the company's future with passion and energy. The song reinforces the idea of teamwork and collaboration, where all employees' contributions lead to collective success of the organization - in true spirit of HP FIRST.",
    video:
      "https://hpcl.parmarketing.agency/videos/hpcl/event_special/nsnj.mp4",
  },
  {
    img: "https://hpcl.parmarketing.agency/images/hpcl/event_special/thumbnail/heroes_thumbnail.webp",
    title: "Heroes of Marketing",
    body: "Heroes are not just in stories — they exist right here in our workplace! The 'Heroes of Marketing' proudly showcase the extraordinary achievements of our remarkable Marketing Team during the fiscal year 2023-24. This year stands as a testament to our collective effort, filled with record-breaking milestones and numerous “Highest Evers” by each Marketing SBU that have set new benchmarks for success. This victory belongs to every team member who demonstrated unwavering dedication, creativity, hard work, and commitment to our shared vision. Every individual played a pivotal role in transforming ambitious goals into tangible achievements. Behind every milestone is a hero — someone who goes above and beyond to turn HPCL's vision into reality. Let this celebration serve as a powerful reminder of what we can accomplish when we unite with a common purpose. As we reflect on these accomplishments, may we find inspiration to push boundaries, break barriers, and continue delivering excellence in every aspect of our work, all while upholding the spirit of HP FIRST!",
    video:
      "https://hpcl.parmarketing.agency/videos/hpcl/event_special/heroes_of_hpcl.mp4",
  },
  {
    img: "https://hpcl.parmarketing.agency/images/hpcl/event_special/thumbnail/success_stories.webp",
    title: "Success Stories",
    body: "In every journey, there are moments that define success, that remind us why we push our limits, and why we continue to innovate. We have achieved excellent performance during the year 2023-24 and such superlative performance is possible only when all the SBUs and every single member of the Teams put their best foot forward and contribute more than their best in unison. It is worth watching glimpses of these great successes. These success stories that exemplify dedication, teamwork, and vision have common thread of resilience, perseverance, determination, innovation and team work. The stories you are about to witness are a shining example of how these values are brought to life. Let us sit back, enjoy and celebrate these successes",
    video:
      "https://hpcl.parmarketing.agency/videos/hpcl/event_special/hpcl_success_story.mp4",
  },
  {
    img: "https://hpcl.parmarketing.agency/images/hpcl/event_special/thumbnail/sandart_thumbnail.webp",
    title: "Sand art performance",
    body: "Sand art performances are a unique and mesmerizing form of live storytelling, where artists use sand as a medium to create evolving images on a lightbox. Famous sand artist Sh Sarvam Patel known for his ability to convey deep stories and emotions through the medium of sand art mesmerized the audience in the marketing conclave with his depiction of image of our beloved Chairman and Managing Director ,thus creating memories for lifetime",
    video:
      "https://hpcl.parmarketing.agency/videos/hpcl/event_special/sandart.mp4",
  },
  {
    img: "https://hpcl.parmarketing.agency/images/hpcl/event_special/thumbnail/panchtattva_thumbnail.webp",
    title: "panchtattva",
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
          <button class="button video-modal-button" data-index="${index}" data-bs-toggle="modal" data-bs-target="#eventVideoModal">
            <i class="fa-solid fa-play text-white"></i>
          </button>
        </div>
            </div>
            <div class="special-right">
              <h1 class="text-capitalize">${item.title}</h1>
              <p style="font-size: 1.25rem; text-align: justify;">
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
      let modalVideo = document.getElementById("event-modal-video");
      modalVideo.querySelector("source").src = specialData[index].video;
      modalVideo.load();
      modalVideo.play();
      //
      document.getElementById("event-video-title").innerHTML =
        specialData[index].title;
    });
  });

  //
  document
    .getElementById("event-video-modal-close")
    .addEventListener("click", () => {
      let modalVideo = document.getElementById("event-modal-video");
      modalVideo.pause();
    });
});
