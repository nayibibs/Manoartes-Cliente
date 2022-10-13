import {
  Box,
  Heading,
  Text,
  Stack,
  Container,
  useColorModeValue,
  } from '@chakra-ui/react';


const Testimonial = ({ children }) => {
  return <Box display={"flex"}>{children}</Box>;
};

const TestimonialContent = ({ children }) => {
  return (
    <Stack
       bg={('purple.100', 'purple.100')}
      boxShadow={'lg'}
      display={"flex"}
      p={8}
      rounded={'xl'}
      align={'start'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: ('purple.100', 'purple.100'),
        pos: 'absolute',
        bottom: '-16px',
        left: '3%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }) => {
  return (
    <Heading as={'h3'} fontSize={'xl'} color={"purple.700"} >
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }) => {
  return (
    <Text
      textAlign={'start'}
      color={useColorModeValue('purple.600', 'purple.400')}
      fontSize={'lg'}>
      {children}
    </Text>
  );
};


export default function StyleComment(props) {
 
  return (
  
    
      <Container color={"purple.800"} maxW={'7xl'}  py={16} as={Stack} spacing={12}>
        
        <Stack 
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial display={"flex"}>
            <TestimonialContent>
              <TestimonialText>
             <strong>{props.name}</strong>: {props.description}
              </TestimonialText>
            </TestimonialContent>
            <TestimonialHeading></TestimonialHeading>
            </Testimonial>
        </Stack>
      </Container>
    
  );
}