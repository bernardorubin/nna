import React, { Component } from 'react'
import { Parallax } from 'react-scroll-parallax'

const ParallaxContainer = (props) => (
  <Parallax
    className="custom-class"
    { ...props}
    slowerScrollRate
    tag="figure"
  >
    {props.children}
  </Parallax>
)

export default ParallaxContainer