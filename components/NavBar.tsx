"use client";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
  Heading,
  HStack,
  useColorMode,
} from "@chakra-ui/react";
import { HamburgerIcon, MoonIcon, SunIcon, SearchIcon } from "@chakra-ui/icons";
import Facebook from "./Facebook";
import Twitter from "./Twitter";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.200", "gray.700");
  const router = useRouter();
  
  return (
    <Box>
      <Flex justify={"space-between"} pt="51px">
        <Flex pl={"100px"}>
          <Image
            src={"/a.png"}
            alt="logo"
            width={"50"}
            height={"50"}
            pr={"5"}
          />
          <Link href='/' style={{fontFamily:'Poppins',fontWeight:'700',fontSize:'30px',lineHeight:'45px',textDecoration:'none'}}>Panaverse</Link>
        </Flex>
        <HStack spacing={"6"}>
          <Link href='/' style={{fontFamily:'Poppins',fontWeight:'700',fontSize:'16px',lineHeight:'24px'}}>Home</Link>
          <Link href='/#courses' style={{fontFamily:'Poppins',fontWeight:'700',fontSize:'16px',lineHeight:'24px'}}>Courses</Link>
          <Link href='/' style={{fontFamily:'Poppins',fontWeight:'700',fontSize:'16px',lineHeight:'24px'}}>About</Link>
          <Link href='/' style={{fontFamily:'Poppins',fontWeight:'700',fontSize:'16px',lineHeight:'24px'}}>Careers</Link>
        </HStack>
        <Flex pr={"130px"}>
          <Link href='https://www.facebook.com/groups/panaverse'>
          <Button width={"fit-content"}  marginBottom={4} mr={2}>
            <Facebook />
          </Button>
          </Link>
          <Link href='https://twitter.com/Panaverse_edu'>
          <Button width={"fit-content"}  marginBottom={4} mr={2}>
            <Twitter />
          </Button>
          </Link>
          <Button
            
            onClick={toggleColorMode}
            style={{ width: "fit-content" }}
            marginBottom={4}
          >
            {" "}
            {formBackground == "gray.200" ? <SunIcon /> : <MoonIcon />}
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}
