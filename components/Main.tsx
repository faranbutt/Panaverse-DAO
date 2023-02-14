"use client";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import React from "react";
export default function Main() {
  return (
    <Box>
      <Flex direction={'row'}>
        <Flex alignItems={'flex-start'} direction={'column'} mt={'300px'} ml={'40px'}>
          <Heading fontFamily={'Poppins'} fontSize={'8xl'} color="#FFFFFF">
            Become a Certified Developer with <Text bgGradient='linear(to-l,#FF0080 ,#0dc1ea)' bgClip={'text'}>Panaverse</Text>
          </Heading>
            <Text fontFamily={'Poppins'} mt='30px' mb={'30px'} fontSize='2xl'>
              A One and Quarter years Panaverse DAO Earn as you learn program
            </Text>
            <Button boxShadow={'0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'} borderRadius={'100px'} fontSize='2xl' width={'173px'} height='57px' colorScheme={"pink"} alignItems='center' justifyContent={'center'} px='40px' pt={'15px'} pb="15px">Courses</Button>
        </Flex>
        <Flex >
          <Image src={'/Group 2.png'} height={'715'} width={'568'} position="relative" top={"100px"} left={'0px'}/>
          <Image src={'/rect.png'} alt="portal" height={'905'} width={"837"} position="absolute" left={"630px"} top={'175px'}/>
        </Flex>
      </Flex>
    </Box>
  );
}
