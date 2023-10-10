import { ChakraBaseProvider } from "@chakra-ui/react";
import { themeChakra } from "./styles/theme";
import { Home } from "./page/home";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./styles/scrollbar.css";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <ChakraBaseProvider theme={themeChakra}>
      <Home />
    </ChakraBaseProvider>
  );
}

export default App;
