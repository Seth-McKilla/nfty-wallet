import { useState } from "react";
import uauth from "./uauth";
import { Box, useBreakpointValue } from "@chakra-ui/react";
import { Header, Navigation } from "./components";
import { HomeView } from "./views";

const smVariant = { navigation: "drawer", navigationButton: true };
const mdVariant = { navigation: "sidebar", navigationButton: false };

export default function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [route, setRoute] = useState("home");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const variants = useBreakpointValue({ base: smVariant, md: mdVariant });

  const toggleNav = () => setNavOpen(!navOpen);

  const handleRouteChange = (route) => {
    setRoute(route);
    setNavOpen(false);
  };

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

  const renderContent = () => {
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    switch (route) {
      case "home":
        return <HomeView onLogin={handleLogin} showLogin={!!user} />;
      case "collection":
        return <div>Collection</div>;
      case "about":
        return <div>About</div>;
      default:
        return <HomeView onLogin={handleLogin} showLogin={!!user} />;
    }
  };

  return (
    <>
      <Navigation
        variant={variants?.navigation}
        isOpen={navOpen}
        onClose={toggleNav}
        onClick={(e) => handleRouteChange(e.target.innerText.toLowerCase())}
      />
      <Box ml={!variants?.navigationButton && 200}>
        <Header
          showNavButton={variants?.navigationButton}
          onShowNav={toggleNav}
          onLogin={handleLogin}
          onLogout={handleLogout}
          user={user}
        />
        <Box>{renderContent()}</Box>
      </Box>
    </>
  );
}
