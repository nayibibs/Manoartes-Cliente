import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import React from 'react'
import {
    Badge,
    Button,
    Center,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';



 
const API_URL = "http://localhost:5005"

function ProductsDetails (props) {
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
      {productos && (
        <>
          <h1>{productos.title}</h1>
          <p>{productos.description}</p>
          
            </>
        
      )}
      <div className='TodoCafe'>
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
              src={props.img}
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
              {props.title}
            </Heading>
            <Text
              textAlign={'center'}
              color={useColorModeValue('purple.700', 'purple.400')}
              px={3}>
              {props.description}
           </Text>
            <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
              <Badge
                px={2}
                py={1}
                bg={useColorModeValue('purple.50', 'purple.800')}
                fontWeight={'400'}>
                #art
              </Badge>
              <Badge
                px={2}
                py={1}
                bg={useColorModeValue('purple.50', 'purple.800')}
                fontWeight={'400'}>
                #lovecafe
              </Badge>
              <Badge
                px={2}
                py={1}
                bg={useColorModeValue('purple.50', 'purple.800')}
                fontWeight={'400'}>
                #manualidades
              </Badge>
            </Stack>
  
            <Stack
              width={'100%'}
              mt={'2rem'}
              direction={'row'}
              padding={2}
              justifyContent={'space-between'}
              alignItems={'center'}>
              <Button
                flex={1}
                fontSize={'sm'}
                rounded={'full'}
                color={'purple.500'}
                _focus={{
                  bg: 'purple.200',
                }}
                _hover={{
                    bg: 'purple.500'
                }}>
                Mensaje
              </Button>
             
            </Stack>
          </Stack>
          
        </Stack>
      </Center>
      
              
      </div>
      
 
      <Link to={`/productosbase/edit/${productoId}`}>
      <Stack direction='column' spacing={2} align='center'>
      
      <Button  type="submit" colorScheme='purple' variant='solid'>
         Editar
  </Button>
  /</Stack>
      </Link> 
      <br/>
      <Link to="/productosbase">
      <Stack direction='column' spacing={2} align='center'>
      <Button  type="submit" colorScheme='purple' variant='solid'>
         Regresar
  </Button>
  /</Stack>
      </Link>
    </div>
  );
}
 
export default ProductsDetails;