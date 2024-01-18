import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <Box bg="#f5f5f5" width="100%">
        <hr></hr>
      <Box  width="60%" mx="auto" height="11rem">
        <Heading mt="2rem" fontSize="1.2rem" fontWeight="700" textAlign="left"> ABOUT ME</Heading>
        <Text mt="1rem" fontSize="1rem" fontWeight="500" textAlign="left">
          Hello, I am a full-stack developer with a focus on building web
          applications. I am highly curious about the nature of tech, and a
          dilligent problem solver. Outside of coding, I love to hike the great
          outdoors, play some volleyball, and climb boulders.
        </Text>
      </Box>
    </Box>
  );
};

export default About;
