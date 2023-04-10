import { Box, HStack, VStack, Heading, Text, Button, Flex } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import { useAnimation } from "@codechem/chakra-ui-animations";

export default function Outcome() {
  const animation = useAnimation("shake-y", {
    duration: 15000,
    iterationCount: "infinite",
  });
  return (
    <Box
      p={{ base: "20px", md: "50px" }}
      m="20px"
      backgroundImage="url('/bg4.jpg')"
      backgroundSize={{ base: "contain", md: "cover" }}
      backgroundPosition="center"
      borderRadius={{ base: "0", md: "30px" }}
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
      >
        <VStack textAlign="center" w={{ base: "100%", md: "60%" }}>
          <Heading
            fontFamily="Poppins"
            fontSize={{ base: "3xl", md: "5xl" }}
            color="whiteAlpha.700"
            p="5px"
          >
            Outcome for Participants of the Program{" "}
          </Heading>
          <Box
            bgGradient="linear(to-r, green.200, pink.500)"
            p="20px"
            borderRadius="30px"
          >
            <Text
              fontSize={{ base: "md", md: "2xl" }}
              fontFamily="Poppins"
              fontWeight="100"
              p={{ base: "10px", md: "20px" }}
            >
              The graduates of this program will own products (Full-Stack App
              Templates, AR and VR Experiences, and APIs) that are marketed
              globally by the Panaverse DAO and, if they like, will also be able
              to start off by offering services at a rate of{" "}
              <Box as="span" fontSize={{ base: "lg", md: "2xl" }}>
                $50 per hour ($96,000 per year)
              </Box>
              . This would give Pakistani professionals and students a fantastic
              opportunity to better their financial situation while also giving
              the economy a much-needed boost by expanding software exports.
            </Text>
            <Button p="20px" size="lg" colorScheme="red">
              Enroll Now
            </Button>
          </Box>
        </VStack>
        <Box animation={animation} w={{ base: "100%", md: "40%" }}>
          <Image src="/rocket.png" alt="rocket" width={100} height={100} layout="responsive" />
        </Box>
      </Flex>
    </Box>
  );
}
