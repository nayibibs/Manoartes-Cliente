import "../App.css";
import React from 'react';
import Slider from "../components/Slider/index"
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';
import Footer from "../components/Footer/index"
import About from "../components/About";



const Feature = ({ title, text, icon }) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'blue.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text color={"purple.800"} fontWeight={800}>{title}</Text>
      <Text color={'purple.600'} fontWeight={500}>{text}</Text>
    </Stack>
  );
};

export default function HomePage() {
 
  return (
    <div className="App">
      <Slider/>
      
      <About/>
      <Box  >
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={20} mx={20} className="services">
        <Feature
          icon={<Icon as={FcAssistant} w={10} h={10} className="icon"/>}
          title='Contactanos'
          text ={
            'Si quieres un regalo especial, Manoartes te lo presenta'
          }
          
        />
        
        <Feature
          icon={<Icon as={FcInTransit} w={10} h={10} className="icon"/>}
          title={'Mensajerias'}
          text={
            'Una vez ordenado tu pedido, puedes recibirlo en casa'
          }
          
        />
      </SimpleGrid>
      <Footer/>
    </Box>
       </div>    
  );
}


