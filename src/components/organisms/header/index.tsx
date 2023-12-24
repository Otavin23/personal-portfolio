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
      h="64px"
      w="100%"
      top="-1px"
      zIndex="2"
      bg="#000"
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
            color="#f5f5f5"
          >
            OTAVIO
          </Text>
        </Flex>
        <UnorderedList
          listStyleType="none"
          display="flex"
          alignItems="center"
          mt="1rem"
        >
          <ListItem cursor="pointer" mr="1rem">
            <Box as="a" href="https://github.com/Otavin23" target="_blank">
              <Image
                src="../assets/contact/github.svg"
                alt=""
                w="30px"
                h="30px"
                opacity="0.8"
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
                src="../assets/contact/linkedin.svg"
                alt=""
                w="30px"
                h="30px"
                opacity="0.8"
              />
            </Box>
          </ListItem>

          <ListItem cursor="pointer">
            <Box as="a" href="https://wa.me/553597335548" target="_blank">
              <Image
                src="../assets/contact/whatssap.svg"
                alt=""
                w="30px"
                h="30px"
                opacity="0.8"
              />
            </Box>
          </ListItem>
        </UnorderedList>
      </Container>
    </Flex>
  );
};

export { Header };
