import { useState } from "react";
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
  const [showMenu, setShowMenu] = useState(false);
  
  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Box>
      <Flex justify={"space-between"} pt="51px">
        <Flex pl={{base:"30px",md:"100px"}} align="center">
          <Image
            src={"/a.png"}
            alt="logo"
            width={{base:'30',md:"50"}}
            height={{base:"30",md:"50"}}
            pr={"5"}
          />
          <Link
            href="/"
            style={{
              fontFamily: "Poppins",
              fontWeight: "700",
              fontSize: "30px",
              lineHeight: "45px",
              textDecoration: "none",
            }}
          >
            Panaverse
          </Link>
        </Flex>
        <Flex pr={{base:"30px",md:"100px"}} align="center">
          <IconButton
            icon={<HamburgerIcon />}
            variant="ghost"
            onClick={handleToggleMenu}
            mr={4}
            aria-label="Toggle navigation menu"
            display={{ base: "flex", md: "none" }}
          />
          <HStack spacing={{ base: "0", md: "6" }} display={{ base: "none", md: "flex" }}>
            <Link
              href="/"
              style={{
                fontFamily: "Poppins",
                fontWeight: "700",
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              Home
            </Link>
            <Link
              href="/#courses"
              style={{
                fontFamily: "Poppins",
                fontWeight: "700",
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              Courses
            </Link>
            <Link
              href="/"
              style={{
                fontFamily: "Poppins",
                fontWeight: "700",
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              About
            </Link>
            <Link
              href="/"
              style={{
                fontFamily: "Poppins",
                fontWeight: "700",
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              Careers
            </Link>
          </HStack>
          <Popover isOpen={showMenu} placement="bottom-end">
            <PopoverTrigger>
              <Box display={{ base: "flex", md: "none" }}>
                {/* <Button
                  variant="ghost"
                  mr={4}
                  aria-label="Toggle color mode"
                  onClick={toggleColorMode}
                >
                  {formBackground == "gray.200" ? <SunIcon /> : <MoonIcon />}
                </Button> */}
              </Box>
            </PopoverTrigger>
            <PopoverContent w="100vw" maxW="sm"
            minW="xs" bg={formBackground} borderColor={formBackground}>
            <Box p={4}>
            <Stack spacing={4}>
            <Link
            href="/"
            style={{
            fontFamily: "Poppins",
            fontWeight: "700",
            fontSize: "16px",
            lineHeight: "24px",
            textDecoration: "none",
            color: "inherit",
            }}
            >
            Home
            </Link>
            <Link
            href="/#courses"
            style={{
            fontFamily: "Poppins",
            fontWeight: "700",
            fontSize: "16px",
            lineHeight: "24px",
            textDecoration: "none",
            color: "inherit",
            }}
            >
            Courses
            </Link>
            <Link
            href="/"
            style={{
            fontFamily: "Poppins",
            fontWeight: "700",
            fontSize: "16px",
            lineHeight: "24px",
            textDecoration: "none",
            color: "inherit",
            }}
            >
            About
            </Link>
            <Link
            href="/"
            style={{
            fontFamily: "Poppins",
            fontWeight: "700",
            fontSize: "16px",
            lineHeight: "24px",
            textDecoration: "none",
            color: "inherit",
            }}
            >
            Careers
            </Link>
            <HStack spacing={2}>
            <Facebook />
            <Twitter />
            <Button
                               variant="ghost"
                               aria-label="Toggle color mode"
                               onClick={toggleColorMode}
                             >
            {formBackground == "gray.200" ? <SunIcon /> : <MoonIcon />}
            </Button>
            </HStack>
            </Stack>
            </Box>
            </PopoverContent>
            </Popover>
            </Flex>
            </Flex>
            </Box>
            );
            }
