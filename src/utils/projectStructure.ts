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
      "👩‍🔧 DevJobs: A website dedicated to finding a wide variety of job opportunities for programmers.",
    tech: ["React.js", "Typescript", "Chakra UI", "Git"],
    demo: "https://devjobs-tawny.vercel.app/",
    code: "https://github.com/Otavin23/devjobs",
  },
  {
    image: "../assets/projects/image3.png",
    name: "RestCountries",
    description:
      "🌏RestCountries is a project dedicated to providing comprehensive information about countries, covering essential data such as the name of the country, its population, capital and a wide range of other relevant details",
    tech: ["React.js", "Typescript", "Chakra UI", "Git"],
    demo: "https://rest-countries-six-beta.vercel.app/",
    code: "https://github.com/Otavin23/REST-Countries",
  },
  {
    image: "../assets/projects/image4.png",
    name: "Photosnap",
    description:
      "📸 Photosnap is a fictional website multi-page for a platform for photographers and visual storytellers that aims to share photographs, tell stories and connect with others in their profession.",
    tech: ["React.js", "Typescript", "Chakra UI", "Git"],
    demo: "https://photosnap-pink.vercel.app/",
    code: "https://github.com/Otavin23/Photosnap",
  },
  {
    image: "../assets/projects/image5.png",
    name: "filmes e series",
    description:
      "Create a new iteration based on the Vizer concept, a project that uses TheMovieDB API to collect and present detailed information about films and actors.",
    tech: ["React.js", "Typescript", "Chakra UI", "Git"],

    demo: "https://clone-vizer.vercel.app/",
    code: "https://github.com/Otavin23/clone-vizer",
  },
  {
    image: "../assets/projects/image6.png",
    name: "filmes e series",
    description:
      "Create a new iteration based on the Vizer concept, a project that uses TheMovieDB API to collect and present detailed information about films and actors.",

    tech: ["React.js", "Typescript", "Chakra UI", "Git"],
    demo: "https://clone-vizer.vercel.app/",
    code: "https://github.com/Otavin23/clone-vizer",
  },
  {
    image: "../assets/projects/image7.png",
    name: "filmes e series",
    description:
      "Create a new iteration based on the Vizer concept, a project that uses TheMovieDB API to collect and present detailed information about films and actors.",
    tech: ["React.js", "Typescript", "Chakra UI", "Git"],
    demo: "https://clone-vizer.vercel.app/",
    code: "https://github.com/Otavin23/clone-vizer",
  },
];

export { projectStructure };
