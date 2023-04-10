import { Box, Flex, VStack, Text, HStack, Button } from "@chakra-ui/react";
import React from "react";
import { useAnimation } from "@codechem/chakra-ui-animations";

export default function Moto() {
  const animation = useAnimation('wobble', { duration: 2000, iterationCount: 1 });

  return (
    <Box _hover={{ animation }}>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        px={{ base: '20px', md: '60px' }}
        borderRadius={{ base: '10px', md: '30px' }}
        bgGradient="linear(to-r, green.200, pink.500)"
      >
        <Box flex="1" p={{ base: '20px', md: '52px' }}>
          <Text fontFamily="Poppins" fontSize={{ base: '3xl', md: '5xl' }}>
            Program in a Nutshell
          </Text>
          <Text fontFamily="Poppins" fontSize={{ base: 'sm', md: 'xl' }}>
            In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom and will begin doing so within six months of the program's beginning. It resembles a cross between a corporate venture and an educational project.
          </Text>
        </Box>
        <HStack p={'10px'}>
          <Button size="lg" colorScheme="red">
            Apply
          </Button>
          <Button size="lg">Visit PIAIC</Button>
        </HStack>
      </Flex>
    </Box>
  );
}
