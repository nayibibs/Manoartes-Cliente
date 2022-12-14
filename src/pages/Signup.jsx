import React, { useState } from "react";
import { signup } from "../services/auth";
import { useNavigate } from "react-router-dom";
import "./auth.css";
import * as PATHS from "../utils/paths";
import * as USER_HELPERS from "../utils/userToken";
import {  Flex,  Box,  FormControl,  FormLabel,  Input,  InputGroup,  HStack,  InputRightElement,  Stack,  Button,
  Heading,  Text,  useColorModeValue,  Link, Accordion,
  } from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

export default function Signup({ authenticate }) {
  const [form, setForm] = useState({
    username: "",
    password: "",
    email: "",
    
  });
  const { username, password, email } = form;
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
      email,
      
    };
    signup(credentials).then((res) => {
      if (!res.status) {
        // unsuccessful signup
        console.error("Signup was unsuccessful: ", res);
        return setError({
          message: "Signup was unsuccessful! Please check the console.",
        });
      }
      // successful signup
      USER_HELPERS.setUserToken(res.data.accessToken);
      authenticate(res.data.user);
      navigate(PATHS.HOMEPAGE);
    });
  }
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
     <form onSubmit={handleFormSubmission} className="auth__form">
     <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('purple.100', 'purple.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'} color="purple.800">
           ¬°Inscribete ya!
          </Heading>
          </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'purple.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>Nombre</FormLabel>
                  <Input id="input-username"
                    type="text"
                    name="username"
                    placeholder="Text"
                    value={username}
                    onChange={handleInputChange}
                    required />
                </FormControl>
              </Box>
              </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" name="email"  value={email} placeholder="email"  onChange={handleInputChange}/>
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password </FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'}  id="input-password"
                   name="password"
                   placeholder="Password"
                   value={password}
                   onChange={handleInputChange}
                   required
                   minLength="8"/>
                  {error && (
                    <div className="error-block">
                      <p>Hubo un error al enviar el formulario:</p>
                      <p>{error.message}</p>
                    </div>
                  )}
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
            <Button className="button__submit" type="submit"
              size="lg"
                bg={'purple.400'}
                color={'white'}
                _hover={{
                  bg: 'purple.500',
                }}>
          Registrate!
        </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
              ¬ŅYa eres usuario? <Link href="/auth/login" color={'purple.500'}>Acceder</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    </form>
    </div>
  );
}
