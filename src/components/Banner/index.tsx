import { Box, Flex, Text, Image } from "@chakra-ui/react";
import React from "react";
import stack from "../../assets/full_stack.png";
import profile from "../../assets/profile_pics.jpg";
import backgroundPic from "../../assets/title-bg.png";
import link from "../../assets/linkedin.png"
import git from "../../assets/github.png"

type Props = {};

const Banner = (props: Props) => {
  return (
    <Box width="100%" mx="auto">
      <Flex>
        <Box
          style={{
            backgroundImage: `url(${backgroundPic})`,
            backgroundSize: "cover", 
            backgroundPosition: "center", 
            height: "90vh",
        
          }}
          width={{base:"100%", md:"75%"}}
        >
          <Box mt="15rem" ml="15%" maxWidth="40rem" width="80%">
            <Text textAlign="left" textColor="#fff" fontSize={{md:"2rem", base:"1rem"}} fontWeight="500">
              Hello, I am
            </Text>
            <Text textAlign="left" textColor="#fff" my="1rem" fontSize={{md:"3rem", base:"1rem"}} fontWeight="700">
              AKINYELE ADEYEMI
            </Text>
            <Text textAlign="left" textColor="#fff" fontSize={{md:"2rem", base:"1rem"}} fontWeight="500">
              Full-Stack Web Developer
            </Text>
          </Box>
        </Box>

        <Box bg="#1E1E1E" display={{md:"block", base:"none"}} height="90vh" width="25%">
          <Box mx="auto" mt="5rem">
            <Box mx="auto" width="7rem" height="7rem">
              <Image borderRadius="5rem" objectFit="cover" src={profile} />
            </Box>
            <Box mx="auto">
              <Text
              textColor="#fff" 
                textAlign="center"
                my="1rem"
                fontSize="1rem"
                fontWeight="700"
              >
                AKINYELE ADEYEMI
              </Text>
              <Text 
              textColor="#fff" textAlign="center" fontSize="1rem" fontWeight="500">
                Full-Stack Web Developer
              </Text>
              <Box mt="3rem" mx="auto" width="5rem" height="5rem">
                <Image objectFit="cover" src={stack} />
              </Box>

              <Box>
                <Text textColor="#fff" textAlign="center" fontSize="0.75rem" fontWeight="500">akinyele.adeyemi9005@gmail.com</Text>
                <Text textColor="#fff" textAlign="center" fontSize="0.75rem" fontWeight="500">+2348144616094</Text>

                <Flex mt="2rem" width="25%" mx="auto">
                    <Box bg="white" width="2rem" height="2rem" p="0.1rem" borderRadius="3rem">
                        <Image objectFit="contain" src={link} />
                    </Box>
                    <Box ml="1rem" bg="white" width="2rem" height="2rem" p="0.1rem" borderRadius="3rem">
                        <Image objectFit="contain" src={git} />
                    </Box>
                </Flex>
              </Box>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};
export default Banner;