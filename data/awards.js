const awardsData = [
  {
    id: 4,
    SBU: "Retail",
    category: "Outstanding Customer Outreach Achievement 2023-24",
    winner: "Aurangabad Retail RO",
    img: "https://hpcl.parmarketing.agency/images/hpcl/awards/1.webp",
  },
  {
    id: 5,
    SBU: "Retail",
    category: "Best Sales Performance in Lubes 2023-24",
    winner: "Baroda Retail RO",
    img: "https://hpcl.parmarketing.agency/images/hpcl/awards/2.webp",
  },
  {
    id: 6,
    SBU: "Retail",
    category: "Best Performance in Non-Fuel Revenues 2023-24",
    winner: "Vashi Retail RO",
    img: "https://hpcl.parmarketing.agency/images/hpcl/awards/3.webp",
  },
  {
    id: 7,
    SBU: "Retail",
    category: "Best Overall Performance in Retail Engineering 2023-24",
    winner: "Secunderabad Retail RO",
    img: "https://hpcl.parmarketing.agency/images/hpcl/awards/4.webp",
  },
  {
    id: 8,
    SBU: "Retail",
    category: "Best Sales Performance in MS 2023-24",
    winner: "Nasik Retail RO",
    img: "https://hpcl.parmarketing.agency/images/hpcl/awards/5.webp",
  },
  {
    id: 9,
    SBU: "Retail",
    category: "Best Sales Performance in HSD 2023-24",
    winner: "Jabalput Retail RO",
    img: "https://hpcl.parmarketing.agency/images/hpcl/awards/6.webp",
  },
  {
    id: 10,
    SBU: "Retail",
    category: "Best Overall Retail Performance 2023-24",
    winner: "Gorakhpur Retail RO",
    img: "https://hpcl.parmarketing.agency/images/hpcl/awards/7.webp",
  },
  {
    id: 22,
    SBU: "LPG",
    category: "Best Performance in Non-Fuel Revenues 2023-24",
    winner: "Hyderabad LPG RO",
    img: "https://hpcl.parmarketing.agency/images/hpcl/awards/8.webp",
  },
  {
    id: 23,
    SBU: "LPG",
    category: "Excellence in Leveraging Sakhi Services 2023-24",
    winner: "Purnea LPG RO",
    img: "https://hpcl.parmarketing.agency/images/hpcl/awards/9.webp",
  },
  {
    id: 24,
    SBU: "LPG",
    category: "Best Performance in New Connection Releases 2023-24",
    winner: "Siliguri LPG RO",
    img: "https://hpcl.parmarketing.agency/images/hpcl/awards/10.webp",
  },
  {
    id: 25,
    SBU: "LPG",
    category: "Sales Growth Leadership in Appu 2023-24",
    winner: "Mumbai LPG RO",
    img: "https://hpcl.parmarketing.agency/images/hpcl/awards/11.webp",
  },
  {
    id: 26,
    SBU: "LPG",
    category: "Top Performer in Incremental Per Capita Consumption 2023-24",
    winner: "Indore LPG  RO",
    img: "https://hpcl.parmarketing.agency/images/hpcl/awards/12.webp",
  },
  {
    id: 27,
    SBU: "LPG",
    category: "Highest Market Share Gain in Domestic 2023-24",
    winner: "Jaipur LPG RO",
    img: "https://hpcl.parmarketing.agency/images/hpcl/awards/13.webp",
  },
  {
    id: 28,
    SBU: "LPG",
    category: "Highest Market Share Gain in Non-Domestic Packed 2023-24",
    winner: "Bangalore LPG RO",
    img: "https://hpcl.parmarketing.agency/images/hpcl/awards/14.webp",
  },
  {
    id: 17,
    SBU: "Lubes",
    category: "Sales Growth Leadership in OEMs 2023-24",
    winner: "Pune Lube RO",
    img: "https://hpcl.parmarketing.agency/images/hpcl/awards/15.webp",
  },
  {
    id: 18,
    SBU: "Lubes",
    category:
      "Best Sales Performance in Industrial Lube Distributor Channel 2023-24",
    winner: "Pune Lube RO",
    img: "https://hpcl.parmarketing.agency/images/hpcl/awards/16.webp",
  },
  {
    id: 19,
    SBU: "Lubes",
    category: "Best Performance in Bazaar Lubes 2023-24",
    winner: "Bengaluru Lube RO",
    img: "https://hpcl.parmarketing.agency/images/hpcl/awards/17.webp",
  },
  {
    id: 20,
    SBU: "Lubes",
    category: "Best Lube Blending Plant 2023-24",
    winner: "Silvasa Lube Plant",
    img: "https://hpcl.parmarketing.agency/images/hpcl/awards/18.webp",
  },
  {
    id: 21,
    SBU: "Lubes",
    category: "Highest Market Share Gain 2023-24",
    winner: "Mumbai Lube RO",
    img: "https://hpcl.parmarketing.agency/images/hpcl/awards/19.webp",
  },
  {
    id: 30,
    SBU: "Direct Sales",
    category: "Sales Growth Leadership in Black Oils 2023-24",
    winner: "Delhi I&C RO",
    img: "https://hpcl.parmarketing.agency/images/hpcl/awards/15.webp",
  },
  {
    id: 31,
    SBU: "Direct Sales",
    category: "Sales Growth Leadership in Speciality Products 2023-24",
    winner: "Ahmedabad I&C RO",
    img: "https://hpcl.parmarketing.agency/images/hpcl/awards/16.webp",
  },
  {
    id: 32,
    SBU: "Direct Sales",
    category: "Sales Growth Leadership in Bitumen 2023-24",
    winner: "Bangalore I&C RO",
    img: "https://hpcl.parmarketing.agency/images/hpcl/awards/17.webp",
  },
  {
    id: 33,
    SBU: "Direct Sales",
    category: "Excellence in Credit Management 2023-24",
    winner: "Chennai I&C RO",
    img: "https://hpcl.parmarketing.agency/images/hpcl/awards/18.webp",
  },
  {
    id: 34,
    SBU: "Direct Sales",
    category: "Best Overall Sales Performance 2023-24",
    winner: "Delhi I&C RO",
    img: "https://hpcl.parmarketing.agency/images/hpcl/awards/19.webp",
  },
  {
    id: 1,
    SBU: "SOD",
    category: "Best Indent Execution Performance 2023-24",
    winner: "Bhatinda IRD",
    img: "https://hpcl.parmarketing.agency/images/hpcl/awards/25.webp",
  },
  {
    id: 2,
    SBU: "SOD",
    category: "Highest VTS Compliance 2023-24",
    winner: "Rewari Terminal",
    img: "https://hpcl.parmarketing.agency/images/hpcl/awards/26.webp",
  },
  {
    id: 3,
    SBU: "SOD",
    category: "Best Performance in Safety Practices 2023-24",
    winner: "Ajmer Terminal",
    img: "https://hpcl.parmarketing.agency/images/hpcl/awards/27.webp",
  },
  {
    id: 37,
    SBU: "Aviation",
    category: "Highest Sales per Employee 2023-24",
    winner: "Jammu ASF",
    img: "https://hpcl.parmarketing.agency/images/hpcl/awards/28.webp",
  },
  {
    id: 38,
    SBU: "Aviation",
    category: "Highest Number of Flights Refuelled per Employee 2023-24",
    winner: "Dumdum ASF",
    img: "https://hpcl.parmarketing.agency/images/hpcl/awards/29.webp",
  },
  {
    id: 11,
    SBU: "Pipelines",
    category: "Excellence in Pipeline Security (Least Pilferages) 2023-24",
    winner: "RRKPL, Tikrikalan",
    img: "https://hpcl.parmarketing.agency/images/hpcl/awards/30.webp",
  },
  {
    id: 12,
    SBU: "Pipelines",
    category: "Lowest Power Consumption per MT 2023-24",
    winner: "MDPL, Jaipur",
    img: "https://hpcl.parmarketing.agency/images/hpcl/awards/31.webp",
  },
  {
    id: 29,
    SBU: "EP & FP",
    category: "Excellence in Project Execution 2023-24",
    winner: "Indore Depot Revamping Project",
    img: "https://hpcl.parmarketing.agency/images/hpcl/awards/32.webp",
  },
  {
    id: 35,
    SBU: "CPO",
    category: "Fastest Execution Time from PR to PO 2023-24",
    winner: "Corporate & Services Category (CPO)",
    img: "https://hpcl.parmarketing.agency/images/hpcl/awards/33.webp",
  },
  {
    id: 36,
    SBU: "B & RE",
    category:
      "Excellence in Project Execution & Commencement of Solar Power Sales 2023-24",
    winner: "Jhansi Solar Power Project",
    img: "https://hpcl.parmarketing.agency/images/hpcl/awards/34.webp",
  },
  //
  {
    id: 13,
    SBU: "Petrochemicals",
    category: "Rising Star",
    winner: "Petrochemicals SBU",
    img: "https://hpcl.parmarketing.agency/images/hpcl/awards/35.webp",
  },
  //
  {
    id: 14,
    SBU: "Natural Gas",
    category: "Excellence in Project Management 2023-24",
    winner: "Darjeeling - Jalpaiguri- Uttar Dinajpur GA",
    img: "https://hpcl.parmarketing.agency/images/hpcl/awards/36.webp",
  },
  {
    id: 15,
    SBU: "Natural Gas",
    category: "Best Performance in Sales & Profit 2023-24",
    winner: "Jind-Sonipat GA",
    img: "https://hpcl.parmarketing.agency/images/hpcl/awards/37.webp",
  },
  {
    id: 16,
    SBU: "Natural Gas",
    category: "Best Overall Performance 2023-24",
    winner: "Bareilly -Pilibhit - Rampur & Sahjahanpur- Badaun GA",
    img: "https://hpcl.parmarketing.agency/images/hpcl/awards/38.webp",
  },
];

$(document).ready(function () {
  const categorizedAwards = awardsData.reduce((acc, current) => {
    if (!acc[current.SBU]) {
      acc[current.SBU] = [];
    }
    acc[current.SBU].push(current);
    return acc;
  }, {});

  const awardsContainer = document.getElementById("awards-accordion");

  for (const [sbu, awards] of Object.entries(categorizedAwards)) {
    const accContainer = document.createElement("div");
    accContainer.classList.add("acc-container");

    const accHead = document.createElement("div");
    accHead.classList.add("acc-head");
    accHead.innerHTML = `
    <h2>${sbu}</h2>
    <div>
      <button class="button">
        <i class="fa fa-plus"></i>
      </button>
    </div>
  `;

    accContainer.appendChild(accHead);

    const accBodyContainer = document.createElement("div");
    accBodyContainer.style.display = "none";

    awards.forEach((award, index) => {
      const accBody = document.createElement("div");
      accBody.classList.add("acc-body");

      accBody.innerHTML = `
      <div>
        <img src="${award.img}" alt="${award.category}" data-category="${award.category}" class="acc-img" />
      </div>
      <div>
        <h2>Category: ${award.category}
        </h2>
        <h2>Winner: ${award.winner}
        </h2>
      </div>
      <div class="flex-grow-1 text-end">
        <button class="button show-acc-image" style="min-width: 165px" data-img="${award.img}" data-category="${award.category}" data-bs-toggle="modal" data-bs-target="#imgModal">View Image <i class="fa fa-eye"></i></button>
      </div>
    `;

      accBodyContainer.appendChild(accBody);
    });

    accContainer.appendChild(accBodyContainer);

    accHead.addEventListener("click", () => {
      const icon = accHead.querySelector("i");
      if (accBodyContainer.style.display === "none") {
        accBodyContainer.style.display = "block";
        accContainer.classList.add("active");
        // Change the icon to minus
        icon.classList.remove("fa-plus");
        icon.classList.add("fa-minus");
      } else {
        accBodyContainer.style.display = "none";
        accContainer.classList.remove("active");
        // Change the icon back to plus
        icon.classList.remove("fa-minus");
        icon.classList.add("fa-plus");
      }
    });

    awardsContainer.appendChild(accContainer);
  }

  let showAccImage = document.querySelectorAll(".show-acc-image");
  showAccImage.forEach((item) => {
    item.addEventListener("click", function () {
      let img = this.getAttribute("data-img");
      document.getElementById("modal-img-div").setAttribute("src", img);
      document.getElementById("image-title").innerHTML =
        this.getAttribute("data-category");
    });
  });
});
