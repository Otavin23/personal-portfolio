import { Flex, Heading, Grid } from "@chakra-ui/react";
import { ListTechsFrontend } from "../../atoms/experiences/CardTechsFrontend";
import { ListTechsBackend } from "../../atoms/experiences/CardTechsBackend";

const ExperiencesColumns = () => {
  return (
    <>
      <Grid
        display="grid"
        gridTemplateColumns={{
          lg: "repeat(auto-fill, minmax(50%, 1fr))",
          md: "repeat(auto-fill, minmax(40%, 1fr))",
          base: "repeat(auto-fill, minmax(100%, 1fr))",
        }}
        flexWrap="wrap"
        justifyContent="space-between"
      >
        <Flex
          as="div"
          direction="column"
          align="center"
          mr={{ base: "0", sm: "1rem", lg: "2rem" }}
          py={{ sm: "3rem", base: "0" }}
          borderRadius="0.5rem"
          mt={{ lg: "4rem", base: "2rem" }}
        >
          <Heading as="h3" color="#ffffff" fontWeight="500" fontSize="19px">
            Front-end
          </Heading>

          <ListTechsFrontend />
        </Flex>

        <Flex
          as="div"
          direction="column"
          align="center"
          py={{ sm: "3rem", base: "0" }}
          borderRadius="0.5rem"
          mt={{ lg: "4rem", base: "2rem" }}
        >
          <Heading as="h3" color="#ffffff" fontWeight="500" fontSize="19px">
            Back-end
          </Heading>

          <ListTechsBackend />
        </Flex>
      </Grid>
    </>
  );
};

export { ExperiencesColumns };
