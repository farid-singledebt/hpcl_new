const awardsData = [
  {
    id: 1,
    SBU: "CPO",
    category: "Fastest Execution Time from PR to PO 2023-24",
    winner: "Corporate & Services Category (CPO)",
    img: "https://hpcl.parmarketing.agency/images/hpcl/awards/1.webp",
  },
  {
    id: 2,
    SBU: "EP & FP",
    category: "Excellence in Project Execution 2023-24",
    winner: "Indore Depot Revamping Project",
    img: "https://hpcl.parmarketing.agency/images/hpcl/awards/2.webp",
  },
  {
    id: 3,
    SBU: "B & RE",
    category:
      "Excellence in Project Execution & Commencement of Solar Power Sales 2023-24",
    winner: "Jhansi Solar Power Project",
    img: "https://hpcl.parmarketing.agency/images/hpcl/awards/3.webp",
  },
  {
    id: 4,
    SBU: "Petrochemicals",
    category: "Rising Star",
    winner: "Petrochemicals SBU",
    img: "https://hpcl.parmarketing.agency/images/hpcl/awards/4.webp",
  },
  {
    id: 5,
    SBU: "Natural Gas",
    category: "Excellence in Project Management 2023-24",
    winner: "Darjeeling - Jalpaiguri- Uttar Dinajpur GA",
    img: "https://hpcl.parmarketing.agency/images/hpcl/awards/5.webp",
  },
  {
    id: 6,
    SBU: "Natural Gas",
    category: "Best Performance in Sales & Profit 2023-24",
    winner: "Jind-Sonipat GA",
    img: "https://hpcl.parmarketing.agency/images/hpcl/awards/6.webp",
  },
  {
    id: 7,
    SBU: "Pipelines",
    category: "Excellence in Pipeline Security (Least Pilferages) 2023-24",
    winner: "RRKPL, Tikrikalan",
    img: "https://hpcl.parmarketing.agency/images/hpcl/awards/7.webp",
  },
  {
    id: 8,
    SBU: "Pipelines",
    category: "Lowest Power Consumption per MT 2023-24",
    winner: "MDPL, Jaipur",
    img: "https://hpcl.parmarketing.agency/images/hpcl/awards/8.webp",
  },
  {
    id: 9,
    SBU: "SOD",
    category: "Best Indent Execution Performance 2023-24",
    winner: "Bhatinda IRD",
    img: "https://hpcl.parmarketing.agency/images/hpcl/awards/8D3A5477.webp",
  },

  {
    id: 10,
    SBU: "SOD",
    category: "Highest VTS Compliance 2023-24",
    winner: "Rewari Terminal",
    img: "https://hpcl.parmarketing.agency/images/hpcl/awards/8D3A5515.webp",
  },
  {
    id: 11,
    SBU: "SOD",
    category: "Best Performance in Safety Practices 2023-24",
    winner: "Ajmer Terminal",
    img: "https://hpcl.parmarketing.agency/images/hpcl/awards/8D3A5550.webp",
  },
  {
    id: 12,
    SBU: "Aviation",
    category: "Highest Sales per Employee 2023-24",
    winner: "Jammu ASF",
    img: "https://hpcl.parmarketing.agency/images/hpcl/awards/8D3A5553.webp",
  },
  {
    id: 13,
    SBU: "Aviation",
    category: "Highest Number of Flights Refuelled per Employee 2023-24",
    winner: "Dumdum ASF",
    img: "https://hpcl.parmarketing.agency/images/hpcl/awards/8D3A5557.webp",
  },
  {
    id: 14,
    SBU: "Lubes",
    category: "Sales Growth Leadership in OEMs 2023-24",
    winner: "Pune Lube RO",
    img: "https://hpcl.parmarketing.agency/images/hpcl/awards/8D3A5558.webp",
  },
  {
    id: 15,
    SBU: "Lubes",
    category:
      "Best Sales Performance in Industrial Lube Distributor Channel 2023-24",
    winner: "Pune Lube RO",
    img: "https://hpcl.parmarketing.agency/images/hpcl/awards/8D3A5563.webp",
  },
  {
    id: 16,
    SBU: "Lubes",
    category: "Best Performance in Bazaar Lubes 2023-24",
    winner: "Bengaluru Lube RO",
    img: "https://hpcl.parmarketing.agency/images/hpcl/awards/8D3A5566.webp",
  },
  {
    id: 17,
    SBU: "Lubes",
    category: "Best Lube Blending Plant 2023-24",
    winner: "Silvasa Lube Plant",
    img: "https://hpcl.parmarketing.agency/images/hpcl/awards/8D3A5836.webp",
  },
  {
    id: 18,
    SBU: "Direct Sales",
    category: "Sales Growth Leadership in Black Oils 2023-24",
    winner: "Delhi I&C RO",
    img: "https://hpcl.parmarketing.agency/images/hpcl/awards/8D3A5914.webp",
  },
  {
    id: 19,
    SBU: "Direct Sales",
    category: "Sales Growth Leadership in Speciality Products 2023-24",
    winner: "Ahmedabad I&C RO",
    img: "https://hpcl.parmarketing.agency/images/hpcl/awards/8D3A5923.webp",
  },
  {
    id: 20,
    SBU: "Direct Sales",
    category: "Sales Growth Leadership in Bitumen 2023-24",
    winner: "Bangalore I&C RO",
    img: "https://hpcl.parmarketing.agency/images/hpcl/awards/9.webp",
  },
  {
    id: 21,
    SBU: "Retail",
    category: "Best Overall Retail Performance 2023-24",
    winner: "Gorakhpur Retail RO",
    img: "https://hpcl.parmarketing.agency/images/hpcl/awards/10.webp",
  },
  {
    id: 22,
    SBU: "Direct Sales",
    category: "Excellence in Credit Management 2023-24",
    winner: "Chennai I&C RO",
    img: "https://hpcl.parmarketing.agency/images/hpcl/awards/11.webp",
  },
  {
    id: 23,
    SBU: "LPG",
    category: "Best Performance in Non-Fuel Revenues 2023-24",
    winner: "Hyderabad LPG RO",
    img: "https://hpcl.parmarketing.agency/images/hpcl/awards/12.webp",
  },
  {
    id: 24,
    SBU: "APAC Region",
    category: "Best Financial Performance",
    winner: "Alexander Lewis",
    img: "https://hpcl.parmarketing.agency/images/hpcl/awards/13.webp",
  },
  {
    id: 25,
    SBU: "LPG",
    category: "Excellence in Leveraging Sakhi Services 2023-24",
    winner: "Purnea LPG RO",
    img: "https://hpcl.parmarketing.agency/images/hpcl/awards/14.webp",
  },
  {
    id: 26,
    SBU: "LPG",
    category: "Best Performance in New Connection Releases 2023-24",
    winner: "Siliguri LPG RO",
    img: "https://hpcl.parmarketing.agency/images/hpcl/awards/15.webp",
  },
  {
    id: 27,
    SBU: "LPG",
    category: "Sales Growth Leadership in Appu 2023-24",
    winner: "Mumbai LPG RO",
    img: "https://hpcl.parmarketing.agency/images/hpcl/awards/16.webp",
  },
  {
    id: 28,
    SBU: "LPG",
    category: "Top Performer in Incremental Per Capita Consumption 2023-24",
    winner: "Indore LPG  RO",
    img: "https://hpcl.parmarketing.agency/images/hpcl/awards/17.webp",
  },
  {
    id: 29,
    SBU: "Retail",
    category: "Outstanding Customer Outreach Achievement 2023-24",
    winner: "Aurangabad Retail RO",
    img: "https://hpcl.parmarketing.agency/images/hpcl/awards/18.webp",
  },
  {
    id: 30,
    SBU: "Retail",
    category: "Best Sales Performance in Lubes 2023-24",
    winner: "Baroda Retail RO",
    img: "https://hpcl.parmarketing.agency/images/hpcl/awards/19.webp",
  },
  {
    id: 31,
    SBU: "Retail",
    category: "Best Performance in Non-Fuel Revenues 2023-24",
    winner: "Vashi Retail RO",
    img: "https://hpcl.parmarketing.agency/images/hpcl/awards/20.webp",
  },
  {
    id: 32,
    SBU: "Retail",
    category: "Best Overall Performance in Retail Engineering 2023-24",
    winner: "Secunderabad Retail RO",
    img: "https://hpcl.parmarketing.agency/images/hpcl/awards/21.webp",
  },
  {
    id: 33,
    SBU: "Natural Gas",
    category: "Best Overall Performance 2023-24",
    winner: "Bareilly -Pilibhit - Rampur & Sahjahanpur- Badaun GA",
    img: "https://hpcl.parmarketing.agency/images/hpcl/awards/22.webp",
  },
  {
    id: 34,
    SBU: "Lubes",
    category: "Highest Market Share Gain 2023-24",
    winner: "Mumbai Lube RO",
    img: "https://hpcl.parmarketing.agency/images/hpcl/awards/23.webp",
  },
  {
    id: 35,
    SBU: "Direct Sales",
    category: "Best Overall Sales Performance 2023-24",
    winner: "Delhi I&C RO",
    img: "https://hpcl.parmarketing.agency/images/hpcl/awards/24.webp",
  },
  {
    id: 36,
    SBU: "LPG",
    category: "Highest Market Share Gain in Domestic 2023-24",
    winner: "Jaipur LPG RO",
    img: "https://hpcl.parmarketing.agency/images/hpcl/awards/25.webp",
  },
  {
    id: 37,
    SBU: "LPG",
    category: "Highest Market Share Gain in Non-Domestic Packed 2023-24",
    winner: "Bangalore LPG RO",
    img: "https://hpcl.parmarketing.agency/images/hpcl/awards/26.webp",
  },
  {
    id: 38,
    SBU: "Retail",
    category: "Best Sales Performance in MS 2023-24",
    winner: "Nasik Retail RO",
    img: "https://hpcl.parmarketing.agency/images/hpcl/awards/8D3A5506.webp",
  },
];

$(document).ready(function () {
  const awardsTable = document.getElementById("awards-table");
  let start = 0;
  let end = 10;
  function loadData() {
    let awardsResult = "";
    awardsData
      .slice(start, end)
      .map((item, index) => {
        awardsResult += `
    <tr>
      <td class="fw-bold">${item.SBU}</td>
      <td class="fw-bold"> ${item.category}</td>
      <td class="fw-bold"> ${item.winner}</td>
      <td class="text-center">
        <button class="button button-flex view-awards-image" data-index="${index}" data-bs-toggle="modal" data-bs-target="#imgModal">View <i class="fa-solid fa-eye"></i></button>
      </td>
    </tr>
  `;
      })
      .join("");
    awardsTable.innerHTML = awardsResult;
  }
  loadData();

  const paginationButtons = document.querySelectorAll(".pagination-button");
  let count = 1;
  const toggleActiveButton = () => {
    paginationButtons.forEach((item) => {
      item.classList.remove("active");
      if (Number(item.getAttribute("data-count")) === count) {
        item.classList.add("active");
      }
    });
  };
  toggleActiveButton();

  paginationButtons.forEach((item) => {
    item.addEventListener("click", function () {
      start = this.getAttribute("data-start");
      end = this.getAttribute("data-end");
      count = Number(this.getAttribute("data-count"));
      loadData();
      toggleActiveButton();
    });
  });

  document.querySelectorAll(".view-awards-image").forEach((item) => {
    item.addEventListener("click", function () {
      const index = this.getAttribute("data-index");

      document
        .getElementById("modal-img-div")
        .setAttribute("src", awardsData[index].img);
      document.getElementById("image-title").innerHTML =
        awardsData[index].winner;
    });
  });
});
