import {
  Flex,
  FormControl,
  Heading,
  Stack,
  Text,
  useColorModeValue,
  Wrap,
  Image,
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
   <div>
    <Heading m={10} lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }} color={'purple.500'}>
    Productos Pedidos 
  </Heading>

    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      flexDirection={"center"}  
      spacing={5}>
           
      {artesania &&
        artesania.map((artesanias) => (
          
          <Stack 
        spacing={3}
        w={'full'}
        maxW={'md'}
        bg={useColorModeValue('purple.100', 'purple.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={6}
        margin={10}>
        <Wrap spacing='10px'>
        <FormControl id="producto">
          <Stack  direction={['column', "center"]}   spacing={1}>
          <Image src={artesanias.imageUrl} alt="artesania" width="200" />
          </Stack>
          
        </FormControl>
        <FormControl id="producto" >
        <Text fontSize='lg' noOfLines={1} color='purple.600'>{artesanias.title}</Text>
        <Text fontSize='lg' noOfLines={1} color='purple.600'>{artesanias.description}</Text>
        </FormControl>
       
        </Wrap>
      </Stack>
              ))}
        
    </Flex>
    </div>
  );
}