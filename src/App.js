import { useState } from "react";
import uauth from "./uauth";
import { Box, useBreakpointValue } from "@chakra-ui/react";
import { Header, Navigation } from "./components";

const smVariant = { navigation: "drawer", navigationButton: true };
const mdVariant = { navigation: "sidebar", navigationButton: false };

export default function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const variants = useBreakpointValue({ base: smVariant, md: mdVariant });

  const toggleNav = () => setNavOpen(!navOpen);

  const handleLogin = async () => {
    setLoading(true);
    try {
      await uauth?.loginWithPopup();
      const user = await uauth?.user();
      setUser(user);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
    return window.location.reload();
  };

  const handleLogout = async () => {
    setLoading(true);
    try {
      await uauth?.logout();
      setUser(undefined);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
    return window.location.reload();
  };

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
          onLogin={handleLogin}
          onLogout={handleLogout}
          user={user}
        />
      </Box>
    </>
  );
}
