import React from "react";
import { Link } from "react-router-dom";
import {Box, Flex, Text, Button, Divider, Fade} from "@chakra-ui/react";
import Logo from "../ui/Logo";

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Text
      my={2}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
      {...rest}
    >
      <Link to={to}>{children}</Link>
    </Text>
  );
};

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="black"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="black"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const Header = (props) => {
  const [show, setShow] = React.useState(false);
  const toggleMenu = () => setShow(!show);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w={{base: "100%", md: "75%"}}
      p={8}
      bg={"transparent"}
      color={["white", "white", "secondary.700", "secondary.700"]}
      {...props}
    >
      <Flex align="center">
        <Logo
          w="50px"
        />
      </Flex>

      <Box display={{ base: "block", sm: "none" }} onClick={toggleMenu}>
        {show ? <CloseIcon /> : <MenuIcon />}
      </Box>

        <Box
            display={{ base: show ? "block" : "none", sm: "block" }}
            flexBasis={{ base: "100%", sm: "auto" }}
            mt={4}
            bgColor={{base:"primary.100", sm:"white"}}
            borderWidth={{base: "1px", sm: "0px"}}
            borderRadius="lg"
        >
          <Flex
              align="center"
              justify={["center", "space-between", "flex-end", "flex-end"]}
              direction={["column", "row", "row", "row"]}
              color={"black"}
              pb={0}
          >
            <MenuItem to="/">Home</MenuItem>
            <MenuItem to="/details">Details </MenuItem>
            <MenuItem to="/pricing">Pricing </MenuItem>
            <MenuItem to="/contact" isLast>
              <Button
                  size="sm"
                  rounded="md"
                  colorScheme={"secondary"}
              >
                Contact Us
              </Button>
            </MenuItem>
          </Flex>
        </Box>

    </Flex>
  );
};

export default Header;
