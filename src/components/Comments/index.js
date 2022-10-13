import { useState } from "react";
import React from "react"
import axios from "axios";
import { Button, Heading, FormControl,FormLabel, Input, Center, Container, Stack } from "@chakra-ui/react";





const API_URL = `${process.env.REACT_APP_SERVER_URL}`;




function Comments(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  
  
  
  const handleSubmit = (e) => {     
    e.preventDefault();
    const { productoId } = props;
    const requestBody = { name, description, productoId };
 
    axios
      .post(`${API_URL}/productosbase/${productoId}/comments`, requestBody) 
      .then((response) => {
        
        setName("");
        setDescription("");
        props.refreshComments();
        
      })
      .catch((error) => console.log(error));
  };

 
 

  return (
    <div className="comment">
      
      <Heading  mt={0} p={10} fontFamily={"cursive"} color={"purple.400"}>Si te gusta dejanoslo saber</Heading>
      
     <form onSubmit={handleSubmit}>
     <><Center m={2}>
      <Container>
        <FormControl>
              <FormLabel fontFamily={"cursive"} color={"purple.700"}>Nombre</FormLabel>
              <Input type={"text"} placeholder='name' value={name}
          onChange={(e) => setName(e.target.value)}/>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel fontFamily={"cursive"} color={"purple.700"}>Escribe tu comentario</FormLabel>
              <Input type={"text"} value={description}
          onChange={(e) => setDescription(e.target.value)}/>
            </FormControl>
      </Container>
      </Center>
           
            <Button  type="submit" color='purple.500' m={5} mr={3}>
              Opinar
            </Button>
             
        
    </>
    </form>
      
    </div>
  );
}

export default Comments;