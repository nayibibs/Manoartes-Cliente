import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import the service file since we need it to send/get the data to/from the server
import service from "../api/service";
import { Heading, Stack } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'

function AddArtesania (){
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const navigate = useNavigate();
  
  // ******** this method handles the file upload ********
  const handleFileUpload = (e) => {
     console.log("The file to be uploaded is: ", e.target.files[0]);

    const uploadData = new FormData();

    // imageUrl => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new artesania in '/api/artesanias' POST route
    uploadData.append("imageUrl", e.target.files[0]);

    service
      .uploadImage(uploadData)
      .then(response => {
        console.log("response is: ", response);
        // response carries "fileUrl" which we can use to update the state
        setImageUrl(response.fileUrl);
      })
      .catch(err => console.log("Error while uploading the file: ", err));
  };

  // ********  this method submits the form ********
  const handleSubmit = (e) => {
    e.preventDefault();

    service
      .createArtesania({ title, description, imageUrl,})
      .then(res => {
        

        // Reset the form
        setTitle("");
        setDescription("");
        setImageUrl("");
      
        // navigate to another page
        navigate("/details");
      })
      .catch(err => console.log("Error while adding the new artesania: ", err));
  };

  return (
    <div className="artesanias">
      <Heading size='lg' fontSize='50px' color="purple.500">Descubre lo que necesitas, crea tu pedido</Heading>
      <br/>
      <Heading as='h5' size='sm' color="purple.500">Dejanos saber que deseas y como hacer tu pedido realidad.
      </Heading>
      <br/>
      <form onSubmit={handleSubmit}>
     
      <Stack spacing={4}>
      
      <Input type='text' placeholder='title' value={title} 
          onChange={(e) => setTitle(e.target.value)}/>
      
      <Input type='text' placeholder='description' value={description} 
          onChange={(e) => setDescription(e.target.value)}/>
       
        
       <Input type='file' 
          onChange={(e) => handleFileUpload(e)}  />
          
        
        <button type="submit" className="btn">Salvar el pedido</button>
        </Stack>
      </form>
    </div>
  );
}

export default AddArtesania;
