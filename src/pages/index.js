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
  width: 100px;
  height: 20vh;
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
        <Container>
          <ParallaxImage />
        </Container>
        {/* <Intro /> */}
        {/* <Overlap /> */}
        {/* <Link to="/page-2/">Go to page 2</Link> */}
        <CarouselContainer />
        <CustomGallery />

        <Row>ROW</Row>
        <Row>
        <div>
          <ParallaxContainer offsetXMin={11} offsetXMax={-10}>
              <Col1 />
          </ParallaxContainer>
        </div>
        </Row>
        <Row>
          <ParallaxContainer offsetXMin={5} offsetXMax={100}>
            <Col2 />
          </ParallaxContainer>
        </Row>
      </Layout>
    </ThemeProvider>
  </ParallaxProvider>
)

export default IndexPage
