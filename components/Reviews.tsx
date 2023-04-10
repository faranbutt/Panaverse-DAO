import { Box, Button, Flex, Heading, HStack, VStack,Text, Image } from "@chakra-ui/react";

import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import {ImQuotesLeft} from "react-icons/im";
export default function Reviews() {
  return (
    <Box p={{ base: "10px", md: "20px" }} pt={{ base: "20px", md: "40px" }}>
      <Flex direction={{base:'column',md:'row'}}>
      <VStack spacing={'20px'}>
  <Heading fontFamily={"Poppins"} fontSize={{base:"3xl",md:"5xl"}} pb="10px">
    Upcoming Events
  </Heading>
  <VStack spacing={4}>
    <Box
      bgGradient="linear(to-r, green.200, pink.500)"
      borderRadius={20}
      px="4"
      py="2"
      alignSelf="stretch"
    >
      <Box
        bgColor={"yellow.400"}
        borderRadius={"30px"}
        fontFamily="Poppins"
        fontSize={{base:"2xl",md:"3xl"}}
        bgGradient="linear(to-r, purple.200, pink.500)"
        alignSelf="flex-start"
        px="3"
        py="1"
      >
        Aug 24
      </Box>
      <VStack
        alignItems="flex-start"
        spacing={1}
        pt="4"
      >
        <Box 
          fontFamily={"Poppins"}
          fontSize={{base:"lg",md:"2xl"}}
        >
          Metavese Workshop
        </Box>
        <HStack>
          <Image src="/clock.png" alt="clock" width={{base: "20px", md: "30px"}} height={{base: "20px", md: "30px"}} />
          <Box fontFamily={"Poppins"} fontSize={{base:"sm",md:"lg"}}>12:00 AM</Box>
          <Image src="/placeholder.png" alt="location" width={{base: "20px", md: "30px"}} height={{base: "20px", md: "30px"}} />
          <Box fontFamily={"Poppins"} fontSize={{base:"sm",md:"lg"}}>Islamabad</Box>
        </HStack>
      </VStack>
      <Flex justifyContent="flex-end">
        <Button
          colorScheme={"red"}
          style={{ width: "fit-content" }}
          mt={4}
          size={{base: "sm", md: "md"}}
        >
          <AiOutlineArrowRight />
        </Button>
      </Flex>
    </Box>
    <Box
      bgGradient="linear(to-r, green.200, pink.500)"
      borderRadius={20}
      px="4"
      py="2"
      alignSelf="stretch"
    >
      <Box
        bgColor={"yellow.400"}
        borderRadius={"30px"}
        fontFamily="Poppins"
        fontSize={{base:"2xl",md:"3xl"}}
        bgGradient="linear(to-r, purple.200, pink.500)"
        alignSelf="flex-start"
        px="3"
        py="1"
      >
        Nov 06
      </Box>
      <VStack
        alignItems="flex-start"
        spacing={1}
        pt="4"
      >
        <Box 
          fontFamily={"Poppins"}
          fontSize={{base:"lg",md:"2xl"}}
        >
          Artificial Intelligence Seminar
        </Box>
        <HStack>
          <Image src="/clock.png" alt="clock" width={{base: "20px", md: "30px"}} height={{base: "20px", md: "30px"}} />
          <Box fontFamily={"Poppins"} fontSize={{base:"sm",md:"lg"}}>12:00 AM</Box>
          <Image src="/placeholder.png" alt="location" width={{base: "20px", md: "30px"}} height={{base: "20px", md: "30px"}} />
          <Box fontFamily={"Poppins"} fontSize={{base:"sm",md:"lg"}}>Lahore</Box>
  </HStack>
  </VStack>
  <Flex justifyContent="flex-end">
  <Button
  colorScheme={"red"}
  style={{ width: "fit-content" }}
  mt={4}
  size={{base: "sm", md: "md"}}
  >
  <AiOutlineArrowRight />
  </Button>
  </Flex>
  </Box>
  </VStack>
  </VStack>
  <VStack p={{base: '20px', md: '100px'}}>
  <Heading fontFamily={"Poppins"} fontSize={{base: '3xl', md: '5xl'}} pb="15px">
    Student Feedback
  </Heading>
  <VStack mt={{base: '20px', md: '100px'}} bgGradient="linear(to-r, green.200, pink.500)" px={{base: '10px', md: '30px'}} borderRadius={30} pt={'50px'}>
    <Box pos={'relative'} top={{base: '-50px', md: '60px'}}>
      <Image src='/profile.jpg' alt='review' width={{base: '100px', md: '150px'}} height={{base: '100px', md: '150px'}} style={{borderRadius:"50%"}}/>
      <Box position={{base: 'static', md: 'relative'}} top={{base: '0', md: '20px'}} left={{base: '0', md: '25px'}}> 
        <Text as='h5' fontFamily={"Poppins"}>Faran Taimoor Butt</Text>
        <Text as='h6'>Full Stack Engineer</Text>
      </Box>
    </Box>
    <HStack p={{base: '20px', md: '100px'}} alignItems={{base: 'center', md: 'flex-start'}}>
      <ImQuotesLeft size={50}/>
      <Text textAlign={{base: 'center', md: 'left'}} fontSize={{base: 'sm', md: 'xl'}}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque illum dolorem dolore dolores rerum, optio maxime, et placeat fugit, natus magnam quaerat doloremque deserunt aperiam eligendi quasi quas odio sint.
      </Text>
    </HStack>            
  </VStack>
</VStack>

      </Flex>
    </Box>
  );
}
