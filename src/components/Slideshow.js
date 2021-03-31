import React from 'react'
import CELLS from 'vanta/dist/vanta.cells.min'
import IntroTitle from './IntroTitle'

class Slideshow extends React.Component {
    constructor () {
        super()
        this.vantaRef = React.createRef()
    }

    componentDidMount () {
        this.vantaEffect = CELLS({
            el: this.vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            color1: 0x8378e,
            color2: 0x140618,
            speed: 2.50
        })
    }

    componentWillUnmount () {
        if (this.vantaEffect) this.vantaEffect.destroy()
    }

    render () {
        return (
            <div ref={this.vantaRef} className='sliderDiv'>
            
                <IntroTitle />
            
            </div>
        )
    }
}

export default Slideshow
