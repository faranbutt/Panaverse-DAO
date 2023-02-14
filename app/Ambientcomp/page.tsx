'use client'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { SiTypescript, SiAirbnb,SiNextdotjs,SiKubernetes,SiTerraform,SiRust,SiAmazonalexa} from "react-icons/si";
import { HiCurrencyDollar } from "react-icons/hi";
import Planeticon from '@/components/Planeticon';
import { Heading, Text,Box } from '@chakra-ui/react';
import Image from 'next/image';

export default function Cloud(){
  return (
    <Box background={
      "linear-gradient(to left, #7928CA, #FF0080)"}>
      <Box fontFamily={'Poppins'} fontSize={'7xl'} color={'whiteAlpha.900'} padding={'20px'} display={'flex'} justifyContent={'center'} mb='10px'>Ambient Computing and IOT Roadmap</Box>
      <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'linear-gradient(to right, var(--chakra-colors-green-200), var(--chakra-colors-pink-500))', color: '#fff' , borderRadius:'20px',padding:'30px'}}
    contentArrowStyle={{ borderRight: '7px solid  pink' }}
    date="13 weeks"
    iconStyle={{ background: 'purple', color: '#fff' }}
    icon={<SiTypescript />}
  >
    <Heading className="vertical-timeline-element-title">Quarter I (core)</Heading>
    <Heading className="vertical-timeline-element-subtitle">Object Oriented Programming using Typescript</Heading>
    <Text color={'blackAlpha.900'}>
    We will start the program by learning the fundamentals of Object-Oriented programming using JavaScript and TypeScript. We will also understand the latest Web trends i.e. Web 3.0 and Metaverse concepts and try to understand their working from the perspective of the users.
    </Text>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'linear-gradient(to right, var(--chakra-colors-green-200), var(--chakra-colors-pink-500))', color: '#fff',borderRadius:'20px',padding:'30px' }}
    contentArrowStyle={{ borderRight: '7px solid  pink' }}
    date="13 weeks"
    iconStyle={{ background: 'pink', color: '#000' }}
    icon={<SiNextdotjs />}
  >
    <Heading className="vertical-timeline-element-title">Quarter II (Core)</Heading>
    <Heading className="vertical-timeline-element-subtitle">Developing Planet-Scale Web 2.0 Serverless Cloud Apps and APIs using Next.js 13</Heading>
    <Text color={'blackAlpha.900'}>
    The objective of this course is to teach participants to develop customer-facing planet-scale Websites, Full-Stack Apps and templates, Dashboards, and Muti-Cloud Serverless APIs. By the end of the quarter, the participants will be able to develop and deploy web platforms like Facebook, Shopify, etc.. 
    </Text>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'linear-gradient(to right, var(--chakra-colors-green-200), var(--chakra-colors-pink-500))', color: '#fff',borderRadius:'20px',padding:'30px' }}
    contentArrowStyle={{ borderRight: '7px solid pink' }}
    date="13 weeks"
    iconStyle={{ background: 'purple', color: '#fff' }}
    icon={<HiCurrencyDollar />}
  >
    <Heading className="vertical-timeline-element-title">Quarter III (Core)</Heading>
    <Heading className="vertical-timeline-element-subtitle">Dollar Making Bootcamp - Full-Stack Template and API Product Development</Heading>
    <Text color={'blackAlpha.900'}>
    You will be assigned to build a template which we will sell on Theme Forest and Panaverse DAO marketplace. The Panaverse DAO will receive 25% share on the sale of the template which will be used to manage the platform. An additional 15% will be spent on marketing the template. 60% of the revenues will be distributed to the developer through the Panaverse DAO in the form of Panaverse tokens. 
    </Text>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'linear-gradient(to right, var(--chakra-colors-green-200), var(--chakra-colors-pink-500))', color: '#fff',borderRadius:'20px',padding:'30px' }}
    contentArrowStyle={{ borderRight: '7px solid  pink' }}
    date="13 weeks"  
    iconStyle={{ background: 'pink', color: '#000' }}
    icon={<SiAmazonalexa />}
  >
    <Heading className="vertical-timeline-element-title">Quarter IV</Heading>
    <Heading className="vertical-timeline-element-subtitle">Ambient Computing with Voice Assistants and Matter Devices</Heading>
    <Text color={'blackAlpha.900'}>
    Ambient computing, also commonly referred to as ubiquitous computing, is the concept of blending computing power into our everyday lives in a way that is embedded into our surroundings - invisible but useful. In a multi-device world, people don't want to spend their life fussing with technology. An ambient approach gets the tech out of your way so you can live your life while getting the help you need. It doesn't matter what device you're using, what context you're in, whether you're talking, typing, or tapping. The technology in your life works together seamlessly. Ambient computing uses all aspects of modern-day technology, including voice assistants, artificial intelligence, sensors, connectivity, cloud computing and more.
    </Text>

  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'linear-gradient(to right, var(--chakra-colors-green-200), var(--chakra-colors-pink-500))', color: '#fff',borderRadius:'20px',padding:'30px' }}
    contentArrowStyle={{ borderRight: '7px solid  pink' }}
    date="13 weeks"
    iconStyle={{ background: 'purple', color: '#fff' }}
    icon={<SiRust />}
  >
    <Heading className="vertical-timeline-element-title">Quarter V</Heading>
    <Heading className="vertical-timeline-element-subtitle">Embedded Programming using C and Rust</Heading>
    <Text color={'blackAlpha.900'}>
    This is an introductory course about using the C and Rust Programming Languages on "Bare Metal" embedded systems, such as Microcontrollers. We will start by introducing embedded systems and move on to learn the C++ and Rust programming languages. We'll learn about basic programming concepts using C and Rust, then we will explore key concepts in electronics, microcontrollers, and embedded programming.
    </Text>
  </VerticalTimelineElement> 
</VerticalTimeline>
    </Box>
  );
}