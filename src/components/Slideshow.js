import React from 'react'
import Particles from 'react-particles-js'
import IntroTitle from './IntroTitle'

class Slideshow extends React.Component {

    render () {
        return (
            <div className='sliderDiv'>
            <div>
                <Particles 
                    params={{
                        "particles": {
                            "number": {
                                "value": 50
                            },
                            "size": {
                                "value": 3
                            }
                        },
                        "interactivity": {
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "repulse"
                                }
                            }
                        }
	                }} 
                    className="sliderbg" 
                    style={{backgroundImage: 'url(https://i.ibb.co/FxmvvnJ/gray-Particles-Bg2.jpg/&auto=format&fit=crop)'}}
                />
            </div>
            <div>
                <IntroTitle />
            </div>
            </div>
        )
    }
}

export default Slideshow
