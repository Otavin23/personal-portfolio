import { Heading } from "@chakra-ui/react";

interface Iprops {
  nameProject: string;
}

const TitleNameProject = ({ nameProject }: Iprops) => {
  return (
    <Heading
      as="h3"
      mt="1rem"
      display="flex"
      alignItems="center"
      fontSize="18px"
      fontWeight="500"
      color="#fafafa"
    >
      {nameProject}
      <svg
        aria-hidden="true"
        style={{
          color: "#fff",
        }}
        fill=""
        height="24"
        shape-rendering="geometricPrecision"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        viewBox="0 0 24 24"
        width="24"
        data-darkreader-inline-stroke=""
      >
        <path d="M7 17L17 7"></path>
        <path d="M10 7h7v7"></path>
      </svg>
    </Heading>
  );
};

export { TitleNameProject };
