import { Box, Container, Heading, Stack,Text} from '@chakra-ui/react'
import { Image} from '@chakra-ui/react';
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.png";

const headingOptions = {
pos:"absolute",
left:"50%",
top:"50%",
transform:"translate(-50%,-50%)",
textTransform:"uppercase",
p:"4",
size:"3xl"
}

const Home = () => {
  return (
    <Box w={'full'}
    >
<MyCarousel />

<Container maxW ={'container.xl'} minH={'100vh'} p={'16'}>
<Heading textTransform={'uppercase'} 
py={'2'} 
w={'fit-content'}
borderBottom={'2px solid'}
m={'auto'}
>Services</Heading>

<Stack 
h={'full'}
p={'4'}
alignItems={'center'}
direction={['column','row']}
>
  <Image src={img5} h={['40','400']} filter={'hue-rotate(180deg)'}  />
  <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4','16']} alignItems={'center'}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis obcaecati quia repellendus possimus voluptatibus facere, earum atque! Earum veritatis eveniet voluptas delectus natus doloremque, aliquid ut, obcaecati aspernatur corporis atque?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit voluptatibus aliquam temporibus ipsum laboriosam, illo quaerat neque atque necessitatibus voluptates rem optio et, iste esse autem fugit sed accusamus impedit voluptate a tempore. Temporibus ipsam, dolore voluptatibus ea, vitae, deleniti earum modi harum quas nulla beatae consequatur voluptatem exercitationem totam!
  </Text>
</Stack>

</Container>

    </Box>
  )
}
const MyCarousel = () => {
  return (
    <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showThumbs={false} showArrows={false}>

      <Box w="full" h="100vh">
        <Image src={img1} h={'full'}
        w={'full'} objectFit={'cover'}/>
        <Heading bgColor="blackAlpha.600" color="white" {...headingOptions}>
          watch the future
        </Heading>
      </Box>

      <Box w="full" h="100vh">
        <Image src={img2} h={'full'}
        w={'full'} objectFit={'cover'}/>
        <Heading bgColor="whiteAlpha.900" color="black" {...headingOptions}>
          future is gaming
        </Heading>
      </Box>

      <Box w="full" h="100vh">
        <Image src={img3} h={'full'}
        w={'full'} objectFit={'cover'}/>
        <Heading bgColor="whiteAlpha.600" color="black" {...headingOptions}>
          gaming on console
        </Heading>
      </Box>

      <Box w="full" h="100vh">
        <Image src={img4} h={'full'}
        w={'full'} objectFit={'cover'}/>
        <Heading bgColor="whiteAlpha.600" color="black" {...headingOptions}>
          night life is cool
        </Heading>
      </Box>
      
    </Carousel>
  );
};
export default Home