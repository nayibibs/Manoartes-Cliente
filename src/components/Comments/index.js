import { useState } from "react";
import React from "react"
import axios from "axios";
import { Button, Heading, FormControl,FormLabel, Input } from "@chakra-ui/react";



const API_URL = `${process.env.REACT_APP_SERVER_URL}`;


function Comments(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  
  const handleSubmit = (e) => {     
    e.preventDefault();
    const { productoId } = props;
    const requestBody = { name, description, productoId };
 
    axios
      .post(`${API_URL}/${productoId}comments`, requestBody) 
      .then((response) => {
        setName("");
        setDescription("");
        props.refreshForom();
      })
      .catch((error) => console.log(error));
  };

 

  return (
    <div className="comments">
      <Heading>Deja tu comentario</Heading>
     <form onSubmit={handleSubmit}>
     <>
        <FormControl>
              <FormLabel>Nombre</FormLabel>
              <Input ref={initialRef} placeholder='name' value={name}
          onChange={(e) => setName(e.target.value)}/>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Escribe tu comentario</FormLabel>
              <Input placeholder='description' value={description}
          onChange={(e) => setDescription(e.target.value)}/>
            </FormControl>
          

          
            <Button  type="submit" colorScheme='purple.400' mr={3}>
              Salvar
            </Button>
           
        
    </>
    </form>
      
    </div>
  );
}

export default Comments;