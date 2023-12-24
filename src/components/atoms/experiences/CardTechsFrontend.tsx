import {
  Heading,
  Image,
  ListItem,
  UnorderedList,
  Box,
  Text,
} from "@chakra-ui/react";
import { ExperienceFrontEnd } from "../../../core/utils/experienceStructure";

const ListTechsFrontend = () => {
  return (
    <UnorderedList
      display="flex"
      flexDirection="column"
      m="1rem 0 0 0"
      w="100%"
      pr="1rem"
      height="500px"
      overflow="auto"
    >
      {ExperienceFrontEnd.map((experience, index) => (
        <ListItem
          key={index}
          display="flex"
          bg="#111111"
          border="1px solid #323232"
          w="100%"
          borderRadius="0.5rem"
          p="1rem"
          mt="1rem"
        >
          <Image
            src={experience.image}
            alt={experience.altImage}
            w="55px"
            h="45px"
            mr="0.5rem"
          />
          <Box ml="0.5rem">
            <Heading as="h3" color="#fff" fontWeight="500" fontSize="23px">
              {experience.name}
            </Heading>
            <Text color="#888888" mt="0.5rem">
              {experience.description}
            </Text>
          </Box>
        </ListItem>
      ))}
    </UnorderedList>
  );
};

export { ListTechsFrontend };
