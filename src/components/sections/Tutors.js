import React, { ReactNode } from 'react';
import {
    Box,
    Flex,
    Heading,
    Text,
    Stack,
    Container,
    Avatar,
    useColorModeValue, Button, Center,
} from '@chakra-ui/react';

import Raph from "../../media/Raph.jpg"
import Kevin from "../../media/Kevin.jpg"
import James from "../../media/James.png"
import {Link} from "react-router-dom";

const Testimonial = ({ children }) => {
    return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }) => {
    return (
        <Stack
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'md'}
            p={{base:12, md: 8}}
            maxW={{md: "auto"}}
            rounded={'xl'}
            align={'center'}
            pos={'relative'}
            _after={{
                content: `""`,
                w: 0,
                h: 0,
                borderLeft: 'solid transparent',
                borderLeftWidth: 16,
                borderRight: 'solid transparent',
                borderRightWidth: 16,
                borderTop: 'solid',
                borderTopWidth: 16,
                borderTopColor: useColorModeValue('white', 'gray.800'),
                pos: 'absolute',
                bottom: '-16px',
                left: '50%',
                transform: 'translateX(-50%)',
            }}>
            {children}
        </Stack>
    );
};

const TestimonialHeading = ({ children }) => {
    return (
        <Heading as={'h3'} fontSize={'xl'}>
            {children}
        </Heading>
    );
};

const TestimonialText = ({ children }) => {
    return (
        <Text
            textAlign={'center'}
            color={useColorModeValue('gray.600', 'gray.400')}
            fontSize={'sm'}>
            {children}
        </Text>
    );
};

const TestimonialAvatar = ({
                               src,
                               name,
                               title,
                           }) => {
    return (
        <Flex align={'center'} mt={8} direction={'column'}>
            <Avatar src={src} alt={name} mb={2} />
            <Stack spacing={-1} align={'center'}>
                <Text fontWeight={600}>{name}</Text>
                <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
                    {title}
                </Text>
            </Stack>
        </Flex>
    );
};

export default function Tutors() {
    return (
        <Flex
            bg={"primary.100"}
            direction={{ base: "column-reverse", md: "row" }}
            justify={"center"}
            width={"100vw"}
        >
            <Container maxW={'150vw'} py={16} as={Stack} spacing={12}>
                <Stack spacing={0} align={'center'}>
                    <Heading
                        as="h1"
                        size="xl"
                        fontWeight="bold"
                        color="primary.800"
                        textAlign={"center"}
                        p={4}
                    >
                        Our Tutors
                    </Heading>
                    <Heading
                        as="h2"
                        size="md"
                        color="primary.800"
                        fontWeight="normal"
                        lineHeight={1.5}
                        textAlign={"center"}
                    >
                        We are a team of top-achieving VCE Physics specialists who truly care about making the subject understandable to you.
                    </Heading>
                </Stack>
                <Stack
                    align={"center"}
                    direction={{ base: 'column', md: 'row' }}
                    px={{lg:20}}
                    spacing={{ base: 10, md: 4, lg: 10 }}>
                    <Testimonial>
                        <TestimonialContent>
                            <TestimonialHeading>Howdy!</TestimonialHeading>
                            <TestimonialText>
                                My name is Raph, and I’m a VCE Physics Tutor at Complete VCE Tuition.
                                I graduated with an ATAR of 99.90 in 2017 and I’m currently a 4th year Chancellor’s Scholar at
                                the University of Melbourne studying a concurrent BSc/D-Lang.
                                My interests are in genetic research, technology and medicine.
                            </TestimonialText>
                        </TestimonialContent>
                        <TestimonialAvatar
                            src={Raph}
                            name={'Raphael Chang'}
                            title={'Complete VCE Tutor, ATAR 99.90 in 2017'}
                        />
                    </Testimonial>
                    <Testimonial>
                        <TestimonialContent>
                            <TestimonialHeading>G'Day!</TestimonialHeading>
                            <TestimonialText>
                                My name is Kevin, and I am a VCE Physics Tutor at Complete VCE Tuition.
                                I graduated with an ATAR of 99.90 in 2017 and I am currently a first year Doctor of Medicine student at the University of Melbourne.
                                I have a passion for health-related fields such as cardiology and orthopaedics. In my spare time I like to read and gym.
                            </TestimonialText>
                        </TestimonialContent>
                        <TestimonialAvatar
                            src={Kevin}
                            name={'Kevin Huang'}
                            title={'Complete VCE Tutor, ATAR 99.90 in 2017'}
                        />
                    </Testimonial>
                    <Testimonial>
                        <TestimonialContent>
                            <TestimonialHeading>Hello There!</TestimonialHeading>
                            <TestimonialText>
                                My name is James, and I am currently studying at Monash University undertaking a double degree in science and commerce.
                                My role within Complete VCE Tuition is as a business consultant where I aim to improve the learning experience for the
                                organisation to personalise it for our students.
                            </TestimonialText>
                        </TestimonialContent>
                        <TestimonialAvatar
                            src={James}
                            name={'James Portelli'}
                            title={'Student @ Monash University'}
                        />
                    </Testimonial>
                </Stack>

            </Container>


        </Flex>
    );
}