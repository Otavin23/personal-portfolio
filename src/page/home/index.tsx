import {
  Flex,
  Container,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  Button,
  Image,
  Box,
} from "@chakra-ui/react";
import { Header } from "../../components/header";
import { projectStructure } from "../../utils/projectStructure";

const Home = () => {
  return (
    <>
      <Header />

      <Flex as="main" justify="center" h="100vh" id="section1">
        <Container
          w="95%"
          maxW="1200px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          p="0"
          mt="72px"
        >
          <Heading
            as="h1"
            fontWeight="800"
            fontSize="60px"
            maxW="950px"
            textAlign="center"
            bgGradient="linear(to-l, #727272, #ffffff)"
            bgClip="text"
            pos="relative"
            _after={{
              content: `"a"`,
              w: "500px",
              h: "2px",
              bgGradient: "linear(to-r, #ffe100, #070707)",
              left: "350px",
              pos: "absolute",
            }}
          >
            Olá, sou Otavio Vieira, um Desenvolvedor Web.
          </Heading>

          <Text
            mt="1rem"
            fontWeight="400"
            maxW="800px"
            fontSize="20px"
            color="#6f706f"
            textAlign="center"
          >
            Sou um freelancer altamente motivado, dedicado a explorar as
            tecnologias mais recentes. Minha especialização está na criação de
            landing pages e aplicações web de última geração, e sou apaixonado
            por utilizar o framework React para tornar esses projetos incríveis.
          </Text>

          <UnorderedList
            display="flex"
            m="2rem 0 0 0"
            listStyleType="none"
            flexWrap="wrap"
          >
            <ListItem
              bg="linear-gradient(45deg, #ffe100, #ffef62)"
              boxShadow="1px 1px 10px #ffea62"
              mr="1rem"
              color="#020202"
              px="1rem"
              py="0.5rem"
              fontWeight="700"
              fontSize="18px"
              borderRadius="0.5rem"
              display="flex"
              alignItems="center"
            >
              React.js
            </ListItem>
            <ListItem
              bg="linear-gradient(45deg, #ffe100, #ffef62)"
              boxShadow="1px 1px 10px #ffea62"
              mr="1rem"
              color="#020202"
              px="1rem"
              py="0.5rem"
              fontWeight="700"
              fontSize="18px"
              borderRadius="0.5rem"
              display="flex"
              alignItems="center"
            >
              Typescript
            </ListItem>
            <ListItem
              bg="linear-gradient(45deg, #ffe100, #ffef62)"
              boxShadow="1px 1px 10px #ffea62"
              mr="1rem"
              color="#020202"
              px="1rem"
              py="0.5rem"
              fontWeight="700"
              fontSize="18px"
              borderRadius="0.5rem"
              display="flex"
              alignItems="center"
            >
              Next.js
            </ListItem>
            <ListItem
              bg="linear-gradient(45deg, #ffe100, #ffef62)"
              boxShadow="1px 1px 10px #ffea62"
              mr="1rem"
              color="#020202"
              px="1rem"
              py="0.5rem"
              fontWeight="700"
              fontSize="18px"
              borderRadius="0.5rem"
              display="flex"
              alignItems="center"
            >
              Chakra UI
            </ListItem>
            <ListItem
              bg="linear-gradient(45deg, #ffe100, #ffef62)"
              boxShadow="1px 1px 10px #ffea62"
              color="#020202"
              px="1rem"
              py="0.5rem"
              fontWeight="700"
              fontSize="18px"
              borderRadius="0.5rem"
              display="flex"
              alignItems="center"
            >
              Git
            </ListItem>
          </UnorderedList>

          <Flex as="div" alignItems="center" mt="5rem">
            <Button
              bg="transparent"
              border="1px solid transparent"
              color="#fff"
              py="1.7rem"
              borderRadius="0.5rem"
              fontSize="17px"
              display="flex"
              alignItems="center"
            >
              Entre em contato
              <Image
                src="../assets/arrow.png"
                alt=""
                w="30px"
                h="30px"
                ml="1rem"
              />
            </Button>
            <UnorderedList
              listStyleType="none"
              display="flex"
              alignItems="center"
            >
              <ListItem cursor="pointer" mr="1rem">
                <Image
                  src="../assets/contact/github.png"
                  alt=""
                  w="30px"
                  h="30px"
                  opacity="0.5"
                />
              </ListItem>
              <ListItem cursor="pointer" mr="1rem">
                <Image
                  src="../assets/contact/linkedin.png"
                  alt=""
                  w="30px"
                  h="30px"
                  opacity="0.5"
                />
              </ListItem>
              <ListItem cursor="pointer">
                <Image
                  src="../assets/contact/whatssap.png"
                  alt=""
                  w="30px"
                  h="30px"
                  opacity="0.5"
                />
              </ListItem>
            </UnorderedList>
          </Flex>
        </Container>
      </Flex>

      <Flex as="section" justify="center" id="projects">
        <Container
          data-aos="fade-up-right"
          data-aos-duration="1500"
          w="95%"
          maxW="1200px"
          my="5rem"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Heading
            pos="relative"
            fontWeight="500"
            _before={{
              content: `"02. "`,
              fontSize: "23px",
              opacity: "0.6",
              color: "#0e0d0d",
            }}
            _after={{
              content: `"."`,
              color: "#FFE100",
            }}
          >
            Projetos
          </Heading>

          <UnorderedList mt="4rem">
            {projectStructure.map((project, index) => (
              <ListItem
                key={index}
                data-aos="fade-right"
                data-aos-duration="1500"
                display="flex"
                borderBottom="1px solid #3b3b3b"
                py="2rem"
              >
                <Image
                  src={project.image}
                  alt=""
                  w="420px"
                  h="304px"
                  objectFit="cover"
                  borderRadius="0.5rem"
                />
                <Flex
                  as="div"
                  direction="column"
                  justifyContent="center"
                  ml="2rem"
                >
                  <Heading as="h3" fontSize="25px">
                    {project.name}
                  </Heading>
                  <Text
                    my="1rem"
                    fontWeight="500"
                    color="#6f706f"
                    fontSize="17px"
                  >
                    {project.description}
                  </Text>

                  <Box as="div" mt="1rem">
                    <Text
                      as="span"
                      px="1rem"
                      py="0.5rem"
                      borderRadius="0.5rem"
                      mr="1rem"
                      bg="#1f1f1f"
                      color="#FFE100"
                      fontWeight="600"
                      fontSize="14px"
                      opacity="0.7"
                    >
                      React.js
                    </Text>
                    <Text
                      as="span"
                      px="1rem"
                      py="0.6rem"
                      borderRadius="0.5rem"
                      mr="1rem"
                      bg="#1f1f1f"
                      color="#FFE100"
                      fontWeight="600"
                      fontSize="14px"
                      opacity="0.7"
                    >
                      Typescript
                    </Text>
                    <Text
                      as="span"
                      px="1rem"
                      py="0.6rem"
                      borderRadius="0.5rem"
                      mr="1rem"
                      bg="#1f1f1f"
                      color="#FFE100"
                      fontWeight="600"
                      fontSize="14px"
                      opacity="0.7"
                    >
                      Chakra UI
                    </Text>
                    <Text
                      as="span"
                      px="1rem"
                      py="0.6rem"
                      borderRadius="0.5rem"
                      mr="1rem"
                      bg="#1f1f1f"
                      color="#FFE100"
                      fontWeight="600"
                      fontSize="14px"
                      opacity="0.7"
                    >
                      Git
                    </Text>
                  </Box>

                  <Button
                    mt="2rem"
                    w="100px"
                    display="flex"
                    alignItems="center"
                    bg="transparent"
                  >
                    Demo
                    <Image
                      src="../assets/projects/arrowGray.png"
                      alt=""
                      w="20px"
                      h="20px"
                      ml="0.5rem"
                    />
                  </Button>

                  <Button
                    w="140px"
                    mt="0.5rem"
                    display="flex"
                    alignItems="center"
                    bg="transparent"
                  >
                    Ver codigo
                    <Image
                      src="../assets/projects/arrowGray.png"
                      alt=""
                      w="20px"
                      h="20px"
                      ml="0.5rem"
                    />
                  </Button>
                </Flex>
              </ListItem>
            ))}
          </UnorderedList>

          <Button mt="5rem" px="3rem" py="1.5rem">
            Ver mais projetos
          </Button>
        </Container>
      </Flex>

      <Flex as="section" justify="center" id="skills">
        <Container
          data-aos="fade-up-right"
          data-aos-duration="1500"
          w="95%"
          maxW="1200px"
          my="5rem"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Heading
            pos="relative"
            fontWeight="500"
            _before={{
              content: `"01. "`,
              fontSize: "23px",
              opacity: "0.6",
              color: "#0e0d0d",
            }}
            _after={{
              content: `"."`,
              color: "#FFE100",
            }}
          >
            Tecnologias
          </Heading>

          <Flex as="div" mt="4rem">
            <Flex
              as="div"
              direction="column"
              align="center"
              w="350px"
              bg="#050505"
              mr="2rem"
              py="3rem"
              px="2rem"
              borderRadius="0.5rem"
              border="1px solid #3737375e"
            >
              <Heading as="h3" color="#ffffff" fontWeight="500" fontSize="19px">
                Frontend
              </Heading>

              <Flex as="div" w="100%" justify="space-between">
                <UnorderedList
                  m="1rem 0 0 0"
                  display="flex"
                  flexDirection="column"
                >
                  <ListItem display="flex" alignItems="start" mt="2rem">
                    <Image
                      src="../assets/skills/html.png"
                      alt=""
                      w="25px"
                      h="25px"
                      mr="0.5rem"
                    />
                    <Text
                      as="span"
                      fontWeight="600"
                      fontSize="16px"
                      color="#939A9D"
                      pl="0.2rem"
                      maxW="100px"
                    >
                      HTML5
                    </Text>
                  </ListItem>

                  <ListItem display="flex" alignItems="start" mt="2rem">
                    <Image
                      src="../assets/skills/css.png"
                      alt=""
                      w="25px"
                      h="25px"
                      mr="0.5rem"
                    />
                    <Text
                      as="span"
                      fontWeight="600"
                      fontSize="16px"
                      color="#939A9D"
                      pl="0.2rem"
                      maxW="100px"
                    >
                      CSS
                    </Text>
                  </ListItem>

                  <ListItem display="flex" alignItems="start" mt="2rem">
                    <Image
                      src="../assets/skills/javascript.webp"
                      alt=""
                      w="25px"
                      h="25px"
                      mr="0.5rem"
                    />
                    <Text
                      as="span"
                      fontWeight="600"
                      fontSize="16px"
                      color="#939A9D"
                      pl="0.2rem"
                      maxW="100px"
                    >
                      Javascript
                    </Text>
                  </ListItem>

                  <ListItem display="flex" alignItems="start" mt="2rem">
                    <Image
                      src="../assets/skills/jest.png"
                      alt=""
                      w="25px"
                      h="25px"
                      mr="0.5rem"
                    />
                    <Text
                      as="span"
                      fontWeight="600"
                      fontSize="16px"
                      color="#939A9D"
                      pl="0.2rem"
                      maxW="100px"
                    >
                      Jest
                    </Text>
                  </ListItem>

                  <ListItem display="flex" alignItems="start" mt="2rem">
                    <Image
                      src="../assets/skills/chakra.png"
                      alt=""
                      w="25px"
                      h="25px"
                      mr="0.5rem"
                    />
                    <Text
                      as="span"
                      fontWeight="600"
                      fontSize="16px"
                      color="#939A9D"
                      pl="0.2rem"
                      maxW="100px"
                    >
                      Chakra UI
                    </Text>
                  </ListItem>
                </UnorderedList>

                <UnorderedList
                  m="1rem 0 0 0"
                  display="flex"
                  flexDirection="column"
                >
                  <ListItem display="flex" alignItems="start" mt="2rem">
                    <Image
                      src="../assets/skills/react.png"
                      alt=""
                      w="25px"
                      h="25px"
                      mr="0.5rem"
                    />
                    <Text
                      as="span"
                      fontWeight="600"
                      fontSize="16px"
                      color="#939A9D"
                      pl="0.2rem"
                      maxW="100px"
                    >
                      React
                    </Text>
                  </ListItem>

                  <ListItem display="flex" alignItems="start" mt="2rem">
                    <Image
                      src="../assets/skills/typescript.png"
                      alt=""
                      w="25px"
                      h="25px"
                      mr="0.5rem"
                    />
                    <Text
                      as="span"
                      fontWeight="600"
                      fontSize="16px"
                      color="#939A9D"
                      pl="0.2rem"
                      maxW="100px"
                    >
                      Typescript
                    </Text>
                  </ListItem>

                  <ListItem display="flex" alignItems="start" mt="2rem">
                    <Image
                      src="../assets/skills/figma.png"
                      alt=""
                      w="25px"
                      h="25px"
                      mr="0.5rem"
                    />
                    <Text
                      as="span"
                      fontWeight="600"
                      fontSize="16px"
                      color="#939A9D"
                      pl="0.2rem"
                      maxW="100px"
                    >
                      Figma
                    </Text>
                  </ListItem>

                  <ListItem display="flex" alignItems="start" mt="2rem">
                    <Image
                      src="../assets/skills/next.png"
                      alt=""
                      w="25px"
                      h="25px"
                      mr="0.5rem"
                    />
                    <Text
                      as="span"
                      fontWeight="600"
                      fontSize="16px"
                      color="#939A9D"
                      pl="0.2rem"
                      maxW="100px"
                    >
                      Next.js
                    </Text>
                  </ListItem>
                  <ListItem display="flex" alignItems="start" mt="2rem">
                    <Image
                      src="../assets/skills/sass.png"
                      alt=""
                      w="25px"
                      h="25px"
                      mr="0.5rem"
                    />
                    <Text
                      as="span"
                      fontWeight="600"
                      fontSize="16px"
                      color="#939A9D"
                      pl="0.2rem"
                      maxW="100px"
                    >
                      Sass
                    </Text>
                  </ListItem>
                </UnorderedList>
              </Flex>
            </Flex>

            <Flex
              as="div"
              direction="column"
              align="center"
              w="350px"
              bg="#050505"
              py="3rem"
              px="2rem"
              borderRadius="0.5rem"
              border="1px solid #3737375e"
            >
              <Heading as="h3" color="#ffffff" fontWeight="500" fontSize="19px">
                Backend
              </Heading>

              <Flex as="div" w="100%" justify="space-between">
                <UnorderedList
                  m="1rem 0 0 0"
                  display="flex"
                  flexDirection="column"
                >
                  <ListItem display="flex" alignItems="start" mt="2rem">
                    <Image
                      src="../assets/skills/nodejs.png"
                      alt=""
                      w="25px"
                      h="25px"
                      mr="0.5rem"
                    />
                    <Text
                      as="span"
                      fontWeight="600"
                      fontSize="16px"
                      color="#939A9D"
                      pl="0.2rem"
                      maxW="100px"
                    >
                      NodeJS
                    </Text>
                  </ListItem>

                  <ListItem display="flex" alignItems="start" mt="2rem">
                    <Image
                      src="../assets/skills/javascript.webp"
                      alt=""
                      w="25px"
                      h="25px"
                      mr="0.5rem"
                    />
                    <Text
                      as="span"
                      fontWeight="600"
                      fontSize="16px"
                      color="#939A9D"
                      pl="0.2rem"
                      maxW="100px"
                    >
                      Javascript
                    </Text>
                  </ListItem>

                  <ListItem display="flex" alignItems="start" mt="2rem">
                    <Image
                      src="../assets/skills/typescript.png"
                      alt=""
                      w="25px"
                      h="25px"
                      mr="0.5rem"
                    />
                    <Text
                      as="span"
                      fontWeight="600"
                      fontSize="16px"
                      color="#939A9D"
                      pl="0.2rem"
                      maxW="100px"
                    >
                      Typescript
                    </Text>
                  </ListItem>

                  <ListItem display="flex" alignItems="start" mt="2rem">
                    <Image
                      src="../assets/skills/jest.png"
                      alt=""
                      w="25px"
                      h="25px"
                      mr="0.5rem"
                    />
                    <Text
                      as="span"
                      fontWeight="600"
                      fontSize="16px"
                      color="#939A9D"
                      pl="0.2rem"
                      maxW="100px"
                    >
                      Jest
                    </Text>
                  </ListItem>
                </UnorderedList>

                <UnorderedList
                  m="1rem 0 0 0"
                  display="flex"
                  flexDirection="column"
                >
                  <ListItem display="flex" alignItems="start" mt="2rem">
                    <Image
                      src="../assets/skills/typeorm.png"
                      alt=""
                      w="25px"
                      h="25px"
                      mr="0.5rem"
                    />
                    <Text
                      as="span"
                      fontWeight="600"
                      fontSize="16px"
                      color="#939A9D"
                      pl="0.2rem"
                      maxW="100px"
                    >
                      Typeorm
                    </Text>
                  </ListItem>

                  <ListItem display="flex" alignItems="start" mt="2rem">
                    <Image
                      src="../assets/skills/express.png"
                      alt=""
                      w="25px"
                      h="25px"
                      mr="0.5rem"
                    />
                    <Text
                      as="span"
                      fontWeight="600"
                      fontSize="16px"
                      color="#939A9D"
                      pl="0.2rem"
                      maxW="100px"
                    >
                      Express
                    </Text>
                  </ListItem>

                  <ListItem display="flex" alignItems="start" mt="2rem">
                    <Image
                      src="../assets/skills/postgres.png"
                      alt=""
                      w="25px"
                      h="25px"
                      mr="0.5rem"
                    />
                    <Text
                      as="span"
                      fontWeight="600"
                      fontSize="16px"
                      color="#939A9D"
                      pl="0.2rem"
                      maxW="100px"
                    >
                      postgres
                    </Text>
                  </ListItem>
                </UnorderedList>
              </Flex>
            </Flex>
          </Flex>
        </Container>
      </Flex>

      <Flex
        as="footer"
        justify="center"
        align="center"
        mt="6rem"
        py="1rem"
        bg="#000000"
      >
        <Text
          as="span"
          display="flex"
          alignItems="center"
          fontWeight="600"
          color="#ffffff"
        >
          Feito com
          <svg
            stroke="2px"
            fill="red"
            stroke-width="0"
            viewBox="0 0 512 512"
            height="20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              marginLeft: "0.5rem",
              marginRight: "0.5rem",
            }}
          >
            <path d="M256 448l-30.164-27.211C118.718 322.442 48 258.61 48 179.095 48 114.221 97.918 64 162.4 64c36.399 0 70.717 16.742 93.6 43.947C278.882 80.742 313.199 64 349.6 64 414.082 64 464 114.221 464 179.095c0 79.516-70.719 143.348-177.836 241.694L256 448z"></path>
          </svg>
          por Otavio Vieira
        </Text>
      </Flex>
    </>
  );
};
export { Home };
