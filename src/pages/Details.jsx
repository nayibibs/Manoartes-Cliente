import {
  Flex,
  FormControl,
  Heading,
  Stack,
  useColorModeValue,
  
} from '@chakra-ui/react';
import service from '../api/service';
import { useState, useEffect } from 'react';

export default function Details(){
  const [artesania, setArtesania] = useState([]);
  
  useEffect(() => {
    service.getArtesania()
      .then((data) => {
         console.log("data", data);
        setArtesania(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      >

      {artesania &&
        artesania.map((artesanias) => (
          <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        bg={useColorModeValue('purple.100', 'purple.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}>
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
          Productos Pedidos 
        </Heading>
        <FormControl id="producto">
          <Stack direction={['column', 'center']} spacing={6}>
          <img src={artesanias.imageUrl} alt="artesania" width="200" />
          </Stack>
          
        </FormControl>
        <FormControl id="producto" >
        <p>{artesanias.title}</p>
        <p>{artesanias.description}</p>
        </FormControl>
        <FormControl id="description">
         
        </FormControl>
      </Stack>
        ))}
        
    </Flex>
  );
}