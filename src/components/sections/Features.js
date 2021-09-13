import React from "react";
import PropTypes from "prop-types";
import {
    Box, Button, Center,
    Flex,
    Heading,
    SimpleGrid,
} from "@chakra-ui/react";

import stepOne from "../../media/StepOne.jpg"
import stepTwo from "../../media/StepTwo.jpg"
import stepThree from "../../media/StepThree.jpg"
import Card from "../ui/Card";
import {Link} from "react-router-dom";



export default function Features({title, subtitle, image, ctaLink, ctaText, ...rest}) {
    return (
        <Flex
            justify={"center"}
            direction={"column"}
            width={"100vw"}
            bg={"white"}
            p={8}
            mb={8}
            {...rest}
        >

            <Box p={4}>
                <Heading
                    as="h1"
                    size="xl"
                    fontWeight="bold"
                    color="primary.800"
                    textAlign={"center"}
                    p={4}
                >
                    The Complete Approach
                </Heading>
                <Heading
                    as="h2"
                    size="md"
                    color="primary.800"
                    fontWeight="normal"
                    lineHeight={1.5}
                    textAlign={"center"}
                >
                    A 3-Step Streamlined System.
                </Heading>

                <Card
                    image={stepOne}
                    subtitle={'Step #1'}
                    title={'Understanding'}
                    text={
                        'We will walk you through the VCE Physics syllabus dot point by dot point. ' +
                        'For each concept, we will rigorously test your understanding to ensure that you fully "get it".'
                    }
                />
                <Card
                    image={stepTwo}
                    subtitle={'Step #2'}
                    title={'Memorisation'}
                    text={
                        'Once comprehensive "Understanding" is achieved, we will provide you with concise notes for memorisation.' +
                        ' I.e. summaries, formulae, key points, facts, and statistics.'
                    }
                />
                <Card
                    image={stepThree}
                    subtitle={'Step #3'}
                    title={'Practice'}
                    text={
                        'The most important step. ' +
                        'Through in-class questions and past papers, we will show you how to compose full-mark responses, ' +
                        'and provide you with invaluable exam techniques.'
                    }
                />
            </Box>


            <Center>
                <Link to={"/details"}>
                    <Button
                        colorScheme="secondary"
                        borderRadius="8px"
                        py="4"
                        px="4"
                        lineHeight="1"
                        size="lg"
                    >
                        More Details
                    </Button>
                </Link>
            </Center>

        </Flex>
    );
}

Features.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    image: PropTypes.string,
    ctaText: PropTypes.string,
    ctaLink: PropTypes.string
};

Features.defaultProps = {
    title: "RTest",
    subtitle:
        "This is the subheader section where you describe the basic benefits of your product",
    image: "https://source.unsplash.com/collection/404339/800x600",
    ctaText: "Create your account now",
    ctaLink: "/signup"
};
