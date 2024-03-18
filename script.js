const componentTemplate = document.getElementById("componentTemplate");
const row = document.querySelector(".row");

const companyData = [
  {
    name: "DIY KIT 1",
    cost: 10000,
    image: "https://m.media-amazon.com/images/I/81+MYySZquL._SL1500_.jpg",
  },
  {
    name: "DIY KIT 2",
    cost: 14500,
    image: "https://m.media-amazon.com/images/I/81GP8rTz5SL.jpg",
  },
  {
    name: "DIY KIT 3",
    cost: 20000,
    image:
      "https://m.media-amazon.com/images/I/71wv3EH1caL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    name: "DIY KIT 4",
    cost: 16129,
    image: "https://m.media-amazon.com/images/I/51LaOW+gNYL._SY300_SX300_.jpg",
  },
  {
    name: "DIY KIT 5",
    cost: 12900,
    image:
      "https://rukminim2.flixcart.com/image/850/1000/kuof5ow0/learning-toy/7/m/n/double-solar-power-kit-diy-solar-energy-experiments-kit-for-original-imag7r2gbn8p42wk.jpeg?q=20&crop=false",
  },

  {
    name: "DIY KIT 6",
    cost: 14500,
    image: "https://m.media-amazon.com/images/I/81GP8rTz5SL.jpg",
  },
  {
    name: "DIY KIT 7",
    cost: 12900,
    image:
      "https://rukminim2.flixcart.com/image/850/1000/kuof5ow0/learning-toy/7/m/n/double-solar-power-kit-diy-solar-energy-experiments-kit-for-original-imag7r2gbn8p42wk.jpeg?q=20&crop=false",
  },
  {
    name: "DIY KIT 8",
    cost: 20000,
    image:
      "https://m.media-amazon.com/images/I/71wv3EH1caL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    name: "DIY KIT 9",
    cost: 20000,
    image: "https://m.media-amazon.com/images/I/81VoP5B8PqL.jpg",
  },

  {
    name: "DIY KIT 10",
    cost: 20000,
    image: "https://m.media-amazon.com/images/I/81VoP5B8PqL.jpg",
  },
  {
    name: "DIY KIT 11",
    cost: 16129,
    image: "https://m.media-amazon.com/images/I/51LaOW+gNYL._SY300_SX300_.jpg",
  },
  {
    name: "DIY KIT 12",
    cost: 10000,
    image: "https://m.media-amazon.com/images/I/81+MYySZquL._SL1500_.jpg",
  },

  // Add more company data as needed
];

function createComponent(company) {
  const newComponent = componentTemplate.content.cloneNode(true);
  newComponent.querySelector(".card-title").textContent = company.name;
  newComponent.querySelector("#cost").textContent = company.cost;
  newComponent.querySelector(".card-img-top").src = company.image;
  return newComponent;
}

function displayComponents() {
  let displayed = 0;
  for (const company of companyData) {
    if (displayed === 12) {
      break; // Limit to 12 components per page
    }

    const component = createComponent(company);
    row.appendChild(component);
    displayed++;

    // Add functionality for showing more components (optional):
    // - Implement pagination or a "load more" button
  }
}

displayComponents();
