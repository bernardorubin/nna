import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import logo from '../images/logo.svg'

const HeaderContainer = styled.div`
  background: ${props => props.theme.colors.default};
  margin-bottom: 1.45rem;
`
const LogoContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`
const H1 = styled.h1`
  margin: 0;
`

const Logo = styled.img`
  height: 2rem;
`

function Header({ siteTitle }) {
  return (
    <HeaderContainer>
      <LogoContainer>
        <H1>
          <Link
            to="/"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
            <Logo src={logo} alt="nn" />
          </Link>
        </H1>
      </LogoContainer>
    </HeaderContainer>
  )
}

// ({ siteTitle }) => (
//   <div
//     style={{
//       background: 'rebeccapurple',
//       marginBottom: '1.45rem',
//     }}
//   >
//     <div
//       style={{
//         margin: '0 auto',
//         maxWidth: 960,
//         padding: '1.45rem 1.0875rem',
//       }}
//     >
//       <h1 style={{ margin: 0 }}>
//         <Link
//           to="/"
//           style={{
//             color: 'white',
//             textDecoration: 'none',
//           }}
//         >
//           {siteTitle}
//         </Link>
//       </h1>
//     </div>
//   </div>

export default Header
