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
                      src="../assets/skills/mira.png"
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
                      src="../assets/skills/mira.png"
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
                      src="../assets/skills/mira.png"
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
                      src="../assets/skills/mira.png"
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
                      src="../assets/skills/mira.png"
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
                      src="../assets/skills/mira.png"
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
                      src="../assets/skills/mira.png"
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
                      src="../assets/skills/mira.png"
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
                      src="../assets/skills/mira.png"
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
                      src="../assets/skills/mira.png"
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
                      src="../assets/skills/mira.png"
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
                      src="../assets/skills/mira.png"
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
                      src="../assets/skills/mira.png"
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
                      src="../assets/skills/mira.png"
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
                      src="../assets/skills/mira.png"
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
                      src="../assets/skills/mira.png"
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
                      src="../assets/skills/mira.png"
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
                      src="../assets/skills/mira.png"
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
                      SQL
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
    </>
  );
};
export { Home };
