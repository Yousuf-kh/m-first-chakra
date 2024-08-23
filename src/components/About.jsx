import { Box, Container, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import Item from "../ui/Item";

const About = () => {
  return (
    <Box bg={"#0E0E18"} py={"100px"}>
      <Container maxW={"1170px"}>
        <Item
          heading={"ISMOIL MAHMUDJONOV"}
          text={"HAQIDA"}
          fontH={300}
          fontT={700}
          image={"/receipt.png"}
        />
        <Flex display={{md: "row", base:"column"}} pt={'53px'} gap={'30px'} align={'stretch'} >
          <Box w={{md:'270px',base:'100%'}} borderRadius={"4px"} bg={"#fff"} position={"relative"} mb={{md:"0", base:"40px"}}>
            <Box boxShadow={' 4px 2px 24px 0px rgba(34, 60, 80, 0.2);'} bg={'#fff'} borderRadius={"full"} position={"absolute"} right={"16px"} top={"-20px"} >
              <Image p={"13px"} src="/comment-heart.png" />
            </Box>
            <Text
              pt={"28px"}
              pb={"16px"}
              pr={"24px"}
              pl={"16px"}
              color={"#3F4266"}
              fontSize={'18px'}
            >
              Grafik dizayn sohasida 120 dan oshiq <Box as="span" fontWeight={'700'}>muvaffaqiyatli</Box> loyihalar.
            </Text>
          </Box>
          <Box w={{md:'270px',base:'100%'}}  mb={{md:"0", base:"40px"}} borderRadius={"4px"} bg={"#fff"} position={"relative"}>
            <Box boxShadow={' 4px 2px 24px 0px rgba(34, 60, 80, 0.2);'} bg={'#fff'} borderRadius={"full"} position={"absolute"} right={"16px"} top={"-20px"} >
              <Image p={"13px"} src="/comparison.png" />
            </Box>
            <Text
              pt={"28px"}
              pb={"16px"}
              pr={"24px"}
              pl={"16px"}
              color={"#3F4266"}
              fontSize={'18px'}
            >
             Grafik dizayn sohasida  <Box as="span" fontWeight={'700'}>4 yillik tajriba</Box> 
            </Text>
          </Box>
          <Box w={{md:'270px',base:'100%'}}  mb={{md:"0", base:"40px"}} borderRadius={"4px"} bg={"#fff"} position={"relative"}>
            <Box boxShadow={' 4px 2px 24px 0px rgba(34, 60, 80, 0.2);'} bg={'#fff'} borderRadius={"full"} position={"absolute"} right={"16px"} top={"-20px"} >
              <Image p={"13px"} src="/comment-heart.png" />
            </Box>
            <Text
              pt={"28px"}
              pb={"16px"}
              pr={"24px"}
              pl={"16px"}
              color={"#3F4266"}
              fontSize={'18px'}
            >
             10 dan ortiq <Box as="span" fontWeight={'700'}>Logo</Box>lar muallifi 
             </Text>
             
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default About;
