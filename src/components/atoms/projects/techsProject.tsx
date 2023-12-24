import { ListItem, UnorderedList } from "@chakra-ui/react";

interface IProps {
  techs: {
    name: string;
    background: string;
    color: string;
  }[];
}

const TechsProjects = ({ techs }: IProps) => {
  return (
    <UnorderedList display="flex" flexWrap="wrap" m="0.5rem 0 0.5rem 0">
      {techs.map((tech, index) => (
        <ListItem
          listStyleType="none"
          mr="0.5rem"
          px="0.4rem"
          borderRadius="0.5rem"
          key={index}
          bg={tech.background}
          color={tech.color}
        >
          {tech.name}
        </ListItem>
      ))}
    </UnorderedList>
  );
};

export { TechsProjects };
