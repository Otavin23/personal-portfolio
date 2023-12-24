import { Flex, Container, Heading } from "@chakra-ui/react";
import { ExperiencesColumns } from "../../molecules/experiences";

const Experiences = () => {
  return (
    <Flex as="section" justify="center" id="skills" bg="#000">
      <Container
        data-aos="fade-up-right"
        data-aos-duration="1500"
        w="95%"
        maxW="1200px"
        m="5rem 0"
        p="0"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Heading
          fontWeight="500"
          fontSize="clamp(15px, 5vw, 30px)"
          maxW="950px"
          textAlign="center"
          bgGradient="linear-gradient(137.59deg,#555 20%,#ffffff 75%)"
          bgClip="text"
        >
          Tecnologias
        </Heading>

        <ExperiencesColumns />
      </Container>
    </Flex>
  );
};

export { Experiences };
