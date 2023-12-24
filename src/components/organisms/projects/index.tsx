import { Flex, Container, Heading, Button } from "@chakra-ui/react";
import { ListProjectsBase } from "../../molecules/projects/listProjectsBase";

const Projects = () => {
  return (
    <Flex as="section" justify="center" id="projects" bg="#000">
      <Container
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
          Projetos
        </Heading>

        <ListProjectsBase />

        <Flex as="a" href="https://github.com/Otavin23" target="_blank">
          <Button
            mt="5rem"
            px="3rem"
            py="1.5rem"
            color="#fff"
            bg="#6E6BFE"
            border="1px solid #b3b2f3"
          >
            Ver mais projetos
          </Button>
        </Flex>
      </Container>
    </Flex>
  );
};
export { Projects };
