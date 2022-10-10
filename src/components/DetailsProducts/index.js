import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
  } from '@chakra-ui/react';
  import { MdLocalShipping } from 'react-icons/md';
  import Card4 from "../../images/card4.jpg"
  
  
  export default function DetailsProducts() {
    return (
      <Container maxW={'7xl'}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}>
          <Flex>
            <Image
              rounded={'md'}
              alt={'product image'}
              src={
                Card4
              }
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={{ base: '100%', sm: '400px', lg: '500px' }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                color={"purple.600"}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                Bandeja
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
                      Descripción:
                    </Text>{' '}
                    
                  </ListItem>
                  <ListItem>
                    <Text as={'span'}  color={"purple.600"} fontWeight={'bold'}>
                      Precio:
                    </Text>{' '}
                    $300.00
                  </ListItem>
                  <ListItem>
                    <Text as={'span'}  color={"purple.600"} fontWeight={'bold'}>
                      Material:
                    </Text>{' '}
                    madera
                  </ListItem>
                  
                </List>
              </Box>
            </Stack>
  
            
            <Stack direction="row" alignItems="center" color={"purple.600"} justifyContent={'center'}>
              <MdLocalShipping />
              <Text>Una semana de entrega</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    );
  }