'use client'
import './globals.css';
import { ChakraProvider,Box } from '@chakra-ui/react';
import Navbar from '@/components/NavBar';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
      
        <ChakraProvider>
        <Box
        background={
          "radial-gradient(92.76% 293.17% at 0% 100%, rgba(53, 50, 200, 0.7) 0%, rgba(131, 64, 155, 0.544435) 18.62%, rgba(248, 106, 149, 0.384873) 37.71%, rgba(255, 255, 255, 0) 64.46%, rgba(139, 199, 255, 0.42) 100%)"
        }
        pb='20px'
      > 
        <nav><Navbar /></nav>
        </Box>
          {children}
          </ChakraProvider>
        </body>
    </html>
  )
}
