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

      <Flex
        as="main"
        justify="center"
        id="section1"
        h={{ base: "auto", lg: "calc(100vh - 72px)", sm: "calc(100vh - 72px)" }}
      >
        <Container
          w="95%"
          maxW="1200px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          p="0"
          m={{ base: "10rem 0 0 0", lg: "10rem 0 0 0" }}
        >
          <Heading
            as="h1"
            fontWeight="800"
            fontSize="clamp(40px, 5vw, 60px)"
            maxW="950px"
            textAlign="center"
            bgGradient="linear(to-l, #727272, #ffffff)"
            bgClip="text"
            pos="relative"
            zIndex="-1"
          >
            Olá, sou Otavio Vieira, um Desenvolvedor Web.
            <Text
              as="span"
              display={{ base: "none", md: "inline-block" }}
              w={{ lg: "450px", md: "350px", sm: "250px" }}
              h="2px"
              pos="absolute"
              left={{ lg: "350px", md: "300px" }}
              bgGradient="linear(to-r, #ffe100, #070707)"
            >
              adadfdsfs
            </Text>
          </Heading>

          <Text
            mt="1rem"
            fontWeight="400"
            maxW="800px"
            fontSize="clamp(16px, 2vw, 20px)"
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
            justifyContent="center"
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
              mt="2rem"
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
              mt="2rem"
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
              mt="2rem"
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
              mt="2rem"
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
              mt="2rem"
            >
              Git
            </ListItem>
          </UnorderedList>

          <Flex
            as="div"
            direction={{ base: "column", sm: "row" }}
            alignItems="center"
            mt="4rem"
          >
            <Button
              bg="transparent"
              border="1px solid transparent"
              color="#fff"
              py="1.7rem"
              borderRadius="0.5rem"
              fontSize="17px"
              display="flex"
              alignItems="center"
              mt="1rem"
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
              mt="1rem"
            >
              <ListItem cursor="pointer" mr="1rem">
                <Box as="a" href="https://github.com/Otavin23" target="_blank">
                  <Image
                    src="../assets/contact/github.png"
                    alt=""
                    w="30px"
                    h="30px"
                    opacity="0.5"
                  />
                </Box>
              </ListItem>

              <ListItem cursor="pointer" mr="1rem">
                <Box
                  as="a"
                  href="https://www.linkedin.com/in/otavio-vieira-95aa97294/"
                  target="_blank"
                >
                  <Image
                    src="../assets/contact/linkedin.png"
                    alt=""
                    w="30px"
                    h="30px"
                    opacity="0.5"
                  />
                </Box>
              </ListItem>

              <ListItem cursor="pointer">
                <Box as="a" href="https://wa.me/553597335548" target="_blank">
                  <Image
                    src="../assets/contact/whatssap.png"
                    alt=""
                    w="30px"
                    h="30px"
                    opacity="0.5"
                  />
                </Box>
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
          m="5rem 0"
          p="0"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Heading
            pos="relative"
            fontWeight="500"
            color="#fff"
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
                flexDirection={{ base: "column", lg: "row" }}
              >
                <Image
                  src={project.image}
                  alt=""
                  w={{ lg: "420px", md: "100%" }}
                  h="304px"
                  objectFit="cover"
                  borderRadius="0.5rem"
                />
                <Flex
                  as="div"
                  direction="column"
                  justifyContent="center"
                  ml={{ base: "0", lg: "2rem" }}
                  mt={{ base: "2rem", lg: "0" }}
                >
                  <Heading as="h3" fontSize="25px" color="#fff">
                    {project.name}
                  </Heading>
                  <Text
                    mt="1rem"
                    fontWeight="500"
                    color="#6f706f"
                    fontSize="17px"
                  >
                    {project.description}
                  </Text>

                  <Flex wrap="wrap" mt="1rem">
                    {project.tech.map((tech, index) => (
                      <Text
                        key={index}
                        as="span"
                        px="1rem"
                        py="0.5rem"
                        borderRadius="0.5rem"
                        mr="1rem"
                        mt="1rem"
                        bg="#1f1f1f"
                        color="#FFE100"
                        fontWeight="600"
                        fontSize="14px"
                        opacity="0.7"
                      >
                        {tech}
                      </Text>
                    ))}
                  </Flex>

                  <Flex as="a" href={project.demo} target="_blank">
                    <Button
                      mt="2rem"
                      w={{ lg: "100px", sm: "100%" }}
                      bg="transparent"
                      color="#fff"
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
                  </Flex>

                  <Flex as="a" href={project.code} target="_blank">
                    <Button
                      mt="0.5rem"
                      display="flex"
                      alignItems="center"
                      bg="transparent"
                      w={{ lg: "135px", sm: "100%" }}
                      color="#fff"
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
                </Flex>
              </ListItem>
            ))}
          </UnorderedList>

          <Flex as="a" href="https://github.com/Otavin23" target="_blank">
            <Button mt="5rem" px="3rem" py="1.5rem" bg="#272727">
              Ver mais projetos
            </Button>
          </Flex>
        </Container>
      </Flex>

      <Flex as="section" justify="center" id="skills">
        <Container
          data-aos="fade-up-right"
          data-aos-duration="1500"
          w="95%"
          maxW="1200px"
          m="5rem 0"
          p="0"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Heading
            pos="relative"
            fontWeight="500"
            color="#fff"
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

          <Flex
            direction={{ base: "column", lg: "row" }}
            w={{ base: "100%", sm: "auto" }}
          >
            <Flex
              as="div"
              direction="column"
              align="center"
              w={{ base: "100%", sm: "350px" }}
              bg="#050505"
              mr={{ base: "0", lg: "2rem" }}
              py="3rem"
              px="2rem"
              borderRadius="0.5rem"
              border="1px solid #3737375e"
              mt="4rem"
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
              bg="#050505"
              py="3rem"
              w={{ base: "100%", sm: "350px" }}
              mr={{ base: "0", lg: "2rem" }}
              px="2rem"
              borderRadius="0.5rem"
              border="1px solid #3737375e"
              mt="4rem"
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
