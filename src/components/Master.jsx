import { Box, Button, Container, Flex, Grid, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Item from '../ui/Item'

const Master = () => {
  return (
    <Box bg={"#0E0E18"} pb={"100px"}>
      <Container maxWidth={"1170px "}>
        <Item 
        heading={"3 kunlik Master-Klassda"}
        text={"siz quyidagi bilimlarga ega bolasiz:"}
        image={"/desk.png"}
        fontH={"700"}
        fontT={'300'}
        />
        <Grid gridTemplateColumns={{md:"repeat(3,1fr)", base:"repeat(1, 1fr)"}} pt={"34px"}>
          <Flex gap={"28px"} align={"center"} py={"46px"} pl={"30px"} pr={"70px"}>
            <Image src='/check.png'/>
            <Text color={"#FFFFFF"} fontWeight={"300"}>Grafik dizayner bolish uchun nimalarni bilish kerak</Text>
          </Flex>
          <Flex gap={"28px"} align={"center"} py={"46px"} pl={"30px"} pr={"70px"}>
            <Image src='/check.png'/>
            <Text color={"#FFFFFF"} fontWeight={"300"}>Fotoshopdagi boshlang’ich barcha elementlarni qo’llash</Text>
          </Flex>
          <Flex gap={"28px"} align={"center"} py={"46px"} pl={"30px"} pr={"70px"}>
            <Image src='/check.png'/>
            <Text color={"#FFFFFF"} fontWeight={"300"}>Rasmlarni PNG holatga o’tkazish (Orqa fonni kesish)</Text>
          </Flex>
          <Flex gap={"28px"} align={"center"} py={"46px"} pl={"30px"} pr={"70px"} position={"relative"}>
            <Image src='/check.png'/>
            <Text color={"#FFFFFF"} fontWeight={"300"}>Bonus</Text>
            <Image position={"absolute"} src='/podarok.png' right={"0"}/>
          </Flex>
          <Flex gap={"28px"} align={"center"} py={"46px"} pl={"30px"} pr={"70px"}>
            <Image src='/check.png'/>
            <Text color={"#FFFFFF"} fontWeight={"300"}>O’zingizni go’yoki Dubayda turgandek qilib dizayn qilish</Text>
          </Flex>
          
          <Flex flexDir={"column"} align={"end"} gap={"14px"} py={"46px"} pl={"30px"} pr={"70px"}>
            <Flex gap={"8px"}>
              <Text
                fontSize={"24px"}
                color={"#fff"}
                lineHeight={"26.4px"}
                fontWeight={"300"}
                as={"del"}
              >
                300.000 SO'M
              </Text>
              <Text
                fontSize={"24px"}
                color={"#45CCFF"}
                lineHeight={"26.4px"}
                fontWeight={"700"}
                textTransform={"uppercase"}
              >
                Bepul
              </Text>
            </Flex>
            <Button
              w={"169px"}
              h={"36px"}
              bg={"#45CCFF"}
              color={"#fff"}
              borderRadius={"18px"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              ISHTIROK ETISH
            </Button>
          </Flex>
        </Grid>
      </Container>
    </Box>
  )
}

export default Master