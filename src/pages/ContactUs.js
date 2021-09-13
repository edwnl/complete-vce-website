import {
    Box, Button, Center,
    chakra,
    Flex, Heading,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber, Text,
    useColorModeValue, VStack,
} from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import { AiFillPhone } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { FiServer } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';
import LandingLayout from "../components/layouts/LandingLayout";
import {Link} from "react-router-dom";

function StatsCard(props) {
    const { title, lineOne, lineTwo, icon } = props;
    return (
        <Stat
            px={{ base: 2, md: 4 }}
            py={'5'}
            shadow={'md'}
            border={'1px solid'}
            borderColor={useColorModeValue('gray.800', 'gray.500')}
            rounded={'lg'}>
            <Flex justifyContent={'space-between'}>
                <Box pl={{ base: 2, md: 4 }}>
                    <StatLabel color={'primary.500'} fontWeight={'medium'} isTruncated>
                        {title}
                    </StatLabel>
                    <StatNumber fontSize={'md'} fontWeight={'medium'}>
                        {lineOne}
                    </StatNumber>
                    <StatNumber fontSize={'md'} fontWeight={'medium'}>
                        {lineTwo}
                    </StatNumber>
                </Box>
                <Box
                    my={5}
                    mx={5}
                    color={useColorModeValue('gray.800', 'gray.200')}
                    alignContent={'center'}>
                    {icon}
                </Box>
            </Flex>
        </Stat>
    );
}

export default function BasicStatistics() {
    return (
        <LandingLayout>

        <Box maxW="7xl" mx={'auto'} pt={5} mb={10} px={{ base: 5, sm: 12, md: 17 }}>
            <Center>
                <VStack spacing={2} pb={10}>
                    <Heading
                        fontSize={'4xl'}
                        fontWeight={'bold'}>
                        Contact Us
                    </Heading>
                    <Text align={"center"}>
                        For any enquires, or lesson bookings, call or email us and we will get back to you as soon as possible.
                    </Text>
                </VStack>

            </Center>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
                <StatsCard
                    title={'Phone'}
                    lineOne={'(+61) 452 663 122'}
                    lineTwo={'(+61) 419 686 080'}
                    icon={<AiFillPhone size={'3em'} />}
                />
                <StatsCard
                    title={'Email'}
                    lineOne={'completevcetuition@gmail.com'}
                    icon={<MdEmail size={'3em'} />}
                />
                <StatsCard
                    title={'Location'}
                    lineOne={'Level 2, 51-65 Clarke Street, Southbank'}
                    lineTwo={'Melbourne, VIC 3006'}
                    icon={<GoLocation size={'3em'} />}
                />
            </SimpleGrid>
        </Box>


            <iframe width="100%" height="450" allowFullScreen
    src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJX_BU5lRd1moR8rojllNIR8g&key=AIzaSyARd_vM0fDHU6E65rKMRzb1GKbE_8rHaPY"/>

            <Center my={10}>
                <Link to={"/"}>
                    <Button
                        colorScheme="secondary"
                        borderRadius="8px"
                        py="4"
                        px="4"
                        lineHeight="1"
                        size="md"
                    >
                        Back to Homepage
                    </Button>
                </Link>
            </Center>

        </LandingLayout>

    );
}