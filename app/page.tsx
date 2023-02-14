"use client";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Navbar from "@/components/NavBar";
import Main from "@/components/Main";
import { Box, Divider } from "@chakra-ui/react";
import Stats from "@/components/Stats";
import Intro from "@/components/Intro";
import Moto from "@/components/Moto";
import Courses from "@/components/Courses";
import Outcome from "@/components/Outcome";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Box>
      <Box
        background={
          "radial-gradient(92.76% 293.17% at 0% 100%, rgba(53, 50, 200, 0.7) 0%, rgba(131, 64, 155, 0.544435) 18.62%, rgba(248, 106, 149, 0.384873) 37.71%, rgba(255, 255, 255, 0) 64.46%, rgba(139, 199, 255, 0.42) 100%)"
        }
        backgroundImage="url('/bg.png')"
        backgroundSize={"cover"}
        backgroundPosition="center"
        pb={"250px"}
      >
        <Main />
      </Box>
      <Box bgGradient="linear(to-l, #7928CA, #FF0080)" p="40px">
        <Intro />
        <Box pb={"40px"} w="100%">
          <Stats />
        </Box>
        <Box m={"50px"}>
          <Moto />
        </Box>
        <Box>
          <Courses />
        </Box>
        <Box>
          <Outcome />
        </Box>
        <Box>
          <Reviews />
        </Box>
        <Box></Box>
      </Box>
      <Footer />
    </Box>
  );
}
