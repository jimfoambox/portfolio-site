import React from 'react'
import { Card, Button, Container, Row, Col } from 'react-bootstrap'
import { animated } from 'react-spring'
import { config, Spring } from 'react-spring/renderprops'
import { InView } from 'react-intersection-observer'




 class Portfolio extends React.Component {
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
        const AnimatedCard = animated(Card)
        const isVisible = this.state.isVisible
        return (
            <div id="portfolio" style={{ padding: 80 }}>
                <div>
                    <h1 style={{ textAlign:'center', paddingBottom: 10 }}>Portfolio</h1>      
                </div>
                <InView tag='div' onChange={this.handleView} threshold={.4} triggerOnce={true}>
                    <Container>
                        <Row style={{ justifyContent: 'center' }}>
                            <Col  xs={12} md={4}>
                                <Spring to={{ transform: isVisible ? 'translate3d(0,0px,0)': 'translate3d(0,-40px,0)', opacity: isVisible ? 1 : 0 }} delay={150} config={config.gentle}>
                                    {props => (
                                        <AnimatedCard style={ { width: '18rem', margin: '20px', ...props }}>
                                            <Row style={{ justifyContent: 'center' }}>
                                                <a href={"https://youtu.be/Jgi-ngC3Yl0"} target={'_blank'}>
                                                    <Card.Img variant="top" src="/assets/parallelscreenlogo600.png" style={{ width: 286 }}/>
                                                </a>
                                            </Row>
                                            <Card.Body>
                                                <Card.Title>Parallel</Card.Title>
                                                <Card.Text>
                                                    A crowdsourced landmark hotspot IOS mobile app built with React Native and using Mapbox GL.
                                                </Card.Text>
                                                <a href={"https://youtu.be/Jgi-ngC3Yl0"} target={'_blank'}>
                                                    <Button variant="primary">See Demo</Button>
                                                </a>
                                            </Card.Body>
                                        </AnimatedCard>
                                    )}
                                </Spring>
                            </Col>
                            <Col  xs={12} md={4}>
                                <Spring to={{ transform: isVisible ? 'translate3d(0,0px,0)': 'translate3d(0,-40px,0)', opacity: isVisible ? 1 : 0 }} delay={300} config={config.gentle}>
                                    {props => (
                                        <AnimatedCard style={{ width: '18rem', margin: '20px', ...props  }}>
                                            <Row style={{ justifyContent: 'center' }}>
                                                <a href={"https://www.youtube.com/watch?v=56KK8hrHAII&feature=youtu.be"} target={'_blank'}>
                                                    <Card.Img variant="top" src="/assets/inspirescreenlogo600.png" style={{ width: 286 }} />
                                                </a>
                                            </Row>
                                            <Card.Body>
                                                <Card.Title>Inspire!</Card.Title>
                                                <Card.Text>
                                                    An IOS mobile app built in Swift that gives you a famous inspiration quote based on your mood
                                                    and the day of the week.
                                                </Card.Text>
                                                <a href={"https://www.youtube.com/watch?v=56KK8hrHAII&feature=youtu.be"} target={'_blank'}>
                                                    <Button variant="primary">See Demo</Button>
                                                </a>
                                            </Card.Body>
                                        </AnimatedCard>
                                    )}
                                </Spring>
                            </Col>
                            <Col  xs={12} md={4}>
                                <Spring to={{ transform: isVisible ? 'translate3d(0,0px,0)': 'translate3d(0,-40px,0)', opacity: isVisible ? 1 : 0 }} delay={450} config={config.gentle}>
                                    {props => (
                                        <AnimatedCard style={{ width: '18rem', margin: '20px', ...props  }}>
                                            <Row style={{ justifyContent: 'center' }}>
                                                <a href={"https://fallen-planet.herokuapp.com/"} target={'_blank'}>
                                                    <Card.Img variant="top" src="/assets/fallenPlanetlogo600.png" style={{ width: 286 }} />
                                                </a>
                                            </Row>
                                            <Card.Body>
                                                <Card.Title>Fallen Planet</Card.Title>
                                                <Card.Text>
                                                    A 2D platform sci-fi game built in Javascript with the Phaser 3 library and launched in browser with React.
                                                </Card.Text>
                                                <a href={"https://fallen-planet.herokuapp.com/"} target={'_blank'}>
                                                    <Button variant="primary">Play The Game</Button>
                                                </a>
                                            </Card.Body>
                                        </AnimatedCard>
                                    )}
                                </Spring>
                            </Col>
                            {/* <Spring to={{ transform: isVisible ? 'translate3d(0,0px,0)': 'translate3d(0,-40px,0)', opacity: isVisible ? 1 : 0 }} delay={600} config={config.gentle}>
                                {props => (
                                    <AnimatedCard style={{ width: '18rem', margin: '20px', ...props  }}>
                                        <Card.Img variant="top" src="holder.js/100px180" />
                                        <Card.Body>
                                            <Card.Title>Whistler</Card.Title>
                                            <Card.Text>
                                                An FM digital synthesizer built in Javascript using the Tone.js library.
                                            </Card.Text>
                                            <a href={"https://github.com/jimfoambox"}>
                                                <Button variant="primary">Go somewhere</Button>
                                            </a>
                                        </Card.Body>
                                    </AnimatedCard>
                                )}
                            </Spring> */}
                        </Row>
                    </Container>
                </InView>
            </div>
        )
    }
}
export default Portfolio