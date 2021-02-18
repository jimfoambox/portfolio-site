import React from 'react'
import { Spring, animated, config } from 'react-spring/renderprops'

const IntroTitle = () => {
    
    const style ={
        color:'#87107f',
        fontWeight:'500',
        fontFamily: "BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,Liberation Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
        lineHeight:'1.2',
        fontSize:'2.5rem'
    }
    
    
    return (
        <div className="introText">
            {/* <Spring from={{ transform: 'translate3d(0,-40px,0)', opacity: 0 }} to={{ transform: 'translate3d(0,0px,0)', opacity: 1 }} delay={100} config={config.gentle}>
                {props => ( */}
                    {/* <animated.div style={props}> */}
                        <h1>Hi! I'm <span style={style}>James Gill.</span></h1>
                        <h3>A software developer on<br></br> a mission to create and explore.</h3>
                    {/* </animated.div> */}
                {/* )}
            </Spring> */}
        </div>
    )
}

export default IntroTitle