import React from 'react'
import IntroTitle from './IntroTitle'
import Particles from 'react-tsparticles'
import { Spring, animated} from 'react-spring/renderprops'
import { Button } from 'react-bootstrap'
import { Link, animateScroll as scroll } from "react-scroll"

class Slideshow extends React.Component {
    constructor () {
        super()
    }

    render () {
        const style ={
            color:'#87107f',
            fontWeight:'500',
            fontFamily: "BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,Liberation Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
            lineHeight:'1.2',
            fontSize:'2.5rem'
        }
        return (
            <div>
            <div className='sliderDiv'>
                <Particles
                    id="tsparticles"
                    options={options}
                    className='sliderbg'
                />
            </div>
            <div className="introText" id="home">
            <Spring reverse={false} from={{ scale: 10, opacity: 0, transform: 'scale(0.9)', freq: '0.0175, 0.0' }} to={{ scale: 150, opacity: 1, transform: 'scale(1)', freq: '0.0, 0.0' }} delay={100} config={{ duration: 3000 }}>
                {props => (
                    <div>
                        <animated.h1 style={props}>Hi.</animated.h1>
                    </div>
                )}
            </Spring>
            <Spring from={{ transform: 'translate3d(0,-40px,0)', opacity: 0 }} to={{ transform: 'translate3d(0,0px,0)', opacity: 1 }} delay={500} config={{ tension: 100, friction: 60 }}>
                {props => (
                    <div>
                        <animated.h1 style={props}>I'm <animated.span style={{...props, ...style}}>James Gill.</animated.span></animated.h1>
                    </div>
                )}
            </Spring>
            <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay={1200} config={{ tension: 140, friction: 300 }}>
                {props => (
                    <div>
                        <animated.h3 style={props}>A software developer on<br></br> a mission to create and explore.</animated.h3>
                    </div>
                )}
            </Spring>
            <Spring from={{ transform: 'translate3d(0,40px,0)', opacity: 0 }} to={{ transform: 'translate3d(0, 0px,0)', opacity: 1 }} delay={2500} config={{ tension: 100, friction: 60 }}>
                {props => (
                    <div>
                        <Link spy={true} smooth={true} offset={-20} duration={500} to="portfolio">
                            <Button style={props} className="outlineButton">Learn More</Button>
                        </Link>
                    </div>
                )}
            </Spring>
            </div>
                {/* <IntroTitle /> */}
        </div>
        )
    }
}

export default Slideshow


const options = {
    background: {
        color: {
            value: "#343a40",
        },
    },
    fpsLimit: 60,
    interactivity: {
        detectsOn: "canvas",
        events: {
            onClick: {
                enable: true,
                mode: "push",
            },
            onHover: {
                enable: true,
                mode: "repulse",
            },
            resize: true,
        },
        modes: {
            bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
            },
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: "#ffffff",
        },
        links: {
            color: "#ffffff",
            distance: 150,
            enable: false,
            opacity: 0.5,
            width: 1,
        },
        collisions: {
            enable: true,
        },
        move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 1,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                value_area: 800,
            },
            value: 80,
        },
        opacity: {
            value: 0.25,
        },
        shape: {
            type: "circle",
        },
        size: {
            random: true,
            value: 9,
        },
        twinkle: {
            lines: {
                enable: true,
                frequency: 0.005,
                opacity: 1,
                color: {
                    value: "#ffffff"
                }
            },
            particles: {
                enable: true,
                frequency: 0.007,
                opacity: 1,
                color: {
                    value: "#ffffff"
                }
            }
        }
    },
    detectRetina: true,
}
