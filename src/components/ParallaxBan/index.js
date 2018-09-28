import React, { Component } from 'react'
import { ParallaxBanner } from 'react-scroll-parallax'

const ParallaxBan = () => (
  <ParallaxBanner
    className="your-class"
    layers={[
      {
        image: 'https://foo.com/foo.jpg',
        amount: 0.1,
        slowerScrollRate: false,
      },
      {
        image: 'https://foo.com/bar.png',
        amount: 0.2,
        slowerScrollRate: false,
      },
    ]}
    style={{
      height: '500px',
    }}
  >
    <h1>Banner Children</h1>
  </ParallaxBanner>
)

export default ParallaxBan