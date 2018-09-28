import React, { Component } from 'react'
import { Parallax } from 'react-scroll-parallax'

const ParallaxImage = () => (
  <Parallax
    className="custom-class"
    offsetYMax={20}
    offsetYMin={-20}
    slowerScrollRate
    tag="figure"
  >
    <img src="https://picsum.photos/500/700" alt="image" />
  </Parallax>
)

export default ParallaxImage