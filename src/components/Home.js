import React from 'react'
import {Carousel} from 'react-bootstrap';
function home() {
    return (
        <div>
         <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/2422583/pexels-photo-2422583.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/4311512/pexels-photo-4311512.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=5004"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/10204555/pexels-photo-10204555.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>   
        </div>
    )
}

export default home
