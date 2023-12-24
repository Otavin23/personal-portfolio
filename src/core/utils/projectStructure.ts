interface IProject {
  image: string;
  name: string;
  description: string;
  tech: {
    name: string;
    color: string;
    background: string;
  }[];
  demo: string;
  code: string;
}

const projectStructure: IProject[] = [
  {
    image: "../assets/projects/image1.png",
    name: "filmes e series",
    description:
      "Create a new iteration based on the Vizer concept, a project that uses TheMovieDB API to collect and present detailed information about films and actors.",
    tech: [
      {
        name: "react.js",
        color: "#3b88e9",
        background: "#3b88e925",
      },
      {
        name: "typescript",
        color: "#d17724",
        background: "#d1772425",
      },
      {
        name: "chakra-ui",
        color: "#449d5d",
        background: "#449d5d25",
      },
      {
        name: "git",
        color: "#9162c0",
        background: "#9162c025",
      },
    ],
    demo: "https://clone-vizer.vercel.app/",
    code: "https://github.com/Otavin23/clone-vizer",
  },
  {
    image: "../assets/projects/image2.png",
    name: "devjobs",
    description:
      "DevJobs: A website dedicated to finding a wide variety of job opportunities for programmers.",
    tech: [
      {
        name: "react.js",
        color: "#3b88e9",
        background: "#3b88e925",
      },
      {
        name: "typescript",
        color: "#d17724",
        background: "#d1772425",
      },
      {
        name: "chakra-ui",
        color: "#449d5d",
        background: "#449d5d25",
      },
      {
        name: "git",
        color: "#9162c0",
        background: "#9162c025",
      },
    ],
    demo: "https://devjobs-tawny.vercel.app/",
    code: "https://github.com/Otavin23/devjobs",
  },
  {
    image: "../assets/projects/image3.png",
    name: "RestCountries",
    description:
      "RestCountries is a project dedicated to providing comprehensive information about countries, covering essential data such as the name of the country, its population, capital and a wide range of other relevant details",
    tech: [
      {
        name: "react.js",
        color: "#3b88e9",
        background: "#3b88e925",
      },
      {
        name: "typescript",
        color: "#d17724",
        background: "#d1772425",
      },
      {
        name: "chakra-ui",
        color: "#449d5d",
        background: "#449d5d25",
      },
      {
        name: "git",
        color: "#9162c0",
        background: "#9162c025",
      },
    ],
    demo: "https://rest-countries-six-beta.vercel.app/",
    code: "https://github.com/Otavin23/REST-Countries",
  },
  {
    image: "../assets/projects/image4.png",
    name: "Photosnap",
    description:
      "Photosnap is a fictional website multi-page for a platform for photographers and visual storytellers that aims to share photographs, tell stories and connect with others in their profession.",
    tech: [
      {
        name: "react.js",
        color: "#3b88e9",
        background: "#3b88e925",
      },
      {
        name: "typescript",
        color: "#d17724",
        background: "#d1772425",
      },
      {
        name: "chakra-ui",
        color: "#449d5d",
        background: "#449d5d25",
      },
      {
        name: "git",
        color: "#9162c0",
        background: "#9162c025",
      },
    ],
    demo: "https://photosnap-pink.vercel.app/",
    code: "https://github.com/Otavin23/Photosnap",
  },
  {
    image: "../assets/projects/image5.png",
    name: "Empire Burguer",
    description:
      "O Empire Burger é a sua fonte definitiva para descobrir os hambúrgueres mais incríveis em sua cidade. Aqui, você pode verificar os preços dos hambúrgueres mais saborosos e encontrar facilmente os locais onde adquiri-los. Explore nosso site para satisfazer seus desejos culinários e encontrar os hambúrgueres perfeitos para o seu paladar.",
    tech: [
      {
        name: "html",
        color: "#d17724",
        background: "#d1772425",
      },
      {
        name: "css",
        color: "#3b88e9",
        background: "#3b88e925",
      },
      {
        name: "javascript",
        color: "#d17724",
        background: "#d1772425",
      },
      {
        name: "git",
        color: "#9162c0",
        background: "#9162c025",
      },
    ],

    demo: "https://br-challenges-empire-burger.vercel.app/",
    code: "https://github.com/Otavin23/br-challenges-empire-burger",
  },
  {
    image: "../assets/projects/image6.png",
    name: "Logis entrega",
    description:
      "Nossa landing page oferece uma experiência completa para atender às suas necessidades de entrega super-rápida. Somos seu parceiro de confiança quando se trata de entregas expressas e relâmpago. Explore nossa página e descubra como podemos tornar sua experiência de entrega mais eficiente e conveniente.",
    tech: [
      {
        name: "html",
        color: "#d17724",
        background: "#d1772425",
      },
      {
        name: "css",
        color: "#3b88e9",
        background: "#3b88e925",
      },
      {
        name: "javascript",
        color: "#d17724",
        background: "#d1772425",
      },
      {
        name: "git",
        color: "#9162c0",
        background: "#9162c025",
      },
    ],
    demo: "https://logist-fast-delivery-landing-page.vercel.app/",
    code: "https://github.com/Otavin23/Logist-fast-delivery-landing-Page",
  },
  {
    image: "../assets/projects/image7.png",
    name: "Nextcent",
    description:
      "Construa uma comunidade robusta e envolvente com nosso serviço de gerenciamento de comunidade. Nossa equipe dedicada utiliza estratégias inovadoras para cultivar conexões autênticas e promover a participação ativa.",
    tech: [
      {
        name: "react.js",
        color: "#3b88e9",
        background: "#3b88e925",
      },
      {
        name: "typescript",
        color: "#d17724",
        background: "#d1772425",
      },
      {
        name: "chakra-ui",
        color: "#449d5d",
        background: "#449d5d25",
      },
      {
        name: "git",
        color: "#9162c0",
        background: "#9162c025",
      },
    ],
    demo: "https://nextcent-nine.vercel.app/",
    code: "https://github.com/Otavin23/nextcent",
  },
];

export { projectStructure };
