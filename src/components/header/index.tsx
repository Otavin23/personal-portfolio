import {
  Flex,
  Container,
  Box,
  UnorderedList,
  ListItem,
  Text,
  Image,
} from "@chakra-ui/react";

const Header = () => {
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

        <UnorderedList display="flex" alignItems="center" listStyleType="none">
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
      </Container>
    </Flex>
  );
};

export { Header };
