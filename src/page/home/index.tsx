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
  useRadioGroup,
  HStack,
} from "@chakra-ui/react";
import { Header } from "../../components/header";
import { RadioCard } from "../../components/radio";

const Home = () => {
  const options = ["Todos", "LandingPage", "Api"];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "framework",
    defaultValue: "Todos",
  });

  const group = getRootProps();

  return (
    <>
      <Header />

      <Flex as="main" justify="center">
        <Container w="95%" maxW="1200px" my="10rem">
          <Heading
            as="h1"
            color="#181818"
            fontWeight="900"
            fontSize="75px"
            maxW="950px"
          >
            Olá, sou Otavio Vieira, um Desenvolvedor Web.
          </Heading>

          <Text
            mt="1rem"
            fontWeight="500"
            maxW="800px"
            fontSize="20px"
            color="#6f706f"
          >
            Sou um freelancer em busca de oportunidades e estou focado nas mais
            recentes tecnologias. Desenvolvo landing pages e aplicações web
            utilizando o framework React
          </Text>

          <UnorderedList
            display="flex"
            m="1.5rem 0 0 0"
            listStyleType="none"
            flexWrap="wrap"
            maxW="350px"
          >
            <ListItem
              bg="#000"
              mr="1rem"
              color="#fff"
              px="1rem"
              py="0.5rem"
              fontWeight="600"
              fontSize="18px"
              borderRadius="0.5rem"
              boxShadow="10px 5px #2e2d2d"
            >
              React.js
            </ListItem>
            <ListItem
              bg="#000"
              mr="1rem"
              color="#fff"
              px="1rem"
              py="0.5rem"
              fontWeight="600"
              fontSize="18px"
              borderRadius="0.5rem"
              boxShadow="10px 5px #2e2d2d"
            >
              Typescript
            </ListItem>
            <ListItem
              bg="#000"
              mr="1rem"
              color="#fff"
              px="1rem"
              py="0.5rem"
              fontWeight="600"
              fontSize="18px"
              borderRadius="0.5rem"
              boxShadow="10px 5px #2e2d2d"
            >
              Next.js
            </ListItem>
            <ListItem
              bg="#000"
              mr="1rem"
              color="#fff"
              px="1rem"
              py="0.5rem"
              fontWeight="600"
              fontSize="18px"
              borderRadius="0.5rem"
              mt="0.5rem"
              boxShadow="10px 5px #2e2d2d"
            >
              Chakra UI
            </ListItem>
            <ListItem
              bg="#000"
              mr="1rem"
              color="#fff"
              px="1rem"
              py="0.5rem"
              fontWeight="600"
              fontSize="18px"
              borderRadius="0.5rem"
              mt="0.5rem"
              boxShadow="10px 5px #2e2d2d"
            >
              Git
            </ListItem>
          </UnorderedList>

          <Flex as="div" alignItems="center" mt="5rem">
            <Button
              bg="#181818"
              color="#fff"
              py="1.7rem"
              borderRadius="0.5rem"
              fontSize="20px"
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
              <ListItem cursor="pointer" mr="1rem">
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

          <Flex
            as="div"
            direction="column"
            pos="fixed"
            top="300px"
            right="40px"
          >
            <UnorderedList>
              <ListItem
                display="Flex"
                alignItems="center"
                justifyContent="center"
                w="60px"
                h="60px"
                borderRadius="50%"
                bg="#000"
                boxShadow="0px 0px 25px #000;"
                cursor="pointer"
              >
                <Image
                  src="../assets/githubOutline.png"
                  alt=""
                  w="35px"
                  h="35px"
                />
              </ListItem>
              <ListItem
                display="Flex"
                alignItems="center"
                justifyContent="center"
                w="60px"
                h="60px"
                borderRadius="50%"
                bg="#000"
                mt="0.5rem"
                cursor="pointer"
                boxShadow="0px 0px 25px #000;"
              >
                <Image
                  src="../assets/linkedinOutline.png"
                  alt=""
                  w="35px"
                  h="35px"
                />
              </ListItem>
              <ListItem
                display="Flex"
                alignItems="center"
                justifyContent="center"
                w="60px"
                h="60px"
                borderRadius="50%"
                bg="#000"
                mt="0.5rem"
                cursor="pointer"
                boxShadow="0px 0px 25px #000;"
              >
                <Image
                  src="../assets/whatssapOutline.png"
                  alt=""
                  w="35px"
                  h="35px"
                />
              </ListItem>
            </UnorderedList>
          </Flex>
        </Container>
      </Flex>

      <Flex as="section" justify="center" bg="#FAFAFA">
        <Container
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
          >
            Tecnologias
          </Heading>

          <Flex as="div" mt="4rem">
            <Flex
              as="div"
              direction="column"
              align="center"
              w="350px"
              bg="#fff"
              mr="2rem"
              py="3rem"
              px="2rem"
              border="1px solid #F0F0F0"
              borderRadius="2.5rem"
            >
              <Heading as="h3" color="#939A9D" fontWeight="500" fontSize="19px">
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
                      src="../assets/skills/nextjs.svg"
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
              bg="#fff"
              mr="2rem"
              py="3rem"
              px="2rem"
              border="1px solid #F0F0F0"
              borderRadius="2.5rem"
            >
              <Heading as="h3" color="#939A9D" fontWeight="500" fontSize="19px">
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

      <Flex as="section" justify="center">
        <Container
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
          >
            Projetos
          </Heading>

          <Flex as="div" mt="4rem" direction="column" alignItems="center">
            <HStack {...group}>
              {options.map((value) => {
                const radio = getRadioProps({ value });
                return (
                  <RadioCard key={value} {...radio}>
                    {value}
                  </RadioCard>
                );
              })}
            </HStack>

            <UnorderedList mt="4rem">
              <ListItem
                display="flex"
                borderBottom="1px solid #bdbdbd"
                py="2rem"
              >
                <Image
                  src="../assets/project/image1.png"
                  alt=""
                  w="420px"
                  h="304px"
                  objectFit="cover"
                  borderRadius="1rem"
                />
                <Flex
                  as="div"
                  direction="column"
                  justifyContent="center"
                  ml="2rem"
                >
                  <Heading as="h3" fontSize="25px">
                    Vizer filmes e series
                  </Heading>
                  <Text
                    my="1rem"
                    fontWeight="500"
                    color="#6f706f"
                    fontSize="17px"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquam dolor ratione qui consectetur minima inventore
                    maiores, ea quas, vitae officiis voluptas fugiat quis
                    consequatur repellat culpa quod ducimus ipsa a!
                  </Text>

                  <Box as="div" mt="1rem">
                    <Text
                      as="span"
                      px="1rem"
                      py="0.6rem"
                      borderRadius="0.5rem"
                      mr="1rem"
                      bg="#000"
                      color="#fff"
                      fontWeight="600"
                    >
                      React.js
                    </Text>
                    <Text
                      as="span"
                      px="1rem"
                      py="0.6rem"
                      borderRadius="0.5rem"
                      mr="1rem"
                      bg="#000"
                      color="#fff"
                      fontWeight="600"
                    >
                      Typescript
                    </Text>
                    <Text
                      as="span"
                      px="1rem"
                      py="0.6rem"
                      borderRadius="0.5rem"
                      mr="1rem"
                      bg="#000"
                      color="#fff"
                      fontWeight="600"
                    >
                      Chakra UI
                    </Text>
                    <Text
                      as="span"
                      px="1rem"
                      py="0.6rem"
                      borderRadius="0.5rem"
                      mr="1rem"
                      bg="#000"
                      color="#fff"
                      fontWeight="600"
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
                      src="../assets/project/arrowGray.png"
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
                      src="../assets/project/arrowGray.png"
                      alt=""
                      w="20px"
                      h="20px"
                      ml="0.5rem"
                    />
                  </Button>
                </Flex>
              </ListItem>

              <ListItem
                display="flex"
                borderBottom="1px solid #bdbdbd"
                py="2rem"
              >
                <Image
                  src="../assets/project/image1.png"
                  alt=""
                  w="420px"
                  h="304px"
                  objectFit="cover"
                  borderRadius="1rem"
                />
                <Flex
                  as="div"
                  direction="column"
                  justifyContent="center"
                  ml="2rem"
                >
                  <Heading as="h3" fontSize="25px">
                    Vizer filmes e series
                  </Heading>
                  <Text
                    my="1rem"
                    fontWeight="500"
                    color="#6f706f"
                    fontSize="17px"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquam dolor ratione qui consectetur minima inventore
                    maiores, ea quas, vitae officiis voluptas fugiat quis
                    consequatur repellat culpa quod ducimus ipsa a!
                  </Text>

                  <Box as="div" mt="1rem">
                    <Text
                      as="span"
                      px="1rem"
                      py="0.6rem"
                      borderRadius="0.5rem"
                      mr="1rem"
                      bg="#000"
                      color="#fff"
                      fontWeight="600"
                    >
                      React.js
                    </Text>
                    <Text
                      as="span"
                      px="1rem"
                      py="0.6rem"
                      borderRadius="0.5rem"
                      mr="1rem"
                      bg="#000"
                      color="#fff"
                      fontWeight="600"
                    >
                      Typescript
                    </Text>
                    <Text
                      as="span"
                      px="1rem"
                      py="0.6rem"
                      borderRadius="0.5rem"
                      mr="1rem"
                      bg="#000"
                      color="#fff"
                      fontWeight="600"
                    >
                      Chakra UI
                    </Text>
                    <Text
                      as="span"
                      px="1rem"
                      py="0.6rem"
                      borderRadius="0.5rem"
                      mr="1rem"
                      bg="#000"
                      color="#fff"
                      fontWeight="600"
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
                      src="../assets/project/arrowGray.png"
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
                      src="../assets/project/arrowGray.png"
                      alt=""
                      w="20px"
                      h="20px"
                      ml="0.5rem"
                    />
                  </Button>
                </Flex>
              </ListItem>

              <ListItem
                display="flex"
                borderBottom="1px solid #bdbdbd"
                py="2rem"
              >
                <Image
                  src="../assets/project/image1.png"
                  alt=""
                  w="420px"
                  h="304px"
                  objectFit="cover"
                  borderRadius="1rem"
                />
                <Flex
                  as="div"
                  direction="column"
                  justifyContent="center"
                  ml="2rem"
                >
                  <Heading as="h3" fontSize="25px">
                    Vizer filmes e series
                  </Heading>
                  <Text
                    my="1rem"
                    fontWeight="500"
                    color="#6f706f"
                    fontSize="17px"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquam dolor ratione qui consectetur minima inventore
                    maiores, ea quas, vitae officiis voluptas fugiat quis
                    consequatur repellat culpa quod ducimus ipsa a!
                  </Text>

                  <Box as="div" mt="1rem">
                    <Text
                      as="span"
                      px="1rem"
                      py="0.6rem"
                      borderRadius="0.5rem"
                      mr="1rem"
                      bg="#000"
                      color="#fff"
                      fontWeight="600"
                    >
                      React.js
                    </Text>
                    <Text
                      as="span"
                      px="1rem"
                      py="0.6rem"
                      borderRadius="0.5rem"
                      mr="1rem"
                      bg="#000"
                      color="#fff"
                      fontWeight="600"
                    >
                      Typescript
                    </Text>
                    <Text
                      as="span"
                      px="1rem"
                      py="0.6rem"
                      borderRadius="0.5rem"
                      mr="1rem"
                      bg="#000"
                      color="#fff"
                      fontWeight="600"
                    >
                      Chakra UI
                    </Text>
                    <Text
                      as="span"
                      px="1rem"
                      py="0.6rem"
                      borderRadius="0.5rem"
                      mr="1rem"
                      bg="#000"
                      color="#fff"
                      fontWeight="600"
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
                      src="../assets/project/arrowGray.png"
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
                      src="../assets/project/arrowGray.png"
                      alt=""
                      w="20px"
                      h="20px"
                      ml="0.5rem"
                    />
                  </Button>
                </Flex>
              </ListItem>

              <ListItem
                display="flex"
                borderBottom="1px solid #bdbdbd"
                py="2rem"
              >
                <Image
                  src="../assets/project/image1.png"
                  alt=""
                  w="420px"
                  h="304px"
                  objectFit="cover"
                  borderRadius="1rem"
                />
                <Flex
                  as="div"
                  direction="column"
                  justifyContent="center"
                  ml="2rem"
                >
                  <Heading as="h3" fontSize="25px">
                    Vizer filmes e series
                  </Heading>
                  <Text
                    my="1rem"
                    fontWeight="500"
                    color="#6f706f"
                    fontSize="17px"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquam dolor ratione qui consectetur minima inventore
                    maiores, ea quas, vitae officiis voluptas fugiat quis
                    consequatur repellat culpa quod ducimus ipsa a!
                  </Text>

                  <Box as="div" mt="1rem">
                    <Text
                      as="span"
                      px="1rem"
                      py="0.6rem"
                      borderRadius="0.5rem"
                      mr="1rem"
                      bg="#000"
                      color="#fff"
                      fontWeight="600"
                    >
                      React.js
                    </Text>
                    <Text
                      as="span"
                      px="1rem"
                      py="0.6rem"
                      borderRadius="0.5rem"
                      mr="1rem"
                      bg="#000"
                      color="#fff"
                      fontWeight="600"
                    >
                      Typescript
                    </Text>
                    <Text
                      as="span"
                      px="1rem"
                      py="0.6rem"
                      borderRadius="0.5rem"
                      mr="1rem"
                      bg="#000"
                      color="#fff"
                      fontWeight="600"
                    >
                      Chakra UI
                    </Text>
                    <Text
                      as="span"
                      px="1rem"
                      py="0.6rem"
                      borderRadius="0.5rem"
                      mr="1rem"
                      bg="#000"
                      color="#fff"
                      fontWeight="600"
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
                      src="../assets/project/arrowGray.png"
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
                      src="../assets/project/arrowGray.png"
                      alt=""
                      w="20px"
                      h="20px"
                      ml="0.5rem"
                    />
                  </Button>
                </Flex>
              </ListItem>

              <ListItem
                display="flex"
                borderBottom="1px solid #bdbdbd"
                py="2rem"
              >
                <Image
                  src="../assets/project/image1.png"
                  alt=""
                  w="420px"
                  h="304px"
                  objectFit="cover"
                  borderRadius="1rem"
                />
                <Flex
                  as="div"
                  direction="column"
                  justifyContent="center"
                  ml="2rem"
                >
                  <Heading as="h3" fontSize="25px">
                    Vizer filmes e series
                  </Heading>
                  <Text
                    my="1rem"
                    fontWeight="500"
                    color="#6f706f"
                    fontSize="17px"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquam dolor ratione qui consectetur minima inventore
                    maiores, ea quas, vitae officiis voluptas fugiat quis
                    consequatur repellat culpa quod ducimus ipsa a!
                  </Text>

                  <Box as="div" mt="1rem">
                    <Text
                      as="span"
                      px="1rem"
                      py="0.6rem"
                      borderRadius="0.5rem"
                      mr="1rem"
                      bg="#000"
                      color="#fff"
                      fontWeight="600"
                    >
                      React.js
                    </Text>
                    <Text
                      as="span"
                      px="1rem"
                      py="0.6rem"
                      borderRadius="0.5rem"
                      mr="1rem"
                      bg="#000"
                      color="#fff"
                      fontWeight="600"
                    >
                      Typescript
                    </Text>
                    <Text
                      as="span"
                      px="1rem"
                      py="0.6rem"
                      borderRadius="0.5rem"
                      mr="1rem"
                      bg="#000"
                      color="#fff"
                      fontWeight="600"
                    >
                      Chakra UI
                    </Text>
                    <Text
                      as="span"
                      px="1rem"
                      py="0.6rem"
                      borderRadius="0.5rem"
                      mr="1rem"
                      bg="#000"
                      color="#fff"
                      fontWeight="600"
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
                      src="../assets/project/arrowGray.png"
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
                      src="../assets/project/arrowGray.png"
                      alt=""
                      w="20px"
                      h="20px"
                      ml="0.5rem"
                    />
                  </Button>
                </Flex>
              </ListItem>
            </UnorderedList>
          </Flex>
        </Container>
      </Flex>

      <Flex as="footer" justifyContent="center" mt="6rem" pb="1rem">
        <Text as="span" display="flex" alignItems="center" fontWeight="600">
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
