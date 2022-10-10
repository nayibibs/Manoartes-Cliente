import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import React from 'react'
import { Button, Stack, Center, Flex, Heading, Text, Badge,} from '@chakra-ui/react';

 
const API_URL = `${process.env.REACT_APP_SERVER_MY_URL}`

function ProductsDetails () {
  const [productos, setProductos] = useState(null);
  const { productoId } = useParams(); 
 
  const getProductos = () => {          
    axios
      .get(`${API_URL}/api/productosbase/${productoId}`)
      .then((response) => {
        const oneProducto = response.data;
        setProductos(oneProducto);
      })
      .catch((error) => console.log(error));
  };
  
  
  useEffect(()=> {               
    getProductos();
  }, [] );

  return (
    <div className="ProductsDetails">
     {productos  && ( 
       <>
       <Center py={6} className="cafe">
        <Stack
          borderWidth="1px"
          borderRadius="lg"
          w={{ sm: '100%', md: '540px' }}
          height={{ sm: '476px', md: '20rem' }}
          direction={{ base: 'column', md: 'row' }}
          bg={useColorModeValue('purple.100', 'purple.900')}
          boxShadow={'2xl'}
          padding={4}
          >
          <Flex flex={1} bg="purple.200">
            <Image
              objectFit="cover"
              boxSize="100%"
              aling="center"
              src={productos.imgenUrl}
              alt={"product image"}
            />
          </Flex>
          <Stack
            flex={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p={1}
            pt={2}>
            <Heading fontSize={'2xl'} fontFamily={'body'}>
              {productos.title}
            </Heading>
            <Text
              textAlign={'center'}
              color={useColorModeValue('gray.700', 'gray.400')}
              px={3}>
              {productos.description}
           </Text>
           <Text
              textAlign={'center'}
              color={useColorModeValue('gray.700', 'gray.400')}
              px={3}> $
              {productos.price}
           </Text>
           <Text
              textAlign={'center'}
              color={useColorModeValue('gray.700', 'gray.400')}
              px={3}> 
              {productos.materials}
           </Text>
            <Stack
              width={'100%'}
              mt={'2rem'}
              direction={'row'}
              padding={2}
              justifyContent={'space-between'}
              alignItems={'center'}>
           
            </Stack>
          </Stack>
        </Stack>
      </Center>

       
       
       
       </>
     )}
      <Link to={`/productosbase/edit/${productoId}`}>
      <Stack direction='column' spacing={2} align='center'>
      
      <Button  type="submit" colorScheme='purple' variant='solid'>
         Editar
  </Button>
  /</Stack>
      </Link> 
      
      <Stack
              width={'100%'}
              mt={'2rem'}
              direction={'center'}
              padding={2}
              justifyContent={'center'}
              alignItems={'center'}>
        <Link to="/productosbase">
      
      <Button  type="submit" colorScheme='purple' variant='solid'>
         Regresar
     </Button>
 
      </Link>
     /</Stack>
    </div>
  );
}
 
export default ProductsDetails;