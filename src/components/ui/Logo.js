import React from "react";
import {Box, Button, Image} from "@chakra-ui/react";
import logo from "../../media/am8mu-uu5r2.svg"
import {Link} from "react-router-dom";

export default function Logo(props) {
  return (
    <Box {...props}>
        <Link to={"/"}>
            <Image boxSize="75px" src={logo}/>
        </Link>
    </Box>
  );
}
