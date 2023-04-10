"use client";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function Main() {
  const router = useRouter();

  return (
    <Box position="relative">
      <Flex direction={['column', 'column', 'row']} alignItems={['center', 'center', 'flex-start']}>
        <Flex alignItems={'center'} justifyContent={'center'} mt={['50px', '50px', '300px']} mb={['50px', '50px', '0']} ml={['0', '0', '40px']} direction={'column'} textAlign={['center', 'center', 'left']}>
          <Heading fontFamily={'Poppins'} fontSize={['6xl', '6xl', '8xl']} color="#FFFFFF" lineHeight={['1.2', '1.2', 'none']} mb={['20px', '20px', '0']}>
            Become a Certified Developer with <Text bgGradient='linear(to-l,#FF0080 ,#0dc1ea)' bgClip={'text'}>Panaverse</Text>
          </Heading>
          <Text fontFamily={'Poppins'} fontSize={['lg', 'lg', '2xl']} mt={['30px', '30px', '30px']} mb={['30px', '30px', '0']}>
            A One and Quarter years Panaverse DAO Earn as you learn program
          </Text>
          <Button onClick={()=>router.push('/#courses')} boxShadow={'0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'} borderRadius={'100px'} fontSize={['lg', 'lg', '2xl']} width={['150px', '150px', '173px']} height={['47px', '47px', '57px']} colorScheme={"pink"} alignItems='center' justifyContent={['center', 'center', 'flex-start']} px={['20px', '20px', '40px']} pt={['10px', '10px', '15px']} pb={["10px", "10px", "15px"]} mt={['30px', '30px', '0']}>Courses</Button>
        </Flex>
        <Flex alignItems={['center', 'center', 'flex-start']} justifyContent={['center', 'center', 'flex-start']} direction={'column'}>
          <Image src={'/rect.png'} alt="portal" height={['auto', 'auto', '905']} width={['auto', 'auto', '837']} position={['absolute', 'absolute', 'unset']} left={['unset', 'unset', '630px']} top={['unset', 'unset', '175px']} zIndex={1} />
          <Image src={'/Group 2.png'} alt='Meta' height={['auto', 'auto', '715']} width={['auto', 'auto', '568']} position={['relative', 'relative', 'unset']} top={['unset', 'unset', '100px']} left={['unset', 'unset', '0px']} zIndex={0} />
        </Flex>
      </Flex>
    </Box>
  );


}

