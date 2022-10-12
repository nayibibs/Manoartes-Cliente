import { useState } from "react";
import axios from "axios";
import {  Input } from '@chakra-ui/react'
import {
  Button,
  Center,
  Heading,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import service from "../api/service"


 
const API_URL = "http://localhost:5005";

 
function AddProductos(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("")
  const [price, setPrice] = useState("")
  const [materials, setMaterials] = useState("")
 
  
  

  const handleFileUpload = (e) => {
    console.log("The file to be uploaded is: ", e.target.files[0]);

   const uploadData = new FormData();

   // imageUrl => this name has to be the same as in the model since we pass
   // req.body to .create() method when creating a new artesania in '/api/productosbase' POST route
   uploadData.append("imageUrl", e.target.files[0]);

   service
     .uploadProductoBase(uploadData)
     .then(response => {
       console.log("response is: ", response);
       // response carries "fileUrl" which we can use to update the state
       setImageUrl(response.fileUrl);
     })
     .catch(err => console.log("Error while uploading the file: ", err));
 };

  const handleSubmit = (e) => {                         
    e.preventDefault();
 
    const requestBody = { title, description, imageUrl, price, materials };
    axios
      .post(`${API_URL}/api/productosbase`, requestBody)
      .then((response) => {
        // Reset the state
        setTitle("");
        setDescription("");
        setImageUrl("")
        setPrice("")
        setMaterials("")
       
      })

      .catch((error) => console.log(error));
  };
 
  
  return (
    <div className="AddProductos">
          
      <form onSubmit={handleSubmit}>
      <Center py={10} mt={50} p={250} className="añadirProducto">
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
          <Stack
            flex={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p={1}
            pt={2}>
            <Heading fontSize={'2xl'} fontFamily={'body'} color={"purple.500"}>
              Añadir un producto
            </Heading>
            <Input type="text"
            focusBorderColor='pink.400'
            placeholder='nombre del producto'
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}/>
              <Input
              type="text"
              name="description"
              placeholder="descripcion del producto"
              focusBorderColor='pink.400'
              value={description}
             onChange={(e) => setDescription(e.target.value)}
              />
             <Input
              type="number"
              name="price"
              placeholder="precio"
              focusBorderColor='pink.400'
              value={price}
             onChange={(e) => setPrice(e.target.value)}
              />  
              <Input
              type="text"
              name="materials"
              placeholder="materiales"
              focusBorderColor='pink.400'
              value={materials}
             onChange={(e) => setMaterials(e.target.value)}
              /> 
               <Stack>
              <Input type='file' name="imagenUrl" 
               onChange={(e) => handleFileUpload(e)}  />
               </Stack> 
                   <img  src={imageUrl}></img>  
              <Button
               type="submit"
                flex={1}
                fontSize={'xl'}
                rounded={'full'}
                color={'purple.500'}
                _focus={{
                  bg: 'purple.200',
                }}
                _hover={{
                    bg: 'purple.500'
                }}>
                Añadir
              </Button>
              </Stack>
              
            </Stack>
            
        </Center>
      </form>
    </div>
  );
}
 
export default AddProductos;