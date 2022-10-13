import { useState, useEffect } from "react";
import axios from "axios";
import CardProducts from "../components/CardProducts";
import { Heading, SimpleGrid, } from "@chakra-ui/react";




 
const API_URL = `${process.env.REACT_APP_SERVER_MY_URL}`;
 
 
function ProductList() {
  const [productos, setProductos] = useState([]);
 
  const getAllProductos = () => {
    axios
      .get(`${API_URL}/api/productosbase`)
      .then((response) => setProductos(response.data))
      .catch((error) => console.log(error));
  };
 
  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getAllProductos();
  }, [] );
 
 
  return (
    <div className="ProductList">
         
      <Heading as='h5' size='lg' color="purple.500">LISTA DE PRODUCTOS</Heading>
      <SimpleGrid columns={3} m={"40px"} >
      
        {productos.map((productos) => {
          
          return (
          <CardProducts key={productos._id} {...productos}></CardProducts>

      
          );
        })}     
        </SimpleGrid>

        
    </div>
  );
}
 
export default ProductList;