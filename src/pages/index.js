import React from 'react'
import { Link } from 'gatsby'
import { ParallaxProvider } from 'react-scroll-parallax'
import { ThemeProvider } from 'styled-components'
import styled from 'styled-components'

import Layout from '../components/layout'
import ParallaxImage from '../components/ParallaxImage';
import ParallaxBan from '../components/ParallaxBan';
import theme from '../theme'
import ParallaxContainer from '../components/ParallaxContainer';

const Container = styled.div`
  height: 300px;
  border: 1px solid red;
  overflow: hidden;
`

const IndexPage = () => (
  <ParallaxProvider>
    <ThemeProvider theme={theme}>
      <Layout>
        <Container>
          <ParallaxImage />
        </Container>
        {/* <ParallaxBan /> */}
        <ParallaxContainer>
          <div>Hello Parallax</div>
        </ParallaxContainer>
        <Link to="/page-2/">Go to page 2</Link>
      </Layout>
    </ThemeProvider>
  </ParallaxProvider>
)

export default IndexPage
