import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { animated } from 'react-spring'
import { config, Spring } from 'react-spring/renderprops'
import { InView } from 'react-intersection-observer'

export default class Bio extends React.Component {

    constructor () {
        super()
        this.state = {
            isVisible: false
        }
        this.handleView = this.handleView.bind(this)
    }
    
    handleView (inView) {
        inView && this.setState({
            isVisible: true
        })
    }

    render () {
        const AnimatedRow = animated(Row)
        const isVisible = this.state.isVisible
        return (
            <div style={{ padding: 30 }}>
                <div>
                    <h1 style={{ textAlign:'center', paddingBottom: 10 }}>About Me</h1>      
                </div>
                <Container>
                    <InView tag='div' onChange={this.handleView} threshold={.3} triggerOnce={true}>
                        <Row>
                            <Col>
                                <Spring to={{ transform: isVisible ? 'translate3d(0,0px,0)': 'translate3d(0,-40px,0)', opacity: isVisible ? 1 : 0 }} delay={150} config={config.gentle}>
                                    {props => (
                                        <AnimatedRow className="justify-content-center" style={props}>
                                            <img style={{width: 500}} src='https://im.ra.co/images/profiles/lg/jamesgill.jpg?auto=format'/>
                                        </AnimatedRow>
                                    )}
                                </Spring>
                                <Row className="justify-content-center">
                                <Spring to={{ transform: isVisible ? 'translate3d(0,0px,0)': 'translate3d(0,-40px,0)', opacity: isVisible ? 1 : 0 }} delay={150} config={config.gentle}>
                                    {props => (
                                        <a href={"https://github.com/jimfoambox"}>
                                            <img style={{width: 100, margin: 20, ...props}} src='/assets/githublogo500px.png' />
                                        </a>
                                    )}
                                    </Spring>
                                        <a href={"https://www.linkedin.com/in/james-gill-a7434a35/"}>
                                            <img style={{width: 100, margin: 20}} src='/assets/linked_in_logo500px.png' />
                                        </a>
                                        <a href={"https://jamesgill2019.medium.com/"}>
                                            <img style={{width: 100, margin: 20}} src='/assets/mediumlogo500px.png' />
                                        </a>
                                </Row>
                                <p> My name is James Gill, and I am a full stack developer based out of Jersey City, New Jersey.  
                                    Prior to my move to the world of software development, I was an audio engineer for 10 years, involved primarily 
                                    in audio recording, music production, and sound + video system installation.  I first caught the 
                                    coding bug during an internship right out of college, where I helped design and edit web pages 
                                    and newsletters.  The more I delved into software, the more I felt myself being pulled into the world of tech.  Eventually
                                    it became clear the writing was on the wall, and I decided to make the career change into the world of professional 
                                    software development.  I am a graduate and teaching fellow at FullStack Academy and have worked ever since to perfect the necessary skills to 
                                    succeed and be a long-term team asset in the software industry.
                                </p>
                            </Col>
                        </Row>
                    </InView>
                </Container>
            </div>
        )
    }
}