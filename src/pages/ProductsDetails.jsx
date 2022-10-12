import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import React from 'react'
import { Button, Stack, Center, Flex, Heading, Text, Badge,} from '@chakra-ui/react';
import DetailsProducts from "../components/DetailsProducts";
import Comments from "../components/Comments";


 
const API_URL = `${process.env.REACT_APP_SERVER_MY_URL}`

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
    {productos?.comments?.map((comment) =>{
      return <div key={comment._id} className="comment-card"> <h3><strong><em>{comment.name}</em></strong>: </h3><p className='p-comments'> {comment.description}</p></div>
    })}
    
    <Stack>
      
      <DetailsProducts  key={productoId} {...productos}/>
    </Stack>

  
      <Stack direction='row' spacing={2} alignItems={'start'} justifyContent={'end'} className="content-btn">
       <Link to={`/productosbase/edit/${productoId}`}>
      
      <Button  type="submit" colorScheme='purple' variant='solid' className="btn-products-details">
         Editar
  </Button>
      </Link> 
  <Link to="/productosbase">
      <Button  type="submit" colorScheme='purple' variant='solid' className="btn-products-details">
         Regresar
     </Button>
  </Link>
  /</Stack>
      
         <Comments productoId={productoId}></Comments>
    </div>
  );
}
 
export default ProductsDetails;