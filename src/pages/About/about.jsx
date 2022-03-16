import {
  Center,
  Flex as FlexBox,
  HStack,
  Link,
  Text,
  Avatar,
  IconButton,
  VStack,
} from "@chakra-ui/react";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import Template from "../Template";
import Info from "_assets/info.png";
import Yuvraj from "_assets/yuvraj.png";
import { Image } from "_components";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <Template padding={5}>
      <Center flexDirection={"column"} w="100%" h="70%">
        <Avatar name="Yuvraj Dahal" src={Yuvraj} size="2xl" />
        <Text fontSize="2xl" fontWeight="bold">
          Yuvraj Dahal
        </Text>
        <Text fontSize={"1rem"} fontWeight={300} color={"secondary.50"} mb={1}>
          Website Developer
        </Text>

        <HStack>
          <Link
            as={Link}
            href={"https://www.facebook.com/Yuvraj.Srijal.Dahal"}
            isExternal
          >
            <IconButton
              icon={<FaFacebook size={20} />}
              bg="blue.700"
              size="md"
              _hover={"none"}
              _focus={"none"}
              _active={"none"}
            />
          </Link>
          <Link as={Link} href={"https://github.com/digital-dahal"} isExternal>
            <IconButton
              icon={<FaGithub size={20} />}
              bg="gray.800"
              size="md"
              _hover={"none"}
              _focus={"none"}
              _active={"none"}
            />
          </Link>
          <Link
            as={Link}
            href={"https://www.instagram.com/yuvrajdl/"}
            isExternal
          >
            <IconButton
              icon={<FaInstagram size={20} />}
              bg="red.500"
              size="md"
              _hover={"none"}
              _focus={"none"}
              _active={"none"}
            />
          </Link>
        </HStack>
      </Center>
    </Template>
  );
};
export default About;
