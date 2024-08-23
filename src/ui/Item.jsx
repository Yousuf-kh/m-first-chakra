import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Item = ({heading, text, fontH, fontT, image}) => {
  return (
  <Box >
    <Flex gap={"9px"} align={"center"}>
      <Image src={image}/>
      <Box width={"140px"} bg={"#fff"} height={"2px"}></Box>
      <Box width={"2px"} bg={"#fff"} height={"2px"}></Box>
      <Box width={"5px"} bg={"#fff"} height={"2px"}></Box>
    </Flex>
    <Box>
      <Heading pt={"15px"} fontSize={{md:"40px", base:"28px"}} lineHeight={"44px"} color={"#fff"} fontWeight={fontH}>{heading}</Heading>
      <Text fontSize={{ md:"40px", base:"28px"}} color={"#fff"} lineHeight={"44px"} fontWeight={fontT}>{text}</Text>
    </Box>
  </Box>
  )
}

export default Item