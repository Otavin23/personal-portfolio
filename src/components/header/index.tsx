import {
  Flex,
  Container,
  Box,
  UnorderedList,
  ListItem,
  Text,
} from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex
      as="div"
      justify="center"
      py="1.5rem"
      bg="#FAFAFA"
      borderBottom="1px solid #ebe8e8"
    >
      <Container
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        w="95%"
        maxW="1300px"
      >
        <Box as="div">
          <Text as="span" letterSpacing="1px" fontWeight="700">
            # OTAVIO
          </Text>
        </Box>

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
