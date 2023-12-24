import { UnorderedList, ListItem, Image } from "@chakra-ui/react";

import { projectStructure } from "../../../core/utils/projectStructure";
import { ButtonsCardProject } from "../../atoms/projects/buttonsCardProject";
import { TitleNameProject } from "../../atoms/projects/titleNameProject";
import { TechsProjects } from "../../atoms/projects/techsProject";

const ListProjectsBase = () => {
  return (
    <UnorderedList
      mt="4rem"
      w="100%"
      ml="0"
      display="grid"
      gridTemplateColumns={{
        lg: "repeat(auto-fill, minmax(30%, 1fr))",
        md: "repeat(auto-fill, minmax(40%, 1fr))",
        base: "repeat(auto-fill, minmax(100%, 1fr))",
      }}
      justifyContent="space-between"
      gap="2rem"
    >
      {projectStructure.map((project, index) => (
        <ListItem
          key={index}
          display="flex"
          border="1px solid #1f1f1f"
          bg="#111"
          borderRadius="0.5rem"
          p="1rem"
          flexDirection={{ base: "column", lg: "column" }}
          width="100%"
        >
          <Image
            src={project.image}
            alt=""
            w="100%"
            h="200px"
            objectFit="cover"
            borderRadius="0.5rem"
          />
          <TitleNameProject nameProject={project.name} />

          <TechsProjects techs={project.tech} />

          <ButtonsCardProject code={project.code} demo={project.demo} />
        </ListItem>
      ))}
    </UnorderedList>
  );
};

export { ListProjectsBase };
