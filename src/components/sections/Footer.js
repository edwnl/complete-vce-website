import {
    Box, Center,
    Container,
    Stack,
    Text, useColorModeValue,
} from '@chakra-ui/react';
import Logo from "../ui/Logo";

export default function Footer() {
    return (
        <Box
            bg={useColorModeValue('gray.50', 'gray.900')}
            w={'100%'}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Stack
                direction={{base: "column", md: "row"}}
                py={4}
                px={10}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={'center'}>
                    <Logo />
                    <Text align={"center"}>© 2021 Complete VCE Tutoring. All rights reserved.</Text>
                    <Stack direction={'column'} align={"center"} spacing={0}>
                            <Text>
                                completevcetuition@gmail.com
                            </Text>
                            <Text>
                                (+61) 452 663 122
                            </Text>
                            <Text>
                                (+61) 419 686 080
                            </Text>
                    </Stack>
            </Stack>
        </Box>
    );
}