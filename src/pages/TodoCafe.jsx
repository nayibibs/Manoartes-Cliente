import React from 'react'
import {
    Badge,
    Button,
    Center,
    Flex,
    Heading,
    Image,
    Link,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import Card1 from "../images/card1.jpg"
  
  export default function TodoCafe() {
    return (
      <Center py={6}>
        <Stack
          borderWidth="1px"
          borderRadius="lg"
          w={{ sm: '100%', md: '540px' }}
          height={{ sm: '476px', md: '20rem' }}
          direction={{ base: 'column', md: 'row' }}
          bg={useColorModeValue('purple.100', 'purple.900')}
          boxShadow={'2xl'}
          padding={4}>
          <Flex flex={1} bg="purple.200">
            <Image
              objectFit="cover"
              boxSize="100%"
              src={Card1}
            />
          </Flex>
          <Stack
            flex={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p={1}
            pt={2}>
            <Heading fontSize={'2xl'} fontFamily={'body'}>
              Café para 4
            </Heading>
            <Text
              textAlign={'center'}
              color={useColorModeValue('gray.700', 'gray.400')}
              px={3}>
              Mini bandeja con 4 tasitas de café
           </Text>
            <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
              <Badge
                px={2}
                py={1}
                bg={useColorModeValue('purple.50', 'purple.800')}
                fontWeight={'400'}>
                #art
              </Badge>
              <Badge
                px={2}
                py={1}
                bg={useColorModeValue('purple.50', 'purple.800')}
                fontWeight={'400'}>
                #lovecafe
              </Badge>
              <Badge
                px={2}
                py={1}
                bg={useColorModeValue('purple.50', 'purple.800')}
                fontWeight={'400'}>
                #manualidades
              </Badge>
            </Stack>
  
            <Stack
              width={'100%'}
              mt={'2rem'}
              direction={'row'}
              padding={2}
              justifyContent={'space-between'}
              alignItems={'center'}>
              <Button
                flex={1}
                fontSize={'sm'}
                rounded={'full'}
                color={'purple.500'}
                _focus={{
                  bg: 'purple.200',
                }}
                _hover={{
                    bg: 'purple.500'
                }}>
                Message
              </Button>
              <Button
                flex={1}
                fontSize={'sm'}
                rounded={'full'}
                bg={'purple.400'}
                color={'pink.100'}
                boxShadow={
                  '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                }
                _hover={{
                  bg: 'purple.500',
                }}
                _focus={{
                  bg: 'purple.500',
                }}>
                Follow
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Center>
    );
  }