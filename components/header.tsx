import { Box } from "@chakra-ui/layout";
import NextImage from "next/image";

const Header = () => {
  const navMenu = [
    {
      name: "Menu Item 1",
      icon: "icon-section-1",
      route: "/section-1",
    },
    {
      name: "Menu Item 2",
      icon: "icon-section-2",
      route: "/section-2",
    },
    {
      name: "Menu Item 3",
      icon: "icon-section-3",
      route: "/section-3",
    },
    {
      name: "Menu Item 4",
      icon: "icon-section-4",
      route: "/section-4",
    },
    {
      name: "Menu Item 5",
      icon: "icon-section-5",
      route: "/section-5",
    },
    {
      name: "Menu Item 6",
      icon: "icon-section-6",
      route: "/section-6",
    },
  ];
  return (
    <Box
      width="100vw"
      height="50px"
      display="grid"
      gridTemplateColumns="10px 20px auto 25px auto 20px 10px"
      gridTemplateAreas="'. menu . logo . . .'"
      justifyItems="center"
      alignItems="center"
      borderBottom="1px solid"
      borderBottomColor="gray.100"
    >
      <Box gridArea="menu">
        <NextImage src="/menu.svg" width={20} height={20} />
      </Box>
      <Box gridArea="logo">
        <NextImage src="/7meeples-logo-red.svg" width={25} height={25} />
      </Box>
    </Box>
  );
};

export default Header;
