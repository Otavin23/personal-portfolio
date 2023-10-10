import {
  Flex,
  Container,
  Box,
  UnorderedList,
  ListItem,
  Text,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";

const Header = () => {
  const [modal, setModal] = useState(false);

  return (
    <Flex
      as="header"
      justify="center"
      py="1.5rem"
      borderBottom="1px solid #2b2b2b"
      pos="fixed"
      w="100%"
      top="-1px"
      zIndex="2"
      bg="rgba(0,0,0,.8)"
      _before={{
        content: `""`,
        pos: "absolute",
        w: "100%",
        h: "100%",
        bg: "hsl(0, 0, 0, 0.9)",
        top: "-1px",
        filter: "blur(1px)",
        zIndex: "-1",
      }}
    >
      <Container
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        w="95%"
        maxW="1200px"
      >
        <Flex as="div" align="center">
          <Text
            as="span"
            display="flex"
            alignItems="center"
            letterSpacing="1px"
            fontWeight="700"
          >
            OTAVIO
          </Text>
        </Flex>

        <UnorderedList
          display={{ base: "none", sm: "flex" }}
          alignItems="center"
          listStyleType="none"
        >
          <ListItem color="#717171" fontWeight="600" mr="3rem" cursor="pointer">
            <Box as="a" href="#section1">
              Inicio
            </Box>
          </ListItem>

          <ListItem color="#717171" fontWeight="600" mr="3rem" cursor="pointer">
            <Box as="a" href="#projects">
              Projetos
            </Box>
          </ListItem>

          <ListItem color="#717171" fontWeight="600" cursor="pointer">
            <Box as="a" href="#skills">
              Habilidades
            </Box>
          </ListItem>
        </UnorderedList>

        <Box
          display={{ base: "flex", sm: "none" }}
          cursor="pointer"
          onClick={() => setModal(!modal)}
        >
          {modal ? (
            <Image src="../assets/close.png" alt="" w="30px" h="30px" />
          ) : (
            <Image src="../assets/menu.png" alt="" w="30px" h="30px" />
          )}
          {modal && (
            <Box
              pos="absolute"
              bg="rgba(0, 0, 0, 0.7)"
              left="1px"
              w="100%"
              top="70px"
              h="100vh"
              zIndex="2px"
              borderRadius="0 1rem 1rem 0"
            >
              <UnorderedList
                py="1rem"
                m="0"
                p="1rem"
                listStyleType="none"
                bg="#0e0e0e"
              >
                <ListItem
                  color="#717171"
                  fontWeight="600"
                  mt="0.5rem"
                  cursor="pointer"
                >
                  <Box as="a" href="#section1">
                    Inicio
                  </Box>
                </ListItem>

                <ListItem
                  color="#717171"
                  fontWeight="600"
                  mt="0.5rem"
                  cursor="pointer"
                >
                  <Box as="a" href="#projects">
                    Projetos
                  </Box>
                </ListItem>

                <ListItem
                  color="#717171"
                  fontWeight="600"
                  mt="0.5rem"
                  cursor="pointer"
                >
                  <Box as="a" href="#skills">
                    Habilidades
                  </Box>
                </ListItem>
              </UnorderedList>
            </Box>
          )}
        </Box>
      </Container>
    </Flex>
  );
};

export { Header };
