import { Box, Flex, Heading, VStack, keyframes,Text } from '@chakra-ui/react'
import React from 'react'
import { useAnimation } from '@codechem/chakra-ui-animations';
import Image from 'next/image';
export default function Intro() {
  const animation = useAnimation('shake-y', { duration: 20000, iterationCount: 'infinite' });
  return (
    <Box mb='30px'>
      <Flex direction='row' justify={"space-between"} px='40px' pt='50px'>
      <VStack justify={'center'} alignItems='center'  pr={'100px'}>
      <Heading fontSize={'7xl'} fontFamily='Poppins' pb='20px'>Panaverse Decentralized Autonomous Organization</Heading>
      <Text fontSize={'3xl'}>The Future of the Web is Web 3.0, Metaverse, and Edge Computing. Panaverse DAO is a movement to spread these technolgies globally. It is community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers.</Text>
      </VStack>
      <Flex animation={animation} justify='center'>
        <Image src="/future.png" alt="future" width={'900'} height={"900"}/>
      </Flex>
      </Flex>
    </Box>
  )
}
