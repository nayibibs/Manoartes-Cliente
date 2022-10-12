import {
    Box,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    SimpleGrid,
    Button,
  } from '@chakra-ui/react';
 import {Link} from "react-router-dom"
 

  const IMAGE =
  'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';


export default function CardProducts(props) {
    console.log(props)
 return (
    <SimpleGrid columns={3} margin={10}>
<Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'330px'}
        bg={useColorModeValue('', 'purple.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
          rounded={'lg'}
          mt={0}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${IMAGE})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image
            rounded={'lg'}
            height={280}
            width={300}
            objectFit={''}
            src={props.imageUrl}
          />
        </Box>
        <Stack  m={3} >
          <Heading color={'white.800'} fontSize={'2xl'} textTransform={'uppercase'} marginTop={50} >
            {props.title}
          </Heading>
          <Heading color={"white.800"} fontSize={'sm'} fontFamily={'body'} fontWeight={500} marginTop={1200}>
          <p  marginTop={1200}>{props.description}</p>
          </Heading>
          <Stack>
            <Text  color={"purple.800"} fontWeight={800} fontSize={'xl'} >$ 
              {props.price}
            </Text>
          </Stack>
        </Stack>
        
        <Button size='xs' colorScheme='purple'> 
            <Link to={`/productosbase/${props._id}`}>Detalles                    
            </Link>
      </Button>
     
      </Box>
      </SimpleGrid>
      );
    }
        
            
 
             