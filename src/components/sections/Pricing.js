import { ReactNode } from 'react';
import {
    Box,
    Stack,
    HStack,
    Heading,
    Text,
    VStack,
    useColorModeValue,
    List,
    ListItem,
    ListIcon,
    Button,
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';
import {Link} from "react-router-dom";


function PriceWrapper({ children }) {
    return (
        <Box
            mb={4}
            shadow="base"
            borderWidth="1px"
            alignSelf={{ base: 'center', lg: 'flex-start' }}
            borderColor={useColorModeValue('gray.200', 'gray.500')}
            borderRadius={'xl'}>
            {children}
        </Box>
    );
}

export default function ThreeTierPricing() {
    return (
        <Box py={{base:4, md:12}} px={5}>
            <VStack spacing={2} textAlign="center">
                <Heading as="h1" fontSize="4xl">
                    Lesson Prices
                </Heading>
                <Text fontSize="lg" color={'gray.500'}>
                    Lessons are 2 hours each.
                </Text>
            </VStack>
            <Stack
                direction={{ base: 'column', md: 'row' }}
                textAlign="center"
                justify="center"
                spacing={{ base: 4, lg: 10 }}
                py={10}>
                <PriceWrapper>
                    <Box py={4} px={12}>
                        <Text fontWeight="500" fontSize="2xl">
                            Trial
                        </Text>
                        <HStack justifyContent="center">
                            <Text fontSize="3xl" fontWeight="600">
                                $
                            </Text>
                            <Text fontSize="5xl" fontWeight="900">
                                0
                            </Text>
                            <Text fontSize="3xl" color="gray.500">
                                /hour
                            </Text>
                        </HStack>
                    </Box>
                    <VStack
                        bg={useColorModeValue('gray.50', 'gray.700')}
                        py={4}
                        borderBottomRadius={'xl'}>
                        <List spacing={3} textAlign="start" px={12} maxW={"300px"}>

                            <ListItem>
                                <ListIcon as={FaCheckCircle} color="secondary.500" />
                                Experience Complete VCE Tutoring
                            </ListItem>
                            <ListItem>
                                <ListIcon as={FaCheckCircle} color="secondary.500" />
                                Meet our Expert Tutors
                            </ListItem>
                            <ListItem>
                                <ListIcon as={FaCheckCircle} color="secondary.500" />
                                100% free, no strings attached.
                            </ListItem>
                        </List>
                        <Box w="80%" pt={7}>
                            <Link to={"/contact"}>
                                <Button w="full" colorScheme="secondary" variant="outline">
                                    Contact Us
                                </Button>
                            </Link>
                        </Box>
                    </VStack>
                </PriceWrapper>

                <PriceWrapper>
                    <Box position="relative">
                        <Box
                            position="absolute"
                            top="-16px"
                            left="50%"
                            style={{ transform: 'translate(-50%)' }}>
                            <Text
                                textTransform="uppercase"
                                bg={useColorModeValue('secondary.300', 'red.700')}
                                px={3}
                                py={1}
                                color={useColorModeValue('gray.900', 'gray.300')}
                                fontSize="sm"
                                fontWeight="600"
                                rounded="xl">
                                Popular
                            </Text>
                        </Box>
                        <Box py={4} px={12}>
                            <Text fontWeight="500" fontSize="2xl">
                                Year 12
                            </Text>
                            <HStack justifyContent="center">
                                <Text fontSize="3xl" fontWeight="600">
                                    $
                                </Text>
                                <Text fontSize="5xl" fontWeight="900">
                                    30
                                </Text>
                                <Text fontSize="3xl" color="gray.500">
                                    /hour
                                </Text>
                            </HStack>
                        </Box>
                        <VStack
                            bg={useColorModeValue('gray.50', 'gray.700')}
                            py={4}
                            borderBottomRadius={'xl'}>
                            <List spacing={3} textAlign="start" px={12} maxW={"300px"}>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="secondary.500" />
                                    Exclusive Notes
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="secondary.500" />
                                    Exclusive Exam Tips
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="secondary.500" />
                                    Past Exams Explained
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="secondary.500" />
                                    Expert Physics Tutors
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="secondary.500" />
                                    Complex Concepts Simplified
                                </ListItem>
                            </List>
                            <Box w="80%" pt={7}>
                                <Link to={"/contact"}>
                                    <Button w="full" colorScheme="secondary">
                                        Contact Us
                                    </Button>
                                </Link>

                            </Box>
                        </VStack>
                    </Box>
                </PriceWrapper>
                <PriceWrapper>
                    <Box py={4} px={12}>
                        <Text fontWeight="500" fontSize="2xl">
                            Year 11
                        </Text>
                        <HStack justifyContent="center">
                            <Text fontSize="3xl" fontWeight="600">
                                $
                            </Text>
                            <Text fontSize="5xl" fontWeight="900">
                                25
                            </Text>
                            <Text fontSize="3xl" color="gray.500">
                                /hour
                            </Text>
                        </HStack>
                    </Box>
                    <VStack
                        bg={useColorModeValue('gray.50', 'gray.700')}
                        py={4}
                        borderBottomRadius={'xl'}>
                        <List spacing={3} textAlign="start" px={12} maxW={"300px"}>

                            <ListItem>
                                <ListIcon as={FaCheckCircle} color="secondary.500" />
                                Exclusive notes
                            </ListItem>
                            <ListItem>
                                <ListIcon as={FaCheckCircle} color="secondary.500" />
                                Exclusive exam tips
                            </ListItem>
                            <ListItem>
                                <ListIcon as={FaCheckCircle} color="secondary.500" />
                                Expert Physics Tutors
                            </ListItem>
                            <ListItem>
                                <ListIcon as={FaCheckCircle} color="secondary.500" />
                                Complex Concepts Simplified
                            </ListItem>
                        </List>
                        <Box w="80%" pt={7}>
                            <Link to={"/contact"}>
                                <Button w="full" colorScheme="secondary" variant="outline">
                                    Contact Us
                                </Button>
                            </Link>
                        </Box>
                    </VStack>
                </PriceWrapper>
            </Stack>
        </Box>
    );
}