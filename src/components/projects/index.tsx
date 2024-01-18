import { Box, Heading, Text } from "@chakra-ui/react";
import React, { useState } from "react";

type Props = {};

const Projects = (props: Props) => {
  const [click, setClick] = useState(false);
  const [clickedItemId, setClickedItemId] = useState(null);
  const projectsData = [
    {
      id: 1,
      name: "DeepiscesStore",
      app: "Web Application",
      tools: "React, Javascript, CSS, HTML",
      additionNote:
        "An ecommerce website showcasing modern web development. Utilizes React for dynamic user interfaces, Javascript for client-side scripting, and CSS/HTML for styling and structure. Follows a component-based architecture for modular design, enabling easy maintenance and scalability.",
    },
    {
      id: 2,
      name: "Subbs",
      app: "Web Application",
      tools: "React, Typescript, CSS, HTML, Nestjs",
      additionNote:
        "A comprehensive Fintech application demonstrating the power of TypeScript. Frontend built with React, utilizing TypeScript for static typing and improved code maintainability. CSS and HTML employed for styling and structure. Backend powered by Nestjs, a scalable Node.js framework, providing a robust foundation for handling financial transactions with enhanced security and performance.",
    },
    {
      id: 3,
      name: "Bluberry Beauty Salon",
      app: "Web Application",
      tools: "React, Typescript, CSS, HTML, Nestjs",
      additionNote:
        "A sophisticated Portfolio application for a beauty salon showcasing a full-stack approach. The frontend, developed with React and TypeScript, provides an interactive and seamless user experience. CSS and HTML contribute to a visually appealing design. The backend, powered by Nestjs, implements a microservices architecture, allowing customers to book and schedule appointments. It integrates a payment gateway for secure and efficient transactions. The comprehensive technology stack and architecture ensure a modern, scalable, and feature-rich application.",
    },
  ];

  return (
    <Box bg="#f5f5f5" width="100%">
      <hr></hr>
      <Box width="60%" mx="auto" height="100%">
        <Heading
          mt="2rem"
          fontSize="1.2rem"
          fontWeight="700"
          textAlign="center"
        >
          {" "}
          PROJECTS
        </Heading>

        {projectsData.map((data) => (
          <Box
          onClick={() => setClick(!click)}
            width="90%"
            height="100%"
            p="1rem"
            borderRadius="0.36rem"
            mt="1rem"
          >
            <Text mt="1rem" fontSize="1rem" fontWeight="500" textAlign="left">
              Projects name: {data.name}
            </Text>
            <Text mt="1rem" fontSize="1rem" fontWeight="500" textAlign="left">
              Appication: {data.app}
            </Text>
            <Text mt="1rem" fontSize="1rem" fontWeight="500" textAlign="left">
              Tools Used: {data.tools}
            </Text>
            {click && <Text  mt="1rem" fontSize="1rem" fontWeight="500" textAlign="left"> Information: {data.additionNote}</Text>}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Projects;
