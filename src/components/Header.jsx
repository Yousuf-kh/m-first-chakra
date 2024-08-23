import { Box, Container, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Header = () => {
  return (
    <Box bg={"#0E0E18"}>
      <Container maxW={"1170px"}>
        <Flex align={'center'} justify={'space-between'}  h={"60px"}>
          <Flex gap={'25px'} justify={"space-between"} align={"center"}>
            <Image w={"107px"} h={"30px"} src="/logo.png" />
            <Text color={"#ccc"} fontSize={"12px"} lineHeight={"13.2px"}>
              3 yildan ortiq tajribaga ega <br /> grafik dizayner
            </Text>
          </Flex>

          <Flex display={{md:'flex',base:'none'}} align={"center"} gap={"8px"}>
            <Box textAlign={"end"}>
              <Text color={"#414157"} fontSize={"12px"} lineHeight={"11.94px"}>
                Biz bilan bog’laning:
              </Text>
              <Text fontSize={"14px"} color={"#fff"} lineHeight={"13.93px"}>
                +998 99 821 3391
              </Text>
            </Box>
            <Image src="/smartphone.png" />
          </Flex>
        </Flex>
      </Container>

    </Box>
  )
}

export default Header