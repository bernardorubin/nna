import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import ParallaxContainer from '../components/ParallaxContainer'
import logo1 from '../images/logo1.svg'
import logo2 from '../images/logo2.svg'
import logo3 from '../images/logo3.svg'
import logo4 from '../images/logo4.svg'

const HeaderContainer = styled.div`
  background: none;
  margin-bottom: 0;
  background: white;
  position: relative;
  z-index: -2;
`
const LogoContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1rem 1.0875rem 0 1.0875rem;
`
const H1 = styled.h1`
  margin: 0;
`

const Logo = styled.img`
  height: 80px;
`

const OverlayParallaxContainer = styled.div`
  margin-top: -139px;
  margin-left: -8.4984%;
  margin-bottom: 0;
`

const OuterParallaxContainer = styled.div`
`

const ParallaxContainer1 = styled(ParallaxContainer)`
`

const ParallaxContainer2 = styled(ParallaxContainer1)`
  position: relative;
  z-index: -1;
  margin-bottom: 0;
`

function Header({ siteTitle }) {
  return <HeaderContainer>
      <LogoContainer>
        {/* <H1>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
          </Link>
        </H1> */}
        <OuterParallaxContainer>
          <ParallaxContainer1 offsetYMin={0} offsetXMin={0} offsetXMax={0}>
            <Logo src={logo1} alt="nn" />
          </ParallaxContainer1>
        </OuterParallaxContainer>
        <OverlayParallaxContainer>
          <ParallaxContainer2 offsetXMin={11} offsetXMax={-12}>
            <Logo src={logo2} alt="nn" />
          </ParallaxContainer2>
        </OverlayParallaxContainer>
      </LogoContainer>
    </HeaderContainer>
}

export default Header
