import * as React from "react"
import {
  ChakraProvider,
  Box,
  theme,
} from "@chakra-ui/react"
import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import About from "./components/about"
import Skill from "./components/skills"
import Projects from "./components/projects"
import Education from "./components/education"
import Footer from "./components/Footer"


export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
        <Navbar />
        <Banner />
        <About />
        <Skill />
        <Projects />
        <Education />
        <Footer />        
    </Box>
  </ChakraProvider>
)
