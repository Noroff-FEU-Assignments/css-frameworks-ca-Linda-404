import React from 'react'
import Container from "react-bootstrap/Container";
import CarouselHome from "./CarouselHome";
import ContentTabs from './ContentTabs';
import ContentAccordion from './ContentAccordion';
import Footer from "../Footer";


function Home() {
  return (
    <>
        <CarouselHome />

        <Container>
            <h1>we do yay things</h1>
            <p>Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a rutrum justo eros pretium libero. 
                Nullam vel enim id mauris eleifend finibus et ac orci. Aliquam metus massa, aliquam quis arcu sit amet, consectetur faucibus urna. 
                Suspendisse massa diam, efficitur eu massa euismod, pretium lacinia magna. Donec mi orci, sollicitudin in luctus a, varius eget massa.
            </p>
        </Container>

        <Container>
            <ContentAccordion />
        </Container>
        
        <Container>
            <div className="d-none d-md-block">
                <ContentTabs />
            </div>
        </Container>
        
        <Footer />
    </>
  )
}

export default Home
