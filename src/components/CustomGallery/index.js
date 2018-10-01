import React, { Component } from 'react'
import Gallery from 'react-photo-gallery'

class CustomGallery extends Component {
  render() {
    return (
      <Gallery photos={photos} />
    );
  }
}
const photos = [
  {
    src: 'https://source.unsplash.com/stBeLpR0kAo/800x599',
    width: 4,
    height: 3,
  },
  {
    src: 'https://source.unsplash.com/h5H5UyXBLBQ/800x799',
    width: 1,
    height: 1,
  },
  {
    src: 'https://source.unsplash.com/-HIiNFXcbtQ/600x799',
    width: 3,
    height: 4,
  },
  {
    src: 'https://source.unsplash.com/uVdOLNJpxA0/600x799',
    width: 3,
    height: 4,
  },
  {
    src: 'https://source.unsplash.com/DEEJP2_U_x4/600x799',
    width: 3,
    height: 4,
  },
  {
    src: 'https://source.unsplash.com/sRaRlaFQolw/800x599',
    width: 4,
    height: 3,
  },
  {
    src: 'https://source.unsplash.com/w7YCquMkv2c/600x799',
    width: 3,
    height: 4,
  },
  {
    src: 'https://source.unsplash.com/RFDP7_80v5A/800x599',
    width: 4,
    height: 3,
  },
  {
    src: 'https://source.unsplash.com/O8dKwgPSSUk/800x599',
    width: 4,
    height: 3,
  },
  {
    src: 'https://source.unsplash.com/jTCLppdwSEc/800x599',
    width: 4,
    height: 3,
  },
  {
    src: 'https://source.unsplash.com/B0aCvAVSX8E/800x799',
    width: 1,
    height: 1,
  },
  {
    src: 'https://source.unsplash.com/X75dTgoQ2Hs/600x799',
    width: 3,
    height: 4,
  },
  {
    src: 'https://source.unsplash.com/yFV39g6AZ5o/600x799',
    width: 3,
    height: 4,
  },
  {
    src: 'https://source.unsplash.com/EQHjzzBcKlE/600x799',
    width: 3,
    height: 4,
  },
  {
    src: 'https://source.unsplash.com/kspRwqFxOms/800x599',
    width: 4,
    height: 3,
  },
  {
    src: 'https://source.unsplash.com/Zv6tZ5oVunE/600x799',
    width: 3,
    height: 4,
  },
]

export default CustomGallery