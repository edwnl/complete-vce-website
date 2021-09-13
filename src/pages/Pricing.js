import React from "react";

import Hero from "../components/sections/Hero";
import LandingLayout from "../components/layouts/LandingLayout";
import design from "../media/hero.svg"
import Features from "../components/sections/Features";
import Tutors from "../components/sections/Tutors";
import {
    Heading, Text,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption, Flex, Box, VStack, Button, Link, Center,
} from "@chakra-ui/react";
import ThreeTierPricing from "../components/sections/Pricing";

export default function Pricing() {
    return (
        <LandingLayout>

            <ThreeTierPricing/>


        </LandingLayout>

    );
}
