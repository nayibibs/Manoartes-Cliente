import React, { useState } from "react";
import { login } from "../services/auth";
import { useNavigate } from "react-router-dom";
import "./Signup";
import * as PATHS from "../utils/paths";
import * as USER_HELPERS from "../utils/userToken";
import {  Button,  Checkbox,  Flex,  FormControl,  FormLabel,  Heading,  Input,  Link,  Stack,  Image,} from '@chakra-ui/react';
import LoginImagen from "../images/login.jpg"

export default function LogIn({ authenticate }) {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const { username, password } = form;
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function handleInputChange(event) {
    const { name, value } = event.target;

    return setForm({ ...form, [name]: value });
  }

  function handleFormSubmission(event) {
    event.preventDefault();
    const credentials = {
      username,
      password,
    };
    login(credentials).then((res) => {
      if (!res.status) {
        return setError({ message: "Invalid credentials" });
      }
      USER_HELPERS.setUserToken(res.data.accessToken);
      authenticate(res.data.user);
      navigate(PATHS.HOMEPAGE);
    });
  }

  return (
    <div>
     <form onSubmit={handleFormSubmission} className="signup__form">
     <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'} color={'purple.500'}>Inicie sesión en su cuenta</Heading>
          <FormControl id="username">
            <FormLabel>Nombre de usuario</FormLabel>
            <Input id="input-username"
          type="text"
          name="username"
          placeholder="username"
          value={username}
          onChange={handleInputChange}
          required/>
      </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input id="input-password"
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleInputChange}
          required
          minLength="8" />
           {error && (
          <div className="error-block">
            <p>Hubo un error al enviar el formulario:</p>
            <p>{error.message}</p>
          </div>
        )}

          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
              <Checkbox>Recuerdame</Checkbox>
            </Stack>
            <Button colorScheme={'purple'} variant={'solid'}>
            Iniciar sesión
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <img src={LoginImagen}  width={800} height={500}/>
      </Flex>
    </Stack>
  ;

      </form>
    </div>
  );
}
