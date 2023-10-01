import {
  Flex,
  Container,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  Button,
  Image,
} from "@chakra-ui/react";
import { Header } from "../../components/header";

const Home = () => {
  return (
    <>
      <Header />
      <Flex as="main" justify="center">
        <Container w="95%" maxW="1300px" mt="10rem">
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
    </>
  );
};
export { Home };
