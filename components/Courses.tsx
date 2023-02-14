import { Box, Grid, Text, Heading, SimpleGrid, HStack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { useAnimation } from '@codechem/chakra-ui-animations';
export default function Courses(){
    const animation = useAnimation('shake-y', { duration: 15000, iterationCount: 'infinite' });
    return (
      <Box id='courses' textAlign={'center'} backgroundImage="url('/bg2.jpg')" backgroundSize={"cover"} backgroundPosition="center" p='50px' borderRadius={30}>
        <Heading fontFamily={'Poppins'} fontSize={'5xl'} p='30px' m='20px' color={'whiteAlpha.700'}>Courses Panaverse Offers</Heading>
        <Box>
            <SimpleGrid columns={[2, null, 3]} spacing={'40px'}>
                <Box bgGradient='linear(to-r, green.200, pink.500)' borderRadius={30} p='30px' alignItems={'center'} _hover={{transform:'scale(0.95) translateZ(0px)'}}>
                    <HStack>
                    <Box>
                    <Heading fontFamily='Poppins' fontSize={'2xl'}>Web 3.0</Heading>                                         
                    <Text fontWeight='100' fontSize={'1xl'} p='5px'>This Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet.</Text>
                    <Link href={'/Web3'} color="red"><Box color={'red.600'} fontStyle="oblique">Learn more →</Box></Link>
                    </Box>
                    <Image src={'/globe.png'} alt="ai" height={'100'} width={'100'} animation={animation}/>
                    </HStack>
                </Box>
                <Box bgGradient='linear(to-r, green.200, pink.500)' borderRadius={30} p='30px' alignItems={'center'} _hover={{transform:'scale(0.95) translateZ(0px)'}}>
                    <HStack>
                    <Box>
                    <Heading fontFamily='Poppins' fontSize={'2xl'}>Metaverse</Heading>                                         
                    <Text fontWeight='100' fontSize={'1xl'} p='5px'>This Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet.</Text>
                    <Link href={'/Web3'} color="red"><Box color={'red.600'} fontStyle="oblique">Learn more →</Box></Link>
                    </Box>
                    <Image src={'/meta.png'} alt="ai" height={'100'} width={'100'}  animation={animation}/>
                    </HStack>
                </Box>
                <Box bgGradient='linear(to-r, green.200, pink.500)' borderRadius={30} p='30px' alignItems={'center'} _hover={{transform:'scale(0.95) translateZ(0px)'}} >
                    <HStack>
                    <Box>
                    <Heading fontFamily='Poppins' fontSize={'2xl'}>Artificial Intelligence</Heading>                                         
                    <Text fontWeight='100' fontSize={'1xl'} p='5px'>The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.</Text>
                    <Link href={'/Ai'} color="red"><Box color={'red.600'} fontStyle="oblique">Learn more →</Box></Link>
                    </Box>
                    <Image src={'/ai.png'} alt="ai" height={'100'} width={'100'}  animation={animation}/>
                    </HStack>
                </Box>
                <Box bgGradient='linear(to-r, green.200, pink.500)' borderRadius={30} p='30px' alignItems={'center'} _hover={{transform:'scale(0.95) translateZ(0px)'}}>
                    <HStack>
                    <Box>
                    <Heading fontFamily='Poppins' fontSize={'2xl'}>Cloud-Native Computing</Heading>                                         
                    <Text fontWeight='100' fontSize={'1xl'} p='5px'>The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.</Text>
                    <Link href={'/Cloudcomp'} color="red"><Box color={'red.600'} fontStyle="oblique">Learn more →</Box></Link>
                    </Box>
                    <Image src={'/cloud.png'} alt="ai" height={'100'} width={'100'} animation={animation} />
                    </HStack>
                </Box>
                <Box bgGradient='linear(to-r, green.200, pink.500)' borderRadius={30} p='30px' alignItems={'center'} _hover={{transform:'scale(0.95) translateZ(0px)'}}>
                    <HStack>
                    <Box>
                    <Heading fontFamily='Poppins' fontSize={'2xl'}>Ambient Computing and IoT</Heading>                                         
                    <Text fontWeight='100' fontSize={'1xl'} p='5px'>Roll your own API to easily connect with other apps or services. Pull in updates.</Text>
                    <Link href={'/Ambientcomp'} color="red"><Box color={'red.600'} fontStyle="oblique">Learn more →</Box></Link>
                    </Box>
                    <Image src={'/iot.png'} alt="ai" height={'100'} width={'100'} animation={animation}/>
                    </HStack>
                </Box>
                <Box bgGradient='linear(to-r, green.200, pink.500)' borderRadius={30} p='30px' alignItems={'center'} justifyContent='center' _hover={{transform:'scale(0.95) translateZ(0px)'}}>
                    <HStack>
                    <Box>
                    <Heading fontFamily='Poppins' fontSize={'2xl'}>Genomics and Bioinformatics</Heading>                                         
                    <Text fontWeight='100' fontSize={'1xl'} p='5px'>TGenomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved</Text>
                    <Link href={'/Genomics'} color="red"><Box color={'red.600'} fontStyle="oblique">Learn more →</Box></Link>
                    </Box>
                    <Image src={'/dna.png'} alt="ai" height={'100'} width={'100'}  animation={animation}/>
                    </HStack>
                </Box>
                <Box bgGradient='linear(to-r, green.200, pink.500)' borderRadius={30} p='30px' alignItems={'center'} _hover={{transform:'scale(0.95) translateZ(0px)'}}>
                    <HStack>
                    <Box>
                    <Heading fontFamily='Poppins' fontSize={'2xl'}>Network Programmability and Automation</Heading>                                         
                    <Text fontWeight='100' fontSize={'1xl'} p='5px'>Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile</Text>
                    <Link href={'/Network'} color="red"><Box color={'red.600'} fontStyle="oblique">Learn more →</Box></Link>
                    </Box>
                    <Image src={'/call.png'} alt="ai" height={'100'} width={'100'}  animation={animation}/>
                    </HStack>
                </Box>               
            </SimpleGrid>           
        </Box>
      </Box>  
    );
}