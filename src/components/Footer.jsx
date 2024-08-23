import { Box, Container, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box bg={"#0E0E18"} py={"40px"}>
      <Container maxW={"1170px"}>
        <Flex justify={{md:"space-between", base:"center"}} align={"center"}>
          <Flex display={{md:"flex", base:"none"}} gap={"24px"} align={"center"}>
            <Image w={"107px"} h={"30px"} src="/logo.png" />
            <Text color={"#ccc"} fontSize={"12px"} lineHeight={"13.2px"}>
              3 yildan ortiq tajribaga ega <br /> grafik dizayner
            </Text>
          </Flex>

          <Flex gap={"60px"} align={"center"}>
            <Flex gap={"10px"} align={"center"}>
              <Image src={"/insta.png"} />
              <Image src={"/telegram.png"} />
              <Image src={"/youtube.png"} />
            </Flex>

            <Flex
              display={{ md: "flex", base: "none" }}
              align={"center"}
              gap={"8px"}
            >
              <Box textAlign={"end"}>
                <Text
                  color={"#414157"}
                  fontSize={"12px"}
                  lineHeight={"11.94px"}
                >
                  Biz bilan bog’laning:
                </Text>
                <Text fontSize={"14px"} color={"#fff"} lineHeight={"13.93px"}>
                  +998 99 821 33 91
                </Text>
              </Box>
              <Image src="/smartphone.png" />
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;