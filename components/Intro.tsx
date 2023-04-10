import { Box, Flex, Heading, VStack, Text, Image } from '@chakra-ui/react';
import React from 'react';
import { useAnimation } from '@codechem/chakra-ui-animations';


export default function Intro() {
  const animation = useAnimation('shake-y', { duration: 20000, iterationCount: 'infinite' });

  return (
    <Box mb='30px'>
      <Flex direction={['column', 'column', 'row']} justify={['center', 'center', 'space-between']} alignItems={['center', 'center', 'unset']} px={['20px', '20px', '40px']} pt={['20px', '20px', '50px']}>
        <VStack justify='center' alignItems={['center', 'center', 'flex-start']} pb={['20px', '20px', '0']} pr={['0', '0', '100px']} textAlign={['center', 'center', 'left']}>
          <Heading fontSize={['5xl', '5xl', '7xl']} fontFamily='Poppins'>
            Panaverse Decentralized Autonomous Organization
          </Heading>
          <Text fontSize={['2xl', '2xl', '3xl']}>
            The Future of the Web is Web 3.0, Metaverse, and Edge Computing. Panaverse DAO is a movement to spread these technolgies globally. It is community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers.
          </Text>
        </VStack>
        <Flex justify='center' alignItems={['center', 'center', 'unset']}>
          <Image src='/future.png' alt='future' width={['300', '600', '900']} height={['300', '600', '900']} />
        </Flex>
      </Flex>
    </Box>
  );
}
