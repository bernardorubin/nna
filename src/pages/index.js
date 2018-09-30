import React from 'react'
import { Link } from 'gatsby'
import { ParallaxProvider } from 'react-scroll-parallax'
import { ThemeProvider } from 'styled-components'
import styled from 'styled-components'
import Overlap from '../components/ParallaxComponents/components/Overlap/Overlap'
import Intro from '../components/ParallaxComponents/components/Intro/Intro'

import Layout from '../components/layout'
import ParallaxImage from '../components/ParallaxImage';
import CarouselContainer from '../components/CarouselContainer';
import ParallaxBan from '../components/ParallaxBan';
import theme from '../theme'
import ParallaxContainer from '../components/ParallaxContainer';

const Container = styled.div`
  height: 300px;
  border: 1px solid red;
  overflow: hidden;
`

const Row = styled.div`
 display: flex;
 flex-direction: row;
 flex: 1;
`

const Col = styled.div`
 display: flex;
 flex-direction: column;
 flex: 1;
 height: 80vh;
`
const Col1 = styled(Col)`
  background: ${props => props.theme.colors.orange};
`

const Col2 = styled(Col)`
  background: ${props => props.theme.colors.green};
`

const IndexPage = () => (
  <ParallaxProvider>
    <ThemeProvider theme={theme}>
      <Layout>
        {/* <Container>
          <ParallaxImage />
        </Container> */}
        {/* <ParallaxBan /> */}
        {/* <Intro /> */}
        {/* <Overlap /> */}
        {/* <ParallaxContainer
          offsetYMin={-500}
          offsetYMax={0}
          offsetXMin={20}
          offsetXMax={200}
        >
          <div>Hello Parallax</div>
        </ParallaxContainer> */}
        {/* <Link to="/page-2/">Go to page 2</Link> */}
        <CarouselContainer></CarouselContainer>
        <Row>
          Hello
        </Row>
        <Row>
          <Col1>Hello</Col1>
          <Col>World</Col>
        </Row>
        <Row>
          <Col>Hello</Col>
          <Col2>Wolrd</Col2>
        </Row>
      </Layout>
    </ThemeProvider>
  </ParallaxProvider>
)

export default IndexPage
