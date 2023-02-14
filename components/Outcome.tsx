import { Box, HStack, VStack,Heading,Text, Button} from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import { useAnimation } from '@codechem/chakra-ui-animations';

export default function Outcome(){
    const animation = useAnimation('shake-y', { duration: 15000, iterationCount: 'infinite' });
    return (
        <Box p='50px' m='20px' backgroundImage="url('/bg4.jpg')" backgroundSize={"cover"} backgroundPosition="center" borderRadius={'30px'}>
           <HStack >
            <VStack p='100px' textAlign='center' >
                <Heading fontFamily={'Poppins'} fontSize='5xl' color={'whiteAlpha.700'} p='5px'>Outcome for Participants of the Program </Heading>
                <Box bgGradient='linear(to-r, green.200, pink.500)' p='20px' borderRadius={'30px'}>
                <Text fontSize={'2xl'} fontFamily={'Poppins'} fontWeight='100' p='20px'>The graduates of this program will own products (Full-Stack App Templates, AR and VR Experiences, and APIs) that are marketed globally by the Panaverse DAO and, if they like, will also be able to start off by offering services at a rate of <Box as={'span'} fontSize='2xl'>$50 per hour ($96,000 per year)</Box> . This would give Pakistani professionals and students a fantastic opportunity to better their financial situation while also giving the economy a much-needed boost by expanding software exports.</Text>
                <Button p='20px' size='lg' colorScheme={"red"} >Enroll Now</Button>
                </Box>
            </VStack>
            <Box animation={animation}>
                <Image src="/rocket.png" alt='rocket' width={2000} height={2000} />
            </Box>
           </HStack>
        </Box>
    );
}