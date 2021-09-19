import React from 'react'
import Container from 'react-bootstrap/Container';
import NavButtons from './NavButtons';
import ContentNews from './ContentNews';
import Footer from '../Footer';

function News() {
  return (
    <>
        <Container>
            <h1>News</h1>
        </Container>

        <Container>
            <NavButtons />
        </Container>

        <Container>
            <ContentNews />
        </Container>
        
        <Container>
            <NavButtons />
        </Container>

        <Footer />
    </>
  )
}

export default News
