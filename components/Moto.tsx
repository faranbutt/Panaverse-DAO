import { Box, Flex, VStack,Text, HStack, Button } from "@chakra-ui/react";
import React from "react";
import { useAnimation } from "@codechem/chakra-ui-animations";
export default function Moto(){
    const animation = useAnimation('wobble', { duration: 2000, iterationCount: 1 })
    return (
        <Box _hover={{animation:animation}}>
            <Flex direction={"row"} mx='70px' px='60px' borderColor={'Window'} borderRadius='30' bgGradient='linear(to-r, green.200, pink.500)'>
                <VStack p='52px' >
                    <Text fontFamily={'Poppins'} fontSize='5xl'>Program in a Nutshell </Text>
                    <Text fontFamily={"Poppins"} fontSize='1xl' fontWeight={'extrabold'}>In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom and will begin doing so within six months of the program's beginning. It resembles a cross between a corporate venture and an educational project.</Text>
                </VStack>
                <HStack>
                    <Button size={'lg'} colorScheme='red'>Apply</Button>
                    <Button size={'lg'}>Visit PIAIC</Button>
                </HStack>
            </Flex>
        </Box>
    );
}