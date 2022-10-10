import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
  } from '@chakra-ui/react';
  import { FaInstagram, FaFacebook, } from 'react-icons/fa';
  import logo from "../../images/logo1.png"
 
  
  const Logo = (props) => {
    return (
      <svg
        height={10}
        viewBox="0 0 120 28"
        xmlns={logo}
        {...props}>
      </svg>
    );
  };
  
  const SocialButton = ({
    children,
    label,
    href,
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('purple.100', 'purple.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  export default function Footer() {
    return (
      <footer>
        <Box
        bg={useColorModeValue('purple.50', 'purple.900')}
        color={useColorModeValue('purple.700', 'purple.200')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Logo />
          <Text>© 2022 Manoartes. Todos los derechos reservados</Text>
          <Stack direction={'row'} spacing={6}>
            
            <SocialButton label={'Facebook'} href={'http://facebook.com/manoartes'}>
              <FaFacebook />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'http://instagram.com/manoartescuba'}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
      </footer>
    );
  }