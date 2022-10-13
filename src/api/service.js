import axios from "axios";
 
const api = axios.create({
  // make sure you use PORT = 5005 (the port where our server is running)
  baseURL: `${process.env.REACT_APP_SERVER_URL}`
  // withCredentials: true // => you might need this option if using cookies and sessions
});
 
const errorHandler = (err) => {
  throw err;
};
 
const getArtesania = () => {
  return api.get("/artesania")
    .then((res) => res.data)
    .catch(errorHandler);
};
 
const uploadImage = (file) => {
  return api.post("/artesania/upload", file)
    .then(res => {
     
    return res.data
    })
    .catch(errorHandler);
};
 
const uploadProductoBase = (file) => {
  return api.post("/productosbase/upload", file)
    .then(res => {
     
    return res.data
    })
    .catch(errorHandler);
};


const createArtesania= (newArtesania) => {
  return api.post("/artesania", newArtesania)
    .then(res => res.data)
    
};
 
export default {
  getArtesania,
  uploadImage,
  createArtesania,
  uploadProductoBase,
  
};