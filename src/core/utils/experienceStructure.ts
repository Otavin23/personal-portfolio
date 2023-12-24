interface IExperienceFrontEnd {
  image: string;
  name: string;
  description: string;
  altImage: string;
}

const ExperienceFrontEnd: IExperienceFrontEnd[] = [
  {
    image: "/assets/skills/html.png",
    name: "HTML",
    description:
      "HTML é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores",
    altImage: "symbol of an orange trapeze with a white s in the middle",
  },
  {
    image: "/assets/skills/css.png",
    name: "CSS",
    description:
      "Cascading Style Sheets é um mecanismo para adicionar estilos a uma página web",
    altImage: "symbol of a blue trapeze with a white opposite s in the middle",
  },
  {
    image: "/assets/skills/sass.png",
    name: "SASS",
    description:
      "Sass é uma linguagem de folhas de estilo concebida inicialmente por Hampton Catlin e desenvolvida por Natalie Weizenbaum. ",
    altImage: "red color sass name",
  },
  {
    image: "/assets/skills/javascript.webp",
    name: "JAVASCRIPT",
    description:
      "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma.",
    altImage:
      "yellow square with a JS in the right corner below the black color",
  },
  {
    image: "/assets/skills/react.png",
    name: "REACT.JS",
    description:
      "O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.",
    altImage:
      "spiral in various shapes in blue lines forming various symbols of infinity",
  },
  {
    image: "/assets/skills/next.png",
    name: "NEXT.JS",
    description:
      "Next.js é uma estrutura da web de desenvolvimento front-end React de código aberto criada por Vercel que permite funcionalidades como renderização do lado do servidor",
    altImage: "white circle with N in the middle of the black color",
  },
  {
    image: "/assets/skills/typescript.png",
    name: "TYPESCRIPT",
    description:
      "TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. ",
    altImage:
      "square with rounded corners in blue color with ts written in the middle in white color",
  },
  {
    image: "/assets/skills/chakra.png",
    name: "CHAKRA-UI",
    description:
      "O Chakra UI ajuda muito na criação de interfaces para React e pode acelerar o processo. Além disso, como já citamos, você tem a opção de personalizar praticamente qualquer coisa do tema Chakra padrão para dar à sua aplicação um toque pessoal.",
    altImage: "round shape, green oval with a white ray in the middle",
  },
  {
    image: "/assets/skills/tailwind.png",
    name: "TAILWIND",
    description:
      "Traduzido do inglês-Tailwind CSS é uma estrutura CSS de código aberto. A principal característica desta biblioteca é que, ao contrário de outros frameworks CSS como Bootstrap, ela não fornece uma série de classes predefinidas para elementos como botões ou tabelas. ",
    altImage: "two waves of blue color",
  },
  {
    image: "/assets/skills/cypress.png",
    name: "CYPRESS",
    description:
      "Traduzido do inglês-Cypress é uma ferramenta de automação de teste frontend para testes de regressão de aplicações web.",
    altImage: "circle with black border written cy in the middle of black",
  },
  {
    image: "/assets/skills/jest.png",
    name: "JEST",
    description:
      "O Jest foi inicialmente criado para testar o framework React, também criado pelo Facebook.",
    altImage: "Red clown hat upside down",
  },
  {
    image: "/assets/skills/figma.png",
    name: "FIGMA",
    description:
      "Figma é um editor gráfico de vetor e prototipagem de projetos de design baseado principalmente no navegador web.",
    altImage:
      "several circles forming a figma shape with red, gray and white color",
  },
];

const ExperienceBackEnd: IExperienceFrontEnd[] = [
  {
    image: "/assets/skills/nodejs.png",
    name: "NODE.JS",
    description:
      "Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript.",
    altImage:
      "pentagon with green border and transparent background with a green js in the center",
  },
  {
    image: "/assets/skills/javascript.webp",
    name: "JAVASCRIPT",
    description:
      "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma.",
    altImage:
      "yellow square with a JS in the right corner below the black color",
  },
  {
    image: "/assets/skills/typescript.png",
    name: "TYPESCRIPT",
    description:
      "TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. ",
    altImage:
      "square with rounded corners in blue color with ts written in the middle in white color",
  },
  {
    image: "/assets/skills/jest.png",
    name: "JEST",
    description:
      "O Jest foi inicialmente criado para testar o framework React, também criado pelo Facebook.",
    altImage: "Red clown hat upside down",
  },
  {
    image: "/assets/skills/typeorm.png",
    name: "TYPEORM",
    description:
      "O TypeORM é uma biblioteca que ajuda a trabalhar com bancos de dados relacionais em seus projetos Nodejs.",
    altImage:
      "a key on the right side and another on the left side with a book in the middle",
  },
  {
    image: "/assets/skills/express.png",
    name: "EXPRESS",
    description:
      "Express.js é um framework para Node.js que fornece recursos mínimos para construção de servidores web.",
    altImage: "gray circle with ex centered in the middle of the white color",
  },
  {
    image: "/assets/skills/postgres.png",
    name: "POSTGRES",
    description:
      "PostgreSQL é um sistema gerenciador de banco de dados objeto relacional, desenvolvido como projeto de código aberto.",
    altImage: "blue cartoon elephant",
  },
];

export { ExperienceFrontEnd, ExperienceBackEnd };
