import { Box, Button, Flex, Heading, HStack, VStack,Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import {ImQuotesLeft} from "react-icons/im";
export default function Reviews() {
  return (
    <Box p="20px" pt={"40px"}>
      <HStack>
        <VStack spacing={'20px'}>
          <Heading fontFamily={"Poppins"} fontSize="5xl" pb="10px">
            Upcoming Events
          </Heading>
          <HStack
            bgGradient="linear(to-r, green.200, pink.500)"
            borderRadius={20}
            p="5px"
          >
            <Box
              p="20px"
              bgColor={"yellow.400"}
              m="10px"
              borderRadius={"30px"}
              fontFamily="Poppins"
              fontSize={"3xl"}
              bgGradient="linear(to-r, purple.200, pink.500)"
            >
              Aug 24
            </Box>
            <Flex borderRadius="20" p={"8px"}>
              <Flex direction={"column"} pr="210px">
                <Box p="5px" fontFamily={"Poppins"}>
                  Metavese Workshop
                </Box>
                <HStack mt="10px">
                  <Box>12:00 AM</Box>
                  <Image src="/clock.png" alt="clock" width={30} height={30} />
                  <Box>Islamabad</Box>
                  <Image
                    src="/placeholder.png"
                    alt="clock"
                    width={30}
                    height={30}
                  />
                </HStack>
              </Flex>

              <Box>
                <Flex alignContent={"flex-end"} pt="20px" pr="20px">
                  <Button
                    colorScheme={"red"}
                    style={{ width: "fit-content" }}
                    marginBottom={4}
                  >
                    <AiOutlineArrowRight />
                  </Button>
                </Flex>
              </Box>
            </Flex>
          </HStack>
          <HStack
            bgGradient="linear(to-r, green.200, pink.500)"
            borderRadius={20}
            p="5px"
          >
            <Box
              p="20px"
              bgColor={"yellow.400"}
              m="10px"
              borderRadius={"30px"}
              fontFamily="Poppins"
              fontSize={"3xl"}
              bgGradient="linear(to-r, purple.200, pink.500)"
            >
              Nov 06
            </Box>
            <Flex borderRadius="20" p={"8px"}>
              <Flex direction={"column"} pr="200px">
                <Box p="5px" fontFamily={"Poppins"}>
                  Aritifical Intelligence Seminar
                </Box>
                <HStack mt="10px">
                  <Box>12:00 AM</Box>
                  <Image src="/clock.png" alt="clock" width={30} height={30} />
                  <Box>Lahore</Box>
                  <Image
                    src="/placeholder.png"
                    alt="clock"
                    width={30}
                    height={30}
                  />
                </HStack>
              </Flex>

              <Box>
                <Flex alignContent={"flex-end"} pt="20px" pr="20px">
                  <Button
                    colorScheme={"red"}
                    style={{ width: "fit-content" }}
                    marginBottom={4}
                  >
                    <AiOutlineArrowRight />
                  </Button>
                </Flex>
              </Box>
            </Flex>
          </HStack>
          <HStack
            bgGradient="linear(to-r, green.200, pink.500)"
            borderRadius={20}
            p="5px"
          >
            <Box
              p="20px"
              bgColor={"yellow.400"}
              m="10px"
              borderRadius={"30px"}
              fontFamily="Poppins"
              fontSize={"3xl"}
              bgGradient="linear(to-r, purple.200, pink.500)"
            >
              Dec 13
            </Box>
            <Flex borderRadius="20" p={"8px"}>
              <Flex direction={"column"} pr="220px">
                <Box p="5px" fontFamily={"Poppins"}>
                  Cloud Computing Workshop
                </Box>
                <HStack mt="10px">
                  <Box>03:14 AM</Box>
                  <Image src="/clock.png" alt="clock" width={30} height={30} />
                  <Box>Lahore</Box>
                  <Image
                    src="/placeholder.png"
                    alt="clock"
                    width={30}
                    height={30}
                  />
                </HStack>
              </Flex>

              <Box>
                <Flex alignContent={"flex-end"} pt="20px" pr="20px">
                  <Button
                    colorScheme={"red"}
                    style={{ width: "fit-content" }}
                    marginBottom={4}
                  >
                    <AiOutlineArrowRight />
                  </Button>
                </Flex>
              </Box>
            </Flex>
          </HStack>
        </VStack>
        <VStack p='100px'>
          <Heading fontFamily={"Poppins"} fontSize="5xl" pb="15px">Student Feedback</Heading>
          <VStack mt='100px' bgGradient="linear(to-r, green.200, pink.500)" px='30px' borderRadius={30}>
            <Box pos={'relative'} top='60px'>
            <Image src='/profile.jpg' alt='review' width={150} height={150} style={{borderRadius:"50%"}}/>
            <Box position={'relative'} top='20px' left='25px'> 
            <Text as='h5' fontFamily={"Poppins"}>Faran Taimoor Butt</Text>
            <Text as='h6'>Full Stack Engineer</Text>
            </Box>
            </Box>
            <HStack p='100px'>
             <ImQuotesLeft size={100}/>
            <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque illum dolorem dolore dolores rerum, optio maxime, et placeat fugit, natus magnam quaerat doloremque deserunt aperiam eligendi quasi quas odio sint.</Text>
            </HStack>            
          </VStack>
        </VStack>
      </HStack>
    </Box>
  );
}
