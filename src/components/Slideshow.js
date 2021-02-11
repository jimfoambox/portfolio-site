import React from 'react'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

export default class Slideshow extends React.Component {

    render () {
        const slides = [
        { title: "Marigo Bay", description: "A Jewel of the Caribbean", image: "https://imgur.com/0c9iaJh.jpg"},
        { title: "Maldives", description: "Indian Ocean Paradise", image: "https://imgur.com/3bZoRJK.jpg"},
        { title: "Maldives", description: "Indian Ocean Paradise", image: "https://imgur.com/3bZoRJK.jpg"}
        ];

        return (
        <Slider autoplay={2000}>
        {slides.map((slide, index) => <div key={index} style={{ background: `url('${slide.image}') no-repeat center center` }}>
            <h2>{slide.title}</h2>
            <div>{slide.description}</div>
        </div>)}
        </Slider>
        )}
};


