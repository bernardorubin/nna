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
  padding: 1rem 2rem;
`
const LogoContainer = styled.div`
  position: relative;
`

const Logo = styled.img`
  height: 80px;
`

const OuterParallaxContainer = styled.div`
`

const ParallaxContainer1 = styled(ParallaxContainer)`
  margin: 0;
`

const OverlayParallaxContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  margin-left: 20px;
`

const ParallaxContainer2 = styled(ParallaxContainer)`
  position: absolute;
  z-index: -1;
  margin: 0;
`

function Header({ siteTitle }) {
  return <HeaderContainer>
      <LogoContainer>
          {/* <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
          </Link> */}
        <OuterParallaxContainer>
          <ParallaxContainer1 offsetYMin={0} offsetXMin={0} offsetXMax={0}>
            <Logo src={logo1} alt="nn" />
          </ParallaxContainer1>
        </OuterParallaxContainer>
        <OverlayParallaxContainer>
          <ParallaxContainer2 offsetXMin={11} offsetXMax={-240}>
            <Logo src={logo2} alt="nn" />
          </ParallaxContainer2>
        </OverlayParallaxContainer>
      </LogoContainer>
    </HeaderContainer>
}

export default Header
