import React, { Component } from 'react'
import { Parallax } from 'react-scroll-parallax'

const ParallaxContainer = ({children}) => (
  <Parallax
    className="custom-class"
    // offsetYMax={200}
    offsetXMin={20}
    slowerScrollRate
    tag="figure"
  >
    {children}
  </Parallax>
)

export default ParallaxContainer