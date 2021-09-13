import React from "react";

import LandingLayout from "../components/layouts/LandingLayout";
import {
    Heading, Text,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption, Flex, Box, VStack, Button, Center,
} from "@chakra-ui/react";
import {Link} from "react-router-dom";


export default function Details() {
    return (
        <LandingLayout>
            <Box pb={10} alignItems={"flex-start"}>

                <VStack spacing={2} textAlign="center">
                    <Heading as="h1" fontSize="4xl">
                        Lesson Details
                    </Heading>
                    <Text fontSize="lg" color={'gray.500'}>
                         Lessons are taught following the VCE Physics Syllabus, and run every weekend for 2 hours.
                    </Text>
                </VStack>

                <Flex direction={"column"}>
                    <Heading m={5} pb={3}>Year 12</Heading>

                    <Table variant="simple">
                        <Thead>
                            <Tr>
                                <Th>Time</Th>
                                <Th>Topic</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>Sat 9am</Td>
                                <Td>Unit 3 - Motion</Td>
                            </Tr>
                            <Tr>
                                <Td>Sunday 12pm</Td>
                                <Td>Unit 4 - Light & Matter</Td>
                            </Tr>
                        </Tbody>
                    </Table>

                    <Heading m={5} pb={3}>Year 11</Heading>

                    <Table variant="simple">
                        <Thead>
                            <Tr>
                                <Th>Time</Th>
                                <Th>Topic</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>Sat 2pm</Td>
                                <Td>Unit 1 - Electricity</Td>
                            </Tr>
                            <Tr>
                                <Td>Sat 4pm</Td>
                                <Td>Unit 1 - Matter</Td>
                            </Tr>
                            <Tr>
                                <Td>Sun 10am</Td>
                                <Td>Year 11 Review</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </Flex>

                <Center>
                    <Link to={"/pricing"}>
                        <Button
                            colorScheme="primary"
                            borderRadius="8px"
                            py="4"
                            mt={10}
                            px="4"
                            lineHeight="1"
                            size="md"
                        >
                            Book a Lesson Now
                        </Button>
                    </Link>
                </Center>


            </Box>





        </LandingLayout>

    );
}
