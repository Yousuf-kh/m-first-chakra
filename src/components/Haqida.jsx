import { Box, Button, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const Haqida = () => {
  const texts = [
    "Grafik dizayn qanday sohaligini tushunib olasiz;",
    "Fotoshopda ilk ishlaringizni qila olasiz;",
    "Grafik dizayn orqali daromad qilish yollarini organib olasiz.",
  ];
  return (
    <Box bg={"#0E0E18"} py={"18px"}>
      <Container maxW={"1170px"}>
        <Flex justify={'space-between'} flexDir={{md:'row',base:'column'}} align={{md:'end',base:'start'}}>
          <Box>
            <Heading color={"#63CDF6"} fontWeight={"700"} fontSize={"24px"} lineHeight={"26px"}>3 kunlik Master-Klassda siz:</Heading>
            {texts.map((c) => (
              <Flex key={c} align={"center"} gap={"20px"} pt={'15px'}>
                <Image src="/pocket.png" />
                <Text fontWeight={'300'} fontSize={"24px"} lineHeight={"26px"} color={"#FFFFFF"}>{c}</Text>
              </Flex>
            ))}
          </Box>
          <Box>
          <Flex pt={{md:'0',base:'50px'}} flexDir={"column"} align={'end'} gap={"14px"}>
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
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Haqida;
