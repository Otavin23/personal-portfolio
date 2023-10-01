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

const Home = () => {
  return (
    <>
      <Header />

      <Flex as="main" justify="center">
        <Container w="95%" maxW="1300px" my="10rem">
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
          maxW="1300px"
          my="5rem"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Heading
            pos="relative"
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
                      Testing library
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
    </>
  );
};
export { Home };
