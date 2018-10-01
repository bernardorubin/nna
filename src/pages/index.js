import React from 'react'
import { Link } from 'gatsby'
import { ParallaxProvider } from 'react-scroll-parallax'
import { ThemeProvider } from 'styled-components'
import styled from 'styled-components'
import Overlap from '../components/ParallaxComponents/components/Overlap/Overlap'
import Intro from '../components/ParallaxComponents/components/Intro/Intro'

import Layout from '../components/layout'
import CustomGallery from '../components/CustomGallery'
import ParallaxImage from '../components/ParallaxImage';
import CarouselContainer from '../components/CarouselContainer';
import Grid from '../components/Grid';
import ParallaxBan from '../components/ParallaxBan';
import theme from '../theme'
import ParallaxContainer from '../components/ParallaxContainer';

const Container = styled.div`
  height: 300px;
  overflow: hidden;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  // flex: 1;
`

const Col = styled.div`
  width: 2500px;
  height: 10vh;
  margin: 0;
`
const Col1 = styled(Col)`
  background: ${props => props.theme.colors.orange};
  // border-radius: 0 0 20px 20px;
`

const Col2 = styled(Col)`
  background: ${props => props.theme.colors.green};
  // border-radius: 20px 20px 0 0;
`

const ParallaxContainer1 = styled(ParallaxContainer)`
  margin-bottom: 0;
`
const ParallaxContainer2 = styled(ParallaxContainer)`
  margin-bottom: 0;
  margin-left: -1000px;
`

const IndexPage = () => (
  <ParallaxProvider>
    <ThemeProvider theme={theme}>
      <Layout>
        <Container>
          <ParallaxImage />
        </Container>
        <Overlap />
        {/* <Intro /> */}
        {/* <Link to="/page-2/">Go to page 2</Link> */}
        <CarouselContainer />

        <Row>
          <ParallaxContainer1 offsetXMin={11} offsetXMax={-100}>
            <Col1 />
          </ParallaxContainer1>
        </Row>
        <Row>
          <ParallaxContainer2 offsetXMin={5} offsetXMax={100}>
            <Col2 />
          </ParallaxContainer2>
        </Row>
        <CustomGallery />
      </Layout>
    </ThemeProvider>
  </ParallaxProvider>
)

export default IndexPage
