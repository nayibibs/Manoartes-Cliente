import {
    Box,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    List,
    ListItem,
  } from '@chakra-ui/react';
  import { MdLocalShipping } from 'react-icons/md';
  
  
  
  export default function DetailsProducts(props) {
    

    return (
      <Container maxW={'7xl'}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}
          className="details-box">
          <Flex>
            <Image
            resize={'containt'}
              rounded={'md'}
              alt={'product image'}
              src={
               props.imageUrl
              }
              objectFit={'coer'}
              align={'start'}
              w={'90%'}
              h={{ base: '100%', sm: '400px', lg: '500px' }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                textalign={'start'}
                fontWeight={600}
                color={"purple.600"}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                {props.title}
              </Heading>
            </Box>
  
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('purple.200', 'purple.600')}
                />
              }>
             
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('purple.500', 'purple.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  Detalles del Producto
                </Text>
  
                <List spacing={2}>
                  <ListItem>
                    <Text  as={'span'}  color={"purple.600"} fontWeight={'bold'}>
                      Descripcion:
                    </Text>{' '}
                    {props.description}
                  </ListItem>
                  <ListItem>
                    <Text as={'span'}  color={"purple.600"} fontWeight={'bold'}>
                      Precio:
                    </Text>{' '}
                    $ {props.price}
                  </ListItem>
                  <ListItem className="details-box">
                    <Text as={'span'}  color={"purple.600"} fontWeight={'bold'}>
                      Material:
                    </Text>{' '}
                    {props.materials}
                  </ListItem>
                  
                </List>
              </Box>
            </Stack>
  
            
            <Stack direction="row" alignItems="start" color={"purple.600"} justifyContent={'start'}>
              <MdLocalShipping />
              <Text textAlign={'start'}>Una semana de entrega</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    );
  }