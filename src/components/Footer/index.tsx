import { Box, Flex, Image, Spacer, Text } from "@chakra-ui/react";
import React from "react";

import link from "../../assets/linkedin.png";
import git from "../../assets/github.png";

type Props = {};

const Footer = (props: Props) => {
  return (
    <Box width="100%">
      <Box my="2rem" width="70%" mx="auto">
        <Flex>
          <Box>
            <Text
              textColor="#000"
              textAlign="left"
              fontSize="0.75rem"
              fontWeight="500"
            >
              Want to reach me?
            </Text>
            <Text
              textColor="#000"
              textAlign="left"
              fontSize="0.75rem"
              fontWeight="500"
            >
              akinyele.adeyemi9005@gmail.com
            </Text>
            <Text
              textColor="#000"
              textAlign="left"
              fontSize="0.75rem"
              fontWeight="500"
            >
              +2348144616094
            </Text>
          </Box>
          <Spacer />
          <Box>
            <Flex mt="1rem">
              <Box
                bg="#f5f5f5"
                width="2rem"
                height="2rem"
                p="0.1rem"
                borderRadius="3rem"
              >
                <Image objectFit="contain" src={link} />
              </Box>
              <Box
                ml="1rem"
                bg="#f5f5f5"
                width="2rem"
                height="2rem"
                p="0.1rem"
                borderRadius="3rem"
              >
                <Image objectFit="contain" src={git} />
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;
