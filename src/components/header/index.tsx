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
            Inicio
          </ListItem>
          <ListItem color="#717171" fontWeight="600" mr="3rem" cursor="pointer">
            Sobre
          </ListItem>
          <ListItem color="#717171" fontWeight="600" mr="3rem" cursor="pointer">
            Habilidades
          </ListItem>
          <ListItem color="#717171" fontWeight="600" cursor="pointer">
            Contato
          </ListItem>
        </UnorderedList>
      </Container>
    </Flex>
  );
};

export { Header };
