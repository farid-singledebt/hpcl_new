const pragatiGalleryData = [
  {
    title: "LPG",
    body: "The stall, themed 'Transition and Sustainability,' focused on showcasing the company’s role in facilitating sustainable energy solutions while navigating the evolving dynamics of the LPG business. Interactive displays highlighted key products offerings, digital solutions, and notable milestones in  LPG SBU’s journey like the LPG Cavern, offering visitors an immersive and informative experience",
    images: [],
    displayImage:
      "https://hpcl.parmarketing.agency/images/hpcl/pragati/lpg/1.webp",
  },
  {
    title: "Retail SBU",
    body: "The stall, themed 'Retail Transformation' is designed to reflect HPCL’s forward-thinking approach to revolutionizing the retail experience. With modern design elements and interactive displays, it showcases the latest advancements in fuel technology, loyalty programs, and digital payment solutions. The stall highlights our commitment to staying ahead of market trends and delivering seamless, technology-driven services to millions of consumers every day.",
    images: [],
    displayImage:
      "https://hpcl.parmarketing.agency/images/hpcl/pragati/retail_sbu/1.webp",
  },
  {
    title: "SOD SBU",
    body: "The SBU’s stall was themed “Green Future”, suitably aligned with its sustainability and environmentally friendly initiatives. Inside the stall, many innovative displays were featured, such as a “Net Zero Terminal”, highlighting our commitment to reducing carbon footprints. For showcasing the use of cleaner energy for cooking, Ethanol Stove was displayed; and E Flex Fuel Kit was displayed for demonstrating solutions for flexible fuel usage. These displays were complemented with AV presentations, so as to provide to visitors, deeper insights  into these technologies and immersive experience about their impact on the environment.",
    images: [],
    displayImage:
      "https://hpcl.parmarketing.agency/images/hpcl/pragati/sod_sbu/4.webp",
  },
  {
    title: "Engineering project and pipeline",
    body: "Pipelines SBU demonstrated the following through Roto-scopic Display (a moving screen). <br/> 1.	The journey of Pipelines since 1985 (starting with Mumbai-Pune Pipeline) to till date <br/> 2.	New Pipeline Projects envisaged till 2030 & Sustainable journey A screen has been set-up displaying video gallery on various innovations/initiatives which are implemented 1st in the industry by Pipelines SBU and a Video on various challenging Pipeline Projects implemented by Pipelines SBU. Further, Smart Pump Station (1st in the industry) at Kalakada Station in Vijayawada Dharmapuri Pipeline was inaugurated by CMD in the presence of CFD. Smart pump stations are equipped with advanced instrumentation, enabling remote monitoring, control, and operation from non-hardship locations. These stations are designed with self-sufficient systems that require minimal human intervention from remote control centers, significantly enhancing safety in hazardous areas. The integration of smart technology allows for equipment management to be handled remotely, reducing on-site personnel requirements. Interactive video feeds provide real-time monitoring of equipment, ensuring operational integrity and supporting informed decision-making",
    images: [],
    displayImage:
      "https://hpcl.parmarketing.agency/images/hpcl/pragati/engineering/1.webp",
  },
  {
    title: "Petrochemicals",
    body: "The stall centred on the theme 'Powering Progress with Petrochemicals' is designed to demonstrate how HPCL’s innovative products will fuel progress across sectors, from polymers to solvents and industrial chemicals. The visitors could explore the wide range of HPCL’s petrochemical products and their applications and experience how HPCL is 'powering progress' by providing high-quality, reliable petrochemical products that meet the evolving demands of various industries",
    images: [],
    displayImage:
      "https://hpcl.parmarketing.agency/images/hpcl/pragati/petrochemicals/1.webp",
  },
  {
    title: "Lubes and Aviation SBU",
    body: "The theme 'Sustainability and Futuristic Technology,' was designed to showcase SBU’s commitment to environmentally responsible products and advanced technological solutions. The stall featured a unique and eco-friendly design made from bamboo wood, providing a visually distinct space that reflected the SBU’s focus on sustainability. Displays highlighted key aspects of Lubes and Aviation SBUs, including product packs, base oils, models and international market ventures",
    images: [],
    displayImage:
      "https://hpcl.parmarketing.agency/images/hpcl/pragati/lubes/10.webp",
  },
  {
    title: "Natural Gas and Renewables",
    body: "The stall, themed 'Fuelling Future' was designed to highlight the company’s commitment to clean and green energy solutions. This stall was shared between the Natural Gas and Biofuel & Renewable teams, showcasing our diverse portfolio in these sectors LED screens showcased various projects in natural gas, biofuel, and renewable energy. The design also incorporated cutouts of renewable energy sources like windmills, solar panels, and CBG/CNG dispensing units, creating an immersive visual experience. The miniature model of the CGD Network, along with an interactive screen displayed details of key projects. An exciting feature was the launch of 'Organic Manure,' with an AV explaining its benefits and future prospects",
    images: [],
    displayImage:
      "https://hpcl.parmarketing.agency/images/hpcl/pragati/natural_gas/1.webp",
  },
];

for (let i = 1; i <= 6; i++) {
  pragatiGalleryData[0].images.push({
    img: `https://hpcl.parmarketing.agency/images/hpcl/pragati/lpg/${i}.webp`,
  });
}
for (let i = 1; i <= 8; i++) {
  pragatiGalleryData[1].images.push({
    img: `https://hpcl.parmarketing.agency/images/hpcl/pragati/retail_sbu/${i}.webp`,
  });
}
for (let i = 1; i <= 6; i++) {
  pragatiGalleryData[2].images.push({
    img: `https://hpcl.parmarketing.agency/images/hpcl/pragati/sod_sbu/${i}.webp`,
  });
}
for (let i = 1; i <= 5; i++) {
  pragatiGalleryData[3].images.push({
    img: `https://hpcl.parmarketing.agency/images/hpcl/pragati/engineering/${i}.webp`,
  });
}
for (let i = 1; i <= 4; i++) {
  pragatiGalleryData[4].images.push({
    img: `https://hpcl.parmarketing.agency/images/hpcl/pragati/petrochemicals/${i}.webp`,
  });
}
for (let i = 1; i <= 10; i++) {
  pragatiGalleryData[5].images.push({
    img: `https://hpcl.parmarketing.agency/images/hpcl/pragati/lubes/${i}.webp`,
  });
}
for (let i = 1; i <= 9; i++) {
  pragatiGalleryData[6].images.push({
    img: `https://hpcl.parmarketing.agency/images/hpcl/pragati/natural_gas/${i}.webp`,
  });
}

function renderPragatiGallery() {
  const pragatiGalleryDiv = document.getElementById("pragati-gallery-div");
  let pragatiGalleryResult = "";

  pragatiGalleryData.reverse().map((item, index) => {
    pragatiGalleryResult += `
        <div class="pragati-gallery mb-5 py-4">
          <div class="pragati-gallery-left">
          <img src="${item.displayImage}" class="pragati-display-images" alt="display=${index}" data-index="${index}" data-bs-toggle="modal" data-bs-target="#displayModal" />
          </div>
          <div class="pragati-gallery-right">
            <h2 class="mb-4">${item.title}</h2>
            <p class="pragati-clamp">${item.body}</p>
            <div class="text-end">
              <p class="fw-bold text-decoration-underline mt-2 pragati-gallery-readmore" data-index="${index}" style="cursor: pointer" data-bs-toggle="modal" data-bs-target="#readMore">
                Read more
              </p>
            </div>
          </div>
          <div class="pragati-gallery-bg"></div>
        </div>
      `;
  });

  pragatiGalleryDiv.innerHTML = pragatiGalleryResult;

  initializeOwlCarousel();
}

function initializeOwlCarousel() {
  // Select all carousels
  document.querySelectorAll(".pragati-gallery-carousel").forEach((carousel) => {
    $(carousel).owlCarousel({
      loop: true, // Infinite loop
      margin: 0, // Space between items
      nav: true, // Show next/prev buttons
      items: 1, // Always show 1 image at a time
      autoplay: false, // Enable autoplay
      autoplayTimeout: 3000, // Time between transitions (3 seconds)
      autoplayHoverPause: true, // Pause autoplay on hover
      dots: false, // Show navigation dots
      responsive: {
        0: {
          items: 1, // 1 item for mobile
        },
        600: {
          items: 1, // 1 item for tablet
        },
        1000: {
          items: 1, // 1 item for desktop
        },
      },
    });
  });
}

$(document).ready(function () {
  renderPragatiGallery();
  //
  const pragatiGalleryReadmore = document.querySelectorAll(
    ".pragati-gallery-readmore"
  );
  pragatiGalleryReadmore.forEach((item) => {
    item.addEventListener("click", function () {
      const newparaIndex = this.getAttribute("data-index");
      document.getElementById("read-more-title").innerHTML =
        pragatiGalleryData[newparaIndex].title;
      document.getElementById("read-more-div").innerHTML =
        pragatiGalleryData[newparaIndex].body;
    });
  });

  //
  document.querySelectorAll(".pragati-display-images").forEach((item) => {
    item.addEventListener("click", function () {
      let index = this.getAttribute("data-index");

      const $owl = $("#display-modal");
      if ($owl.hasClass("owl-loaded")) {
        $owl.trigger("destroy.owl.carousel");
        $owl.removeClass("owl-loaded");
        $owl.find(".owl-stage-outer").children().unwrap();
      }

      let carouselItems = pragatiGalleryData[index].images
        .map(
          (item, i) => `
        <div class="item">
          <img src="${item.img}" alt="Image ${i + 1}" />
        </div>
      `
        )
        .join("");

      document.getElementById("display-modal").innerHTML = carouselItems;
      document.getElementById("display-image-title").innerHTML =
        pragatiGalleryData[index].title;

      $owl.owlCarousel({
        items: 3,
        loop: true,
        margin: 20,
        center: true,
        nav: true,
        dots: true,
        autoplay: false,
        responsive: {
          0: {
            items: 3,
          },
          600: {
            items: 3,
          },
          1000: {
            items: 3,
          },
        },
        onInitialized: putFirstCenterImage,
        onTranslated: updateCenterImage,
        onTranslate: updateCenterImage,
      });

      function putFirstCenterImage() {
        document
          .getElementById("center-image")
          .setAttribute("src", pragatiGalleryData[index].images[0].img);
      }

      function updateCenterImage() {
        var centerItem = $owl.find(".center .item img");
        var centerImageSrc = centerItem.attr("src");
        $("#center-image").attr("src", centerImageSrc);
      }
    });
  });
});
