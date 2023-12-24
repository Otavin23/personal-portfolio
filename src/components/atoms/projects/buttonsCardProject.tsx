import { Flex, Button } from "@chakra-ui/react";

interface IProps {
  code: string;
  demo: string;
}

const ButtonsCardProject = ({ code, demo }: IProps) => {
  return (
    <Flex mt="1rem">
      <a href={code} target="_blank">
        <Button
          mr="1rem"
          bg="#fafafa"
          color="#181818"
          borderRadius="0.4rem"
          fontSize="15px"
          fontWeight="600"
        >
          Github
        </Button>
      </a>
      <a href={demo} target="_blank">
        <Button
          border="1px solid #494949"
          color="#ffffff"
          bg="transparent"
          borderRadius="0.4rem"
          fontSize="15px"
          fontWeight="600"
        >
          Live Demo
        </Button>
      </a>
    </Flex>
  );
};

export { ButtonsCardProject };
