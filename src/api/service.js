import axios from "axios";
 
const api = axios.create({
  // make sure you use PORT = 5005 (the port where our server is running)
  baseURL: "http://localhost:5005/api"
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
      console.log (res.data)
    return res.data
    })
    .catch(errorHandler);
};
 
const uploadProductoBase = (file) => {
  return api.post("/productobase/upload", file)
    .then(res => {
      console.log (res.data)
    return res.data
    })
    .catch(errorHandler);
};
const createArtesania= (newArtesania) => {
  return api.post("/artesania", newArtesania)
    .then(res => res.data)
    .catch(errorHandler);
};
 
export default {
  getArtesania,
  uploadImage,
  createArtesania,
  uploadProductoBase
};