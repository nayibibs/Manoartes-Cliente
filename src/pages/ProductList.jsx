import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AddProductos from "./AddProducts";
import { Heading } from "@chakra-ui/react";

 
const API_URL = "http://localhost:5005";
 
 
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
      <AddProductos refreshProductos={getAllProductos} />
        {productos.map((productos) => {
          return (
            <div className="ProductoCard" key={productos._id} >
              <Link to={`/productosbase/${productos._id}`}>
              <Heading as='h5' size='sm' color="purple.500">{productos.title}</Heading>
            </Link>
            </div>
          );
        })}     
       
    </div>
  );
}
 
export default ProductList;