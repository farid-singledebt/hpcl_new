const presentationData = [
  {
    title: "Channel Partners as Force Multipliers",
    img: "https://hpcl.parmarketing.agency/images/hpcl/presentation/channel_partners.webp",
    body: "The presentation 'Channel Partners as Force Multipliers' highlights the critical role of channel partners, responsible for 83% of total sales, as key drivers of growth and operational excellence. The strategy aims to elevate engagement and performance across all partner tiers, transforming challenges into opportunities for enhanced impact. By addressing financial constraints, fostering stronger partnerships, and building capabilities, the strategy is geared toward unlocking sustainable growth and cultivating a more engaged, high-performing channel partner network poised for long-term success.",
    overlay: "Step into adventure",
    pdf: "https://hpcl.parmarketing.agency/pdf/Channel_partners_as_Force_Multipliers.pdf",
  },
  {
    title: "Customer Focused Transformation",
    img: "https://hpcl.parmarketing.agency/images/hpcl/presentation/CX.webp",
    body: "The 'Customer Focused Transformation' presentation outlines a strategy to enhance Customer Experience (CX) by transforming customer journeys and interactions. It emphasizes the role of new and emerging technologies in creating value for customers. The strategy focuses on four key themes: Convenience, Service, Visual Delight, and Engagement; targeting improvements across retail outlets, LPG services, and digital platforms. For B2C, it emphasizes service innovation and enhanced digital experiences, while the B2B approach includes AI-driven predictive tracking and integrated solutions. The presentation also highlights fostering a CX-centric culture to ensure continuous improvement, aiming to make every interaction memorable and drive loyalty.",
    overlay: "Breathe the silence",
    pdf: "https://hpcl.parmarketing.agency/pdf/Customer_Focused_Transformation.pdf",
  },
  {
    title: "HPCL's Ascent to an Iconic Brand",
    img: "https://hpcl.parmarketing.agency/images/hpcl/presentation/journey.webp",
    body: "The presentation 'HPCL's Ascent to an Iconic Brand' outlines HPCL's strategic journey to becoming a globally recognized iconic brand. It highlights key areas for improvement to elevate brand perception, visibility, and customer engagement. At the core of this transformation is a focus on enhancing brand perception through targeted marketing and communication efforts aimed at differentiating HPCL in a competitive environment. The roadmap also emphasizes the role of digital transformation in driving deeper customer engagement for fostering brand loyalty. By leveraging digital tools and platforms, HPCL aims to provide personalized and seamless experiences across customer touchpoints. These initiatives are designed to not only strengthen customer relationships but also position HPCL as a forward-thinking, customer-centric brand on a global scale. The overarching goal is to build an enduring brand that resonates with customers and delivers lasting value.",
    overlay: "Pure winter magic",
    pdf: "https://hpcl.parmarketing.agency/pdf/HPCL's_Ascent_to_an_Iconic_Brand.pdf",
  },
  {
    title: "Mission 60@T25",
    img: "https://hpcl.parmarketing.agency/images/hpcl/presentation/mission.webp",
    body: "The “Mission 60@T25” presentation lays out a comprehensive strategic plan aimed at achieving an ambitious target for marketing volume of 60 MMT by FY 2025-26. It provides a holistic overview of the current performances across various Strategic Business Units (SBUs), identifying key strengths, challenges, and untapped potential within each sector. The presentation highlights opportunities for growth and expansion in both existing and emerging markets.",
    overlay: "Endless possibilities await",
    pdf: "https://hpcl.parmarketing.agency/pdf/Mission_60_@_T25.pdf",
  },
];

$(document).ready(function () {
  const presentation = document.getElementById("presentation");
  let presentationResult = "";
  presentationData
    .map((item, index) => {
      presentationResult += `
        <div class="presentation-card">
          <div class="presentation-border">
            <p class="fw-bold">${item.title}</p>
          </div>
          <a href="javascript:void(0)" class="presentation-img" data-pdf="${item.pdf}" data-bs-toggle="modal" data-bs-target="#pdfModal">
            <img
              src=${item.img}
              alt="card"
            />
            <div class="overlay">
              <p>${item.title}</p>
            </div>
          </a>
          <p class="presentation-clamp">${item.body}</p>
          <p class="text-end text-decoration-underline fw-bold mt-2 read-more-button" style="cursor: pointer" data-index="${index}" data-bs-toggle="modal" data-bs-target="#readMore">Read more</p>
        </div>
    `;
    })
    .join("");
  presentation.innerHTML = presentationResult;

  //
  document.querySelectorAll(".presentation-img").forEach((item) => {
    item.addEventListener("click", function () {
      const pdfUrl = this.getAttribute("data-pdf");
      document.getElementById("pdfIframe").src = pdfUrl + "#toolbar=0";
    });
  });

  const readMoreButtons = document.querySelectorAll(".read-more-button");
  readMoreButtons.forEach((item) => {
    item.addEventListener("click", function () {
      const paraIndex = this.getAttribute("data-index");
      const readMoreTitle = document.getElementById("read-more-title");
      const readMoreDiv = document.getElementById("read-more-div");
      readMoreTitle.innerHTML = presentationData[paraIndex].title;
      readMoreDiv.innerHTML = presentationData[paraIndex].body;
    });
  });
});
