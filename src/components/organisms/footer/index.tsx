import { Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex as="footer" justify="center" align="center" py="1rem" bg="#000000">
      <Text
        as="span"
        display="flex"
        alignItems="center"
        fontWeight="600"
        color="#ffffff"
      >
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
  );
};
export { Footer };
