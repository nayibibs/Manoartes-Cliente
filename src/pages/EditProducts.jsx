import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom"
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Link,
    Button,
    Heading,
    useColorModeValue,
  } from '@chakra-ui/react';
 
const API_URL = "http://localhost:5005";
 
function EditProducts(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  
  const { productoId } = useParams();
  const navigate = useNavigate();  

  useEffect(() => {
    axios
      .get(`${API_URL}/api/productosbase/${productoId}`)
      .then((response) => {
        const oneProducto = response.data;
        setTitle(oneProducto.title);
        setDescription(oneProducto.description);
      })
      .catch((error) => console.log(error));
    
  }, [productoId]);
  
  const handleFormSubmit = (e) => {                     
    e.preventDefault();
    // Create an object representing the body of the PUT request
    const requestBody = { title, description };
 
    // Make a PUT request to update the product
    axios
      .put(`${API_URL}/api/productosbase/${productoId}`, requestBody)
      .then((response) => {
        navigate(`/productosbase/${productoId}`)
      });
  };

  const deleteProducto = () => {                    
    // Make a DELETE request to delete the producto
    axios
      .delete(`${API_URL}/api/productosbase/${productoId}`)
      .then(() => {
        // Once the delete request is resolved successfully
        // navigate back to the list of products.
        navigate("/productosbase");
      })
      .catch((err) => console.log(err));
  };  
 
  

  return (
    <div className="EditProducts">
      {/*<h3>Editar el producto</h3>
 
      <form onSubmit={handleFormSubmit}>      
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        
        <label>Description:</label>
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
 
        <button type="submit">Update Product</button>
        <button onClick={deleteProducto}>Delete Producto</button>
      </form>*/}
      <form onSubmit={handleFormSubmit}>  
      <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('purple.100', 'purple.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading color={"purple.300"} fontSize={'4xl'}>Editar el Producto</Heading>
          </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('purple.300', 'purple.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="title">
              <FormLabel>Titulo</FormLabel>
              <Input type="text"
                name="title"
                value={title}
                 onChange={(e) => setTitle(e.target.value)} />
            </FormControl>
            <FormControl id="description">
              <FormLabel>Descripción</FormLabel>
              <Input type="description" name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}/>
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Button 
               type="submit"
                bg={'purple.400'}
                color={'white'}
                _hover={{
                  bg: 'purple.500',
                }}>
                Actualizar
              </Button>
              
              <Button onClick={deleteProducto}
               type="submit"
                bg={'purple.400'}
                color={'white'}
                _hover={{
                  bg: 'purple.500',
                }}>
                Eliminar
              </Button>
               </Stack>
              
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    </form>
    </div>
  );
}
 
export default EditProducts;