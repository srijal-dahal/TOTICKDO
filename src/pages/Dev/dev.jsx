import {
  Center,
  Flex as FlexBox,
  HStack,
  Link as ChakraLink,
  Text,
  IconButton,
  Box,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { RiMessage2Fill } from "react-icons/ri";
import { TiLocation } from "react-icons/ti";
import { IoMdCall, IoMdMail } from "react-icons/io";
import Template from "../Template";
import Info from "_assets/info.png";
import Yuvraj from "_assets/yuvraj.png";
import { Image } from "_components";
const Dev = () => {
  const links = [
    {
      name: "Facebook",
      icon: <FaFacebook size={20} />,
      link: "https://www.facebook.com/Yuvraj.Srijal.Dahal",
      bg: "blue.700",
    },
    {
      name: "Github",
      icon: <FaGithub size={20} />,
      link: "https://github.com/digital-dahal",
      bg: "gray.800",
    },
    {
      name: "Instagram",
      icon: <FaInstagram size={20} />,
      link: "https://www.instagram.com/yuvrajdl/",
      bg: "red.500",
    },
  ];
  return (
    <Template
      display={"flex"}
      flexDirection={"column"}
      padding={3}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <FlexBox justifyContent="space-between" alignItems={"center"}>
        <Image src={Yuvraj} h={"250px"} w={"250px"} resizeMode={"contain"} />
        <FlexBox
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"flex-start"}
        >
          <Text fontSize="4xl" fontWeight="bold" mb={"-5px"}>
            Yuvraj Dahal
          </Text>
          <Text
            fontSize={"1.1rem"}
            fontWeight={300}
            color={"secondary.50"}
            ml={"5px"}
            mb={"5px"}
          >
            Website Developer
          </Text>

          <HStack>
            {links.map((link, index) => {
              return (
                <ChakraLink href={link.link} isExternal key={index}>
                  <IconButton
                    icon={link.icon}
                    bg={link.bg}
                    size="md"
                    color={"white"}
                    _hover={"none"}
                    _focus={"none"}
                    _active={"none"}
                  />
                </ChakraLink>
              );
            })}
          </HStack>
        </FlexBox>
      </FlexBox>
      <Box
        bg={useColorModeValue("secondary.100", "secondary.200")}
        rounded="md"
        h={"200px"}
        w={"100%"}
        boxShadow="0px 2px 4px 4px rgba(0, 0, 0, 0.15)  "
        overflow="hidden"
        p={3}
      >
        <Text textAlign={"justify"}>
          Totickdo is a basic to-do web application created to learn about
          programming.It is created by using a MERN stack. If you want to
          contact me now then you can do so by :
        </Text>
        <VStack mt={3} alignItems={"flex-start"}>
          <HStack>
            <IoMdMail size={20} />
            <ChakraLink href={"mailto:iamyuvraj456@gmail.com"}>
              iamyuvraj456@gmail.com
            </ChakraLink>
          </HStack>
          <HStack>
            <TiLocation size={20} />
            <Text>Nepal,Biratnagar</Text>
          </HStack>
          <HStack>
            <IoMdCall size={20} />
            <ChakraLink href={"tel:+9779817005194"}>+9779817005194</ChakraLink>
          </HStack>
        </VStack>
      </Box>
    </Template>
  );
};
export default Dev;
