import {
  FormControl,
  Heading,
  Stack,
  Text,
  SimpleGrid,
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
  <SimpleGrid columns={3} margin={0}>  
   
         
      {artesania &&
        artesania.map((artesanias) => (
          
          <Stack 
        spacing={3}
        w={'full'}
        maxW={'md'}
        rounded={'xl'}
        className="caja-product"
        key={artesanias?.title}
        p={6}
        my={6}
        margin={10}>
        
        <FormControl id="producto">
          <Stack  direction={['column', "center"]}   spacing={1}>
          <Image src={artesanias.imageUrl} alt="artesania" width={200} height={200} margin={"auto"}/>
          </Stack>
          
        </FormControl>
        <FormControl id="producto" >
        <Text noOfLines={1} color='purple.600' className='title_product'>{artesanias.title}</Text>
        <Text noOfLines={1} color='purple.600' className='description_product'>{artesanias.description}</Text>
        </FormControl>
       
        
      </Stack>
              ))}
        
   
    </SimpleGrid>
    </div>
  );
}