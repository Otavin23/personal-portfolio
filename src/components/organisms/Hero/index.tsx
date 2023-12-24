import { Flex, Container, Heading, Text, Button } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Flex
      as="main"
      pos="relative"
      justify="center"
      id="section1"
      bg="#000"
      _before={{
        content: `"Vieira"`,
        pos: "absolute",
        color: "white",
        w: "1px",
        h: "1px",
        right: "100px",
        top: "30%",
        opacity: "0.2",
        bg: "#6E6BFE",
        borderRadius: "50%",
        boxShadow: "0 0 1000px 350px #6E6BFE",
      }}
      _after={{
        content: `"otavio"`,
        pos: "absolute",
        color: "white",
        w: "1px",
        h: "1px",
        left: "0",
        top: "70%",
        opacity: "0.2",
        bg: "#6E6BFE",
        borderRadius: "50%",
        boxShadow: "0 0 1000px 350px #6E6BFE",
      }}
    >
      <Container
        w="95%"
        maxW="1200px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        p="0"
        mt="10rem"
        mb="5rem"
      >
        <Heading
          as="h1"
          fontWeight="bold"
          fontSize="clamp(40px, 5vw, 60px)"
          maxW="950px"
          textAlign="center"
          bgGradient="linear-gradient(137.59deg,#c4c4c4 20%,#ffffff 75%)"
          bgClip="text"
        >
          Olá, sou Otávio Vieira, um Desenvolvedor Web.
        </Heading>

        <Text
          mt="1rem"
          fontWeight="400"
          maxW="800px"
          fontSize="clamp(16px, 2vw, 19px)"
          color="#888"
          textAlign="center"
        >
          Sou um freelancer altamente motivado, dedicado a explorar as
          tecnologias mais recentes. Minha especialização está na criação de
          landing pages e aplicações web de última geração, e sou apaixonado por
          utilizar o framework React para tornar esses projetos incríveis.
        </Text>

        <Flex
          as="div"
          direction={{ base: "column", sm: "row" }}
          alignItems="center"
          mt="4rem"
        >
          <Button
            as="a"
            href="/curriculo.pdf"
            download
            bg="#6E6BFE"
            border="1px solid #b3b2f3"
            color="#FFFFFF"
            py="1.5rem"
            borderRadius="0.3rem"
            fontSize="14px"
            fontWeight="600"
            display="flex"
            alignItems="center"
            justifyContent="center"
            mt="1rem"
            mr={{ sm: "1rem", base: "0" }}
          >
            Baixar Curriculo
            <svg
              style={{
                marginLeft: "0.5rem",
              }}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" x2="12" y1="15" y2="3" />
            </svg>
          </Button>

          <Button
            as="a"
            href="https://www.linkedin.com/in/otavio-vieira-95aa97294/"
            bg="transparent"
            border="1px solid #494949"
            color="#ffffff"
            py="1.5rem"
            borderRadius="0.3rem"
            fontSize="14px"
            fontWeight="600"
            display="flex"
            alignItems="center"
            justifyContent="center"
            mt="1rem"
          >
            Entre em contato
          </Button>
        </Flex>
      </Container>
    </Flex>
  );
};

export { Hero };
