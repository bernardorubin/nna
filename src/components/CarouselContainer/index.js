import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class CarouselContainer extends Component {
  render() {
    return <Carousel showThumbs={false}>
        <div>
          <img src="https://picsum.photos/1200/600" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="https://picsum.photos/1200/600" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="https://picsum.photos/1200/600" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
  }
}

export default CarouselContainer