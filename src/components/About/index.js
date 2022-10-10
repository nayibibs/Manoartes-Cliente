import {  Box, Stack, Text, useColorModeValue } from '@chakra-ui/react';

export default function About() {
  return (
    <Stack
      py={16}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={'center'}
      direction={'column'}>
      <Text
      color={"purple"}
        fontSize={{ base: 'xl', md: '2xl' }}
        textAlign={'center'}
        maxW={'3xl'}>
       Manoartes es un emprendimiento familiar dedicado a la artesania utilitaria; nos caracterizamos por 
       llevar un detalle con  tu estilo que sea util a tu día a día. Tratamos de realizar tus sueños
       porque creemos firmemente en que si lo puedes soñar, lo puedes crear.
      </Text>
      <Box textAlign={'center'}>
        
        <Text fontSize={'xl'} color={useColorModeValue('purple', 'purple')}>
          Manoartes: "un detalle, un estilo, un recuerdo perdurable"
        </Text>
      </Box>
    </Stack>
  );
}