import { Box, Button, Container, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Hero = () => {
  return (
    <Box bgImage={{md:"url(/bg.png)",base:'url(/bg2.png)'}} h={{md:"499px",base:'620px'}} bgRepeat={"no-repeat"} bgSize={"cover"} bgPosition={{md:"top",base:'center'}}>
      <Flex maxW={"1170px"} mx={"auto"} h={"499px"} align={"center"}>
        <Box w={"510px"}>
          <Flex justify={"space-between"}>
            <Flex  align={"center"}> 
              <Text px={"10px"} py={"4px"} bg={"#ccc"} borderRadius={"2px"} textTransform={"uppercase"} fontSize={"24px"}>
                20-21-22-iyun
              </Text>
            </Flex>
            <Flex align={{md:"center",base:'top'}} gap={"10px"}>
              <Text fontSize={"24px"} color={"#5B6375"}>20:00</Text>
              <Image src={"/clock.png"} />
              <Button w={"82px"} h={"24px"} bg={"#EF3833"} color={"#FFF"} fontSize={"12px"} borderRadius={"12px"} _hover={{bg:'crimson'}}>ONLINE</Button>
            </Flex>
          </Flex>
          <Heading color={"#fff"} fontSize={{md:"80px",base:'40px'}} fontWeight={"700"}>Grafik Dizayn</Heading>
          <Text fontSize={"40px"} textTransform={"uppercase"} color={"#fff"} fontWeight={"300"} letterSpacing={"12.5px"}>Sohasiga kirish</Text>
          <Flex align={"center"} gap={"20px"}>
            <Image src={"/zap.png"} />
            <Box color={"#fff"} fontSize={"24px"}>
              <Text fontWeight={"300"} lineHeight={"26.4px"} >Ismoil Mahmudjonovdan</Text>
              <Text fontWeight={"700"} lineHeight={"26.4px"}>Bepul Master-Klass</Text>
            </Box>
          </Flex>
        </Box>

      </Flex>
    </Box>
  )
}

export default Hero