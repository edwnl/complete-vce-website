import {Box, Flex, Heading, Image, Link, Stack, Text, useColorModeValue} from "@chakra-ui/react";
import React from "react";

export default function Card({subtitle, title, text, image}) {
    return (
        <Flex
            bg={useColorModeValue("transparent", "gray.600")}
            p={{md:50}}
            py={{base:4}}
            w="full"
            alignItems="center"
            justifyContent="center"
        >
            <Box
                bg={useColorModeValue("primary.100", "gray.800")}
                mx={{lg: 8}}
                display={{lg: "flex"}}
                shadow={{lg: "md"}}
                rounded={"md"}
            >
                <Box w={{lg: "50%"}}>
                    <Box
                        h={{base: 64, lg: "full"}}
                        rounded={"md"}
                        bgSize="cover"
                        backgroundImage={image}
                    />
                </Box>

                <Box py={{base:6, sm:24}} px={6} maxW={{base: "xl", lg: "5xl"}} w={{lg: "50%"}}>
                    <Heading
                        fontSize={{base: "2xl", md: "3xl"}}
                        color={useColorModeValue("gray.800", "white")}
                        fontWeight="bold"
                    >
                        {title}
                    </Heading>
                    <Text mt={4} color={useColorModeValue("gray.600", "gray.400")}>
                        {text}
                    </Text>
                </Box>
            </Box>
        </Flex>

    );
};
