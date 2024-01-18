import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <Box
    bg="#f5f5f5"
    width="100%"
      height="3rem"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Flex width="80%">
        <Text fontSize=".875rem" fontWeight="400" width="7rem">Adeyemi</Text>
        <Divider textColor="#000" orientation="vertical" />
        <Text fontSize=".875rem" fontWeight="400" width="5rem">About</Text>
        <Divider orientation="vertical" />
        <Text fontSize=".875rem" fontWeight="400" width="7rem">Projects</Text>
        <Divider orientation="vertical" />
        <Text fontSize=".875rem" fontWeight="400" width="">Education & Experience </Text>
      </Flex>
    </Box>
  );
};

export default Navbar;
