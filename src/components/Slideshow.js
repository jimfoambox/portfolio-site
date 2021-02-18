import React, { useState, useEffect } from 'react'
import { useTransition, animated, config } from 'react-spring'
import { Container, Row } from 'react-bootstrap'
import Particles from 'react-particles-js'

class Slideshow extends React.Component {

    render () {
        return (
            <div className='sliderDiv'>
                <Particles className="sliderbg" style={{backgroundImage: 'url(https://i.ibb.co/0XzbQNQ/gray-Particles-Bg.jpg/&auto=format&fit=crop)'}}/>
            </div>
        )
    }
}

export default Slideshow
