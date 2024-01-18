import { Box, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import reactIcon from "../../assets/react.png";
import nodeIcon from "../../assets/nodejs.png";
import javaIcon from "../../assets/javascript.png";
import typeIcon from "../../assets/javascript.png";
import cssIcon from "../../assets/css.png";
import htmlIcon from "../../assets/html.png";
import gitIcon from "../../assets/git.png";
import reduxIcon from "../../assets/redux.png";
import mongoIcon from "../../assets/mongodb.png";
import postgressIcon from "../../assets/postgresql.png";
import postIcon from "../../assets/postman.png";

import React from "react";

type Props = {};

const Skill = (props: Props) => {
  const datas = [
    {
      img: reactIcon,
      title: "React",
    },
    {
      img: nodeIcon,
      title: "Node",
    },
    {
      img: javaIcon,
      title: "Javascript",
    },
    {
      img: javaIcon,
      title: "Typescript",
    },
    {
      img: cssIcon,
      title: "CSS",
    },
    {
      img: htmlIcon,
      title: "HTML",
    },
    {
      img: gitIcon,
      title: "Git",
    },
    {
      img: reduxIcon,
      title: "Redux",
    },
    {
      img: mongoIcon,
      title: "MongoDB",
    },
    {
      img: postgressIcon,
      title: "Postgress",
    },
    {
      img: postIcon,
      title: "Postman",
    },
  ];
  return (
    <Box width="100%" bg="#1E1E1E">
      <Box mx="auto" width="70%" p="1rem" height="100%">
        <Heading fontSize="1.2rem" fontWeight="700" textAlign="left">
          Skills
        </Heading>
        <Text mt="1rem" fontSize="1rem" fontWeight="500" textAlign="left">
          My primary skills are...
        </Text>
        <SimpleGrid mx="auto" minChildWidth='120px' spacing='4rem'>
          {datas.map((data) => (
            <Box mx="auto" borderRadius="1rem" p="0.75rem" width="9rem" height="9rem" bg="#454545">
              <Image mx="auto" width="5rem" height="5rem" src={data.img} />

              <Text mt="1rem" textColor="#fff" fontSize="0.75rem" textAlign="center">{data.title}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Skill;
