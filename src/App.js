import { useState } from "react";
import { Box, useBreakpointValue } from "@chakra-ui/react";
import { Header, Navigation } from "./components";

const smVariant = { navigation: "drawer", navigationButton: true };
const mdVariant = { navigation: "sidebar", navigationButton: false };

export default function App() {
  const [navOpen, setNavOpen] = useState(false);
  const variants = useBreakpointValue({ base: smVariant, md: mdVariant });

  const toggleNav = () => setNavOpen(!navOpen);

  return (
    <>
      <Navigation
        variant={variants?.navigation}
        isOpen={navOpen}
        onClose={toggleNav}
      />
      <Box ml={!variants?.navigationButton && 200}>
        <Header
          showNavButton={variants?.navigationButton}
          onShowNav={toggleNav}
        />
      </Box>
    </>
  );
}
