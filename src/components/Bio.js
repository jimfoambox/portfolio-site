import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { animated } from 'react-spring'
import { config, Spring } from 'react-spring/renderprops'
import { InView } from 'react-intersection-observer'

export default class Bio extends React.Component {

    constructor () {
        super()
        this.state = {
            isVisible: false,
            isVisibleTwo: false
        }
        this.handleView = this.handleView.bind(this)
        this.secondHandleView = this.secondHandleView.bind(this)
    }
    
    handleView (inView) {
        inView && this.setState({
            isVisible: true
        })
    }

    secondHandleView (inView) {
        inView && this.setState({
            isVisibleTwo: true
        })
    }

    render () {
        const AnimatedRow = animated(Row)
        const { isVisible, isVisibleTwo } = this.state
        return (
            <div id="aboutme" style={{ padding: 80 }}>
                <div>
                    <h1 style={{ textAlign:'center', paddingBottom: 10 }}>About Me</h1>      
                </div>
                <Container>
                        <Row>
                            <Col>
                                <InView tag='div' onChange={this.handleView} threshold={.5} triggerOnce={true}>
                                    <Spring to={{ transform: isVisible ? 'translate3d(0,0px,0)': 'translate3d(0,-40px,0)', opacity: isVisible ? 1 : 0 }} delay={300} config={config.gentle}>
                                        {props => (
                                            <AnimatedRow className="justify-content-center" style={props}>
                                                <img style={{width: 200}} src='/assets/profilepiccircle1200.png'/>
                                            </AnimatedRow>
                                        )}
                                    </Spring>
                                    <Row className="justify-content-center">
                                    <Spring to={{ transform: isVisible ? 'translate3d(0,0px,0)': 'translate3d(0,-40px,0)', opacity: isVisible ? 1 : 0 }} delay={500} config={config.gentle}>
                                            {props => (
                                                <a href={"https://github.com/jimfoambox"} target={'_blank'}>
                                                    <img style={{width: 100, margin: 14, ...props}} src='/assets/githublogo500.png' />
                                                </a>
                                            )}
                                        </Spring>
                                        <Spring to={{ transform: isVisible ? 'translate3d(0,0px,0)': 'translate3d(0,-40px,0)', opacity: isVisible ? 1 : 0 }} delay={700} config={config.gentle}>
                                            {props => (
                                                <a href={"https://www.linkedin.com/in/james-gill-a7434a35/"} target={'_blank'}>
                                                    <img style={{width: 100, margin: 27, ...props}} src='/assets/linkedinlogo500.png' />
                                                </a>
                                            )}
                                        </Spring>
                                        <Spring to={{ transform: isVisible ? 'translate3d(0,0px,0)': 'translate3d(0,-40px,0)', opacity: isVisible ? 1 : 0 }} delay={900} config={config.gentle}>
                                            {props => (
                                                <a href={"https://jamesgill2019.medium.com/"} target={'_blank'}>
                                                    <img style={{width: 100, margin: 14, ...props}} src='/assets/mediumlogo500.png' />
                                                </a>
                                            )}
                                        </Spring>
                                    </Row>
                                    <Spring to={{ transform: isVisible ? 'translate3d(0,-40px,0)': 'translate3d(0,0px,0)', opacity: isVisible ? 1 : 0 }} delay={150} config={config.gentle}>
                                        {props => (
                                            <p style={{margin: 50, ...props}}> My name is James Gill, and I am a full stack developer based out of Jersey City, New Jersey.  
                                                Prior to my move to the world of software development, I was an audio engineer for 10 years, involved primarily 
                                                in audio recording, music production, and sound + video system installation.  I first caught the 
                                                coding bug during an internship right out of college, where I helped design and edit web pages 
                                                and newsletters.  The more I delved into software, the more I felt myself being pulled into the world of tech.  Eventually
                                                it became clear the writing was on the wall, and I decided to make the career change into the world of professional 
                                                software development.  I am a graduate and teaching fellow at FullStack Academy and have worked ever since to perfect the necessary skills to 
                                                succeed and be a long-term team asset in the software industry.
                                            </p>
                                        )}
                                    </Spring>
                                </InView>
                                <InView tag='div' onChange={this.secondHandleView} threshold={.3} triggerOnce={true}>
                                    <Row className="justify-content-center">
                                        <Col>
                                            <Spring to={{ transform: isVisibleTwo ? 'translate3d(0,0px,0)': 'translate3d(0,-40px,0)', opacity: isVisibleTwo ? 1 : 0 }} delay={200} config={config.gentle}>
                                                {props => (
                                                    <AnimatedRow className="justify-content-center" style={props}><h4>Proficient</h4></AnimatedRow>
                                                )}
                                            </Spring>
                                            <Spring to={{ transform: isVisibleTwo ? 'translate3d(0,0px,0)': 'translate3d(0,-40px,0)', opacity: isVisibleTwo ? 1 : 0 }} delay={300} config={config.gentle}>
                                                {props => (
                                                    <AnimatedRow className="justify-content-center" style={props}><p>Javascript | HTML | CSS</p></AnimatedRow>
                                                )}
                                            </Spring>
                                            <Spring to={{ transform: isVisibleTwo ? 'translate3d(0,0px,0)': 'translate3d(0,-40px,0)', opacity: isVisibleTwo ? 1 : 0 }} delay={400} config={config.gentle}>
                                                {props => (
                                                    <AnimatedRow className="justify-content-center" style={props}><p>React | Redux | Git/Github</p></AnimatedRow>
                                                )}
                                            </Spring>
                                            <Spring to={{ transform: isVisibleTwo ? 'translate3d(0,0px,0)': 'translate3d(0,-40px,0)', opacity: isVisibleTwo ? 1 : 0 }} delay={500} config={config.gentle}>
                                                {props => (
                                                    <AnimatedRow className="justify-content-center" style={props}><p>Node.js | Express | Sequelize</p></AnimatedRow>
                                                )}
                                            </Spring>
                                        </Col>
                                        <Col>
                                            <Spring to={{ transform: isVisibleTwo ? 'translate3d(0,0px,0)': 'translate3d(0,-40px,0)', opacity: isVisibleTwo ? 1 : 0 }} delay={200} config={config.gentle}>
                                                {props => (
                                                    <AnimatedRow className="justify-content-center" style={props}><h4>Knowledgable</h4></AnimatedRow>
                                                )}
                                            </Spring>
                                            <Spring to={{ transform: isVisibleTwo ? 'translate3d(0,0px,0)': 'translate3d(0,-40px,0)', opacity: isVisibleTwo ? 1 : 0 }} delay={300} config={config.gentle}>
                                                {props => (
                                                    <AnimatedRow className="justify-content-center" style={props}><p>React-Native | PostgresSQL | Webpack</p></AnimatedRow>
                                                )}
                                            </Spring>
                                            <Spring to={{ transform: isVisibleTwo ? 'translate3d(0,0px,0)': 'translate3d(0,-40px,0)', opacity: isVisibleTwo ? 1 : 0 }} delay={400} config={config.gentle}>
                                                {props => (
                                                    <AnimatedRow className="justify-content-center" style={props}><p>Mocha | Chai | Google Firebase</p></AnimatedRow>
                                                )}
                                            </Spring>
                                            <Spring to={{ transform: isVisibleTwo ? 'translate3d(0,0px,0)': 'translate3d(0,-40px,0)', opacity: isVisibleTwo ? 1 : 0 }} delay={500} config={config.gentle}>
                                                {props => (
                                                    <AnimatedRow className="justify-content-center" style={props}><p>Google Cloud APIs | Heroku</p></AnimatedRow>
                                                )}
                                            </Spring>
                                        </Col>
                                        <Col>
                                            <Spring to={{ transform: isVisibleTwo ? 'translate3d(0,0px,0)': 'translate3d(0,-40px,0)', opacity: isVisibleTwo ? 1 : 0 }} delay={200} config={config.gentle}>
                                                {props => (
                                                    <AnimatedRow className="justify-content-center" style={props}><h4>Additional Skills</h4></AnimatedRow>
                                                )}
                                            </Spring>
                                            <Spring to={{ transform: isVisibleTwo ? 'translate3d(0,0px,0)': 'translate3d(0,-40px,0)', opacity: isVisibleTwo ? 1 : 0 }} delay={300} config={config.gentle}>
                                                {props => (
                                                    <AnimatedRow className="justify-content-center" style={props}><p>Wordpress | Shopify | React-Bootstrap</p></AnimatedRow>
                                                )}
                                            </Spring>
                                            <Spring to={{ transform: isVisibleTwo ? 'translate3d(0,0px,0)': 'translate3d(0,-40px,0)', opacity: isVisibleTwo ? 1 : 0 }} delay={400} config={config.gentle}>
                                                {props => (
                                                    <AnimatedRow className="justify-content-center" style={props}><p>Testem | React Spring</p></AnimatedRow>
                                                )}
                                            </Spring>
                                            <Spring to={{ transform: isVisibleTwo ? 'translate3d(0,0px,0)': 'translate3d(0,-40px,0)', opacity: isVisibleTwo ? 1 : 0 }} delay={500} config={config.gentle}>
                                                {props => (
                                                    <AnimatedRow className="justify-content-center" style={props}><p>Phaser.js</p></AnimatedRow>
                                                )}
                                            </Spring>
                                        </Col>
                                    </Row>
                                </InView>
                            </Col>
                        </Row>
                </Container>
            </div>
        )
    }
}