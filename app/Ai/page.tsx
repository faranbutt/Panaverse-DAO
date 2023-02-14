'use client'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { SiTypescript, SiAirbnb,SiNextdotjs,SiPython,SiTensorflow} from "react-icons/si";
import { HiCurrencyDollar } from "react-icons/hi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { TbAugmentedReality } from "react-icons/tb";
import Planeticon from '@/components/Planeticon';
import { Heading, Text,Box } from '@chakra-ui/react';
import Image from 'next/image';
export default function Meta(){
  return (
    <Box background={
      "linear-gradient(to left, #7928CA, #FF0080)"}>
      <Box fontFamily={'Poppins'} fontSize={'7xl'} color={'whiteAlpha.900'} padding={'20px'} display={'flex'} justifyContent={'center'} mb='10px'>Artifical Intelligence Roadmap</Box>
      <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'linear-gradient(to right, var(--chakra-colors-green-200), var(--chakra-colors-pink-500))', color: '#fff' , borderRadius:'20px',padding:'30px'}}
    contentArrowStyle={{ borderRight: '7px solid  pink' }}
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
    iconStyle={{ background: 'pink', color: '#000' }}
    icon={<SiPython />}
  >
    <Heading className="vertical-timeline-element-title">Quarter IV</Heading>
    <Heading className="vertical-timeline-element-subtitle">Developing Planet-Scale Intelligent APIs and Python Programming</Heading>
    <Text color={'blackAlpha.900'}>
    Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems. The AI and Deep Learning Specialization is a foundational program that will aid in your comprehension of deep learning's potential, difficulties, and effects as well as equip you to take part in the creation of cutting-edge AI technology.
    </Text>

  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'linear-gradient(to right, var(--chakra-colors-green-200), var(--chakra-colors-pink-500))', color: '#fff',borderRadius:'20px',padding:'30px' }}
    contentArrowStyle={{ borderRight: '7px solid  pink' }}
    iconStyle={{ background: 'purple', color: '#fff' }}
    icon={<SiTensorflow />}
  >
    <Heading className="vertical-timeline-element-title">Quarter V</Heading>
    <Heading className="vertical-timeline-element-subtitle">Deep Learning and MLOps</Heading>
    <Text color={'blackAlpha.900'}>
    This course will help you understand the capabilities, challenges, and consequences of deep learning and prepare you to participate in the development of leading-edge AI technology. We will finish the program by learning how to envision, create, and maintain integrated systems that run constantly in production.
    </Text>
  </VerticalTimelineElement> 
</VerticalTimeline>
    </Box>
  );
}