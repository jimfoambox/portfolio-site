import React from 'react'
import { Spring, animated} from 'react-spring/renderprops'
import { Button } from 'react-bootstrap'
import { Link, animateScroll as scroll } from "react-scroll"

const IntroTitle = () => {
    
    const style ={
        color:'#87107f',
        fontWeight:'500',
        fontFamily: "BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,Liberation Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
        lineHeight:'1.2',
        fontSize:'2.5rem'
    }
    
    
    return (
        <div className="introText" id="home">
            <Spring reverse={false} from={{ scale: 10, opacity: 0, transform: 'scale(0.9)', freq: '0.0175, 0.0' }} to={{ scale: 150, opacity: 1, transform: 'scale(1)', freq: '0.0, 0.0' }} delay={100} config={{ duration: 3000 }}>
                {props => (
                    <animated.div style={props}>
                        <h1>Hi.</h1>
                    </animated.div>
                )}
            </Spring>
            <Spring from={{ transform: 'translate3d(0,-40px,0)', opacity: 0 }} to={{ transform: 'translate3d(0,0px,0)', opacity: 1 }} delay={500} config={{ tension: 100, friction: 60 }}>
                {props => (
                    <animated.div style={props}>
                        <h1>I'm <span style={style}>James Gill.</span></h1>
                    </animated.div>
                )}
            </Spring>
            <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay={1200} config={{ tension: 140, friction: 300 }}>
                {props => (
                    <animated.div style={props}>
                        <h3>A software developer on<br></br> a mission to create and explore.</h3>
                    </animated.div>
                )}
            </Spring>
            <Spring from={{ transform: 'translate3d(0,40px,0)', opacity: 0 }} to={{ transform: 'translate3d(0, 0px,0)', opacity: 1 }} delay={2500} config={{ tension: 100, friction: 60 }}>
                {props => (
                    <animated.div style={props}>
                        <Link spy={true} smooth={true} offset={-20} duration={500} to="portfolio">
                            <Button className="outlineButton">Learn More</Button>
                        </Link>
                    </animated.div>
                )}
            </Spring>
        </div>
    )
}

export default IntroTitle