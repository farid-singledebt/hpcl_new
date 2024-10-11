const activitiesData = [];

$(document).ready(function () {
  for (let i = 1; i <= 12; i++) {
    activitiesData.push({
      img: `https://hpcl.parmarketing.agency/images/hpcl/activities/${i}.webp`,
    });
  }

  let activitiesCarousel = document.getElementById("activities-carousel");
  let activitiesResult = "";

  activitiesData.forEach((item, index) => {
    activitiesResult += `
        <div class="banner-item">
            <img
              src="${item.img}"
              alt="activities ${index}"
            />
          </div>
    `;
  });
  //   activitiesCarousel.innerHTML = activitiesResult;
});
