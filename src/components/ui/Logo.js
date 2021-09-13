import React from "react";
import {Box, Image} from "@chakra-ui/react";
import logo from "../../media/am8mu-uu5r2.svg"

export default function Logo(props) {
  return (
    <Box {...props}>
      <Image boxSize="75px" src={logo}/>
    </Box>
  );
}
