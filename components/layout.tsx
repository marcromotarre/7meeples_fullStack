import { Box } from "@chakra-ui/layout";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <Box>
      <Header />
      {children}
    </Box>
  );
};

export default Layout;

/*
 <div
          sx={{
            position: "fixed",
            width: "100%",
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0px 10px",
            backgroundColor: "white",
          }}
        >

        */
