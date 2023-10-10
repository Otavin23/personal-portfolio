interface IProject {
  image: string;
  name: string;
  description: string;
  tech: string[];
  demo: string;
  code: string;
}

const projectStructure: IProject[] = [
  {
    image: "../assets/projects/image1.png",
    name: "filmes e series",
    description:
      "Create a new iteration based on the Vizer concept, a project that uses TheMovieDB API to collect and present detailed information about films and actors.",
    tech: ["React.js", "Typescript", "Chakra UI", "Git"],
    demo: "https://clone-vizer.vercel.app/",
    code: "https://github.com/Otavin23/clone-vizer",
  },
  {
    image: "../assets/projects/image2.png",
    name: "devjobs",
    description:
      "DevJobs: A website dedicated to finding a wide variety of job opportunities for programmers.",
    tech: ["React.js", "Typescript", "Chakra UI", "Git"],
    demo: "https://devjobs-tawny.vercel.app/",
    code: "https://github.com/Otavin23/devjobs",
  },
  {
    image: "../assets/projects/image3.png",
    name: "RestCountries",
    description:
      "RestCountries is a project dedicated to providing comprehensive information about countries, covering essential data such as the name of the country, its population, capital and a wide range of other relevant details",
    tech: ["React.js", "Typescript", "Chakra UI", "Git"],
    demo: "https://rest-countries-six-beta.vercel.app/",
    code: "https://github.com/Otavin23/REST-Countries",
  },
  {
    image: "../assets/projects/image4.png",
    name: "Photosnap",
    description:
      "Photosnap is a fictional website multi-page for a platform for photographers and visual storytellers that aims to share photographs, tell stories and connect with others in their profession.",
    tech: ["React.js", "Typescript", "Chakra UI", "Git"],
    demo: "https://photosnap-pink.vercel.app/",
    code: "https://github.com/Otavin23/Photosnap",
  },
  {
    image: "../assets/projects/image5.png",
    name: "Empire Burguer",
    description:
      "O Empire Burger é a sua fonte definitiva para descobrir os hambúrgueres mais incríveis em sua cidade. Aqui, você pode verificar os preços dos hambúrgueres mais saborosos e encontrar facilmente os locais onde adquiri-los. Explore nosso site para satisfazer seus desejos culinários e encontrar os hambúrgueres perfeitos para o seu paladar.",
    tech: ["Html", "Css", "Javascript", "Git"],

    demo: "https://br-challenges-empire-burger.vercel.app/",
    code: "https://github.com/Otavin23/br-challenges-empire-burger",
  },
  {
    image: "../assets/projects/image6.png",
    name: "Logis entrega",
    description:
      "Nossa landing page oferece uma experiência completa para atender às suas necessidades de entrega super-rápida. Somos seu parceiro de confiança quando se trata de entregas expressas e relâmpago. Explore nossa página e descubra como podemos tornar sua experiência de entrega mais eficiente e conveniente.",
    tech: ["Html", "Css", "Javascript", "Git"],
    demo: "https://logist-fast-delivery-landing-page.vercel.app/",
    code: "https://github.com/Otavin23/Logist-fast-delivery-landing-Page",
  },
  {
    image: "../assets/projects/image7.png",
    name: "Shark finances",
    description:
      "Landing Page para Gestão de Negócios e Pagamentos - Simplifique Seus Processos Empresariais!",
    tech: ["Html", "Css", "Javascript", "Git"],
    demo: "https://gerenciamento-financeiro-landing-page.vercel.app/",
    code: "https://github.com/Otavin23/Gerenciamento-financeiro-landing-Page",
  },
];

export { projectStructure };
