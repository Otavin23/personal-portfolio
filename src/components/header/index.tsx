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
      bg="#ffffff"
      borderBottom="1px solid #ebe8e8"
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
            <Image src="../assets/logoOtavio.png" alt="" w="50px" mr="1rem" />{" "}
            OTAVIO
          </Text>
        </Flex>

        <UnorderedList display="flex" alignItems="center" listStyleType="none">
          <ListItem color="#717171" fontWeight="600" mr="3rem" cursor="pointer">
            Home
          </ListItem>
          <ListItem color="#717171" fontWeight="600" mr="3rem" cursor="pointer">
            About
          </ListItem>
          <ListItem color="#717171" fontWeight="600" mr="3rem" cursor="pointer">
            Skills
          </ListItem>
          <ListItem color="#717171" fontWeight="600" mr="3rem" cursor="pointer">
            Projects
          </ListItem>
          <ListItem color="#717171" fontWeight="600" cursor="pointer">
            Contact
          </ListItem>
        </UnorderedList>
      </Container>
    </Flex>
  );
};

export { Header };
