import { Box, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

type Props = {};

const Education = (props: Props) => {
  const Education = [
    {
      name: "Lizben Private College",
      certificate: "WASSCE",
      date: "2005 - 2010",
    },
    {
      name: "Federal University Agriculture Abeokuta",
      certificate: "first degree",
      date: "2012 - 2018",
    },
  ];

  const Experience = [
    {
      name: "wildFire ng",
      role: "full stack engineer",
      date: "2019 - 2020",
    },
    {
      name: "Subbs",
      role: "full stack engineer",
      date: "2023 - current",
    },
  ];
  return (
    <Box width="100%"  bg="#1E1E1E">
      <Flex direction={{md:"row", base:"column"}} p="1rem" width={{md:"70%", base:"90%"}} mx="auto">
        <Box width={{md:"50%", base:"90%"}} height="100%">
          <Box>
            <Heading
              textColor="#ffffff"
              mt="2rem"
              fontSize="1.2rem"
              fontWeight="700"
              textAlign="left"
            >
              {" "}
              EDUCATION
            </Heading>

            {Education.map((edu) => (
              <Box my="0.5rem" width="90%" borderRadius="0.36rem" bg="#454545" p="1rem">
                <Text
                  textColor="#ffffff"
                  mt="1rem"
                  fontSize="1rem"
                  fontWeight="500"
                  textAlign="left"
                >
                  {edu.date}
                </Text>
                <Text
                  textColor="#ffffff"
                  mt="1rem"
                  fontSize="1rem"
                  fontWeight="500"
                  textAlign="left"
                >
                  {edu.name}
                </Text>
                <Text
                  textColor="#ffffff"
                  mt="1rem"
                  fontSize="1rem"
                  fontWeight="500"
                  textAlign="left"
                >
                  {edu.certificate}
                </Text>
              </Box>
            ))}
          </Box>
        </Box>
        <Box width={{md:"50%", base:"90%"}} height="100%">
          <Box>
            <Heading
              textColor="#ffffff"
              mt="2rem"
              fontSize="1.2rem"
              fontWeight="700"
              textAlign="left"
            >
              {" "}
              EXPERIENCE
            </Heading>

            {Experience.map((edu) => (
               <Box my="0.5rem" width="90%" borderRadius="0.36rem" bg="#454545" p="1rem">
                <Text
                  textColor="#ffffff"
                  mt="1rem"
                  fontSize="1rem"
                  fontWeight="500"
                  textAlign="left"
                >
                  {edu.date}
                </Text>
                <Text
                  textColor="#ffffff"
                  mt="1rem"
                  fontSize="1rem"
                  fontWeight="500"
                  textAlign="left"
                >
                  {edu.name}
                </Text>
                <Text
                  textColor="#ffffff"
                  mt="1rem"
                  fontSize="1rem"
                  fontWeight="500"
                  textAlign="left"
                >
                  {edu.role}
                </Text>
              </Box>
            ))}
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Education;
