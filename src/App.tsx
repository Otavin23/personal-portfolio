import { ChakraBaseProvider } from "@chakra-ui/react";
import { themeChakra } from "./styles/theme";
import { Home } from "./page/home";

function App() {
  return (
    <ChakraBaseProvider theme={themeChakra}>
      <Home />
    </ChakraBaseProvider>
  );
}

export default App;
