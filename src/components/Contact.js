import React from 'react';
import { Form, Container, Row, Col, Button } from 'react-bootstrap';
import * as emailjs from 'emailjs-com';
import ReCAPTCHA from "react-google-recaptcha";
import { Spring, config, animated } from 'react-spring/renderprops';
import { InView } from 'react-intersection-observer'

export default class Contact extends React.Component {

    constructor () {
        super()
        this.state = {
            name: '',
            email: '',
            message: '',
            sent: false,
            isVisible: false
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleView = this.handleView.bind(this)
    }

    handleView (inView) {
        inView && this.setState({
            isVisible: true
        })
    }

    onSubmit (event) {
        if (this.state.name === ''){
            event.preventDefault()
            this.setState({
                name: 'This field is required.'
            })
        }
        if (this.state.email === ''){
            event.preventDefault()
            this.setState({
                email: 'This field is required.'
            })
        }
        if (this.state.message === ''){
            event.preventDefault()
            this.setState({
                message: 'This field is required.'
            })
        } else {
            event.preventDefault()
            let templateParams = {
                from_name: this.state.name,
                from_email: this.state.email,
                to_name: 'contact_service',
                subject: 'Portfolio Site Inquiry',
                message_html: this.state.message,
            }
            emailjs.send(
                'contact_service',
                'contact-form',
                templateParams,
                'user_asUk7rz404izhAZwf5wOB',
                )
            this.setState({
                name: '',
                email: '',
                message: '',
                sent: true
            })
        }
    }

    handleChange (event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render () {
        const { name, email, message, sent } = this.state;
        const AnimatedRow = animated(Row)
        const { isVisible } = this.state
        if (sent) { 
            return (
            <div style={{ padding: 80 }}>
                <Container>
                    <Row>
                        <Col xs={12}>
                            <Spring from={{ transform: 'translate3d(0,-40px,0)', opacity: 0 }} to={{ transform: 'translate3d(0,0px,0)', opacity: 1 }} delay={100} config={config.gentle}>
                                {props => (
                                    <animated.div style={{ margin: 150, textAlign: 'center', ...props }}>
                                    <h3>Message Sent</h3>
                                    <h6>I will respond to you as quickly as possible!</h6>
                                    </animated.div>
                                )}
                            </Spring>
                        </Col>
                    </Row>
                </Container>
            </div> ) 
        } 
        return (
            <div id="contact" style={{ padding: 80 }}>
                <div>
                    <h1 style={{ textAlign:'center', paddingBottom: 10, paddingTop: 40 }}>Contact</h1>
                    <p style={{ textAlign:'center'}} >Reach out to me any time: I'd love to hear from you!</p>      
                </div>
                <Container>
                <InView tag='div' onChange={this.handleView} threshold={.5} triggerOnce={true}>
                    <Row className="justify-content-center">
                        <Col>
                        </Col>
                        <Col md={4} xs={12}>
                            <Form onSubmit={this.onSubmit}>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Spring to={{ transform: isVisible ? 'translate3d(0,0px,0)': 'translate3d(0,-40px,0)', opacity: isVisible ? 1 : 0 }} delay={200} config={config.gentle}>
                                        {props => (
                                            <animated.div style={props}>
                                                <Form.Label>Name</Form.Label>
                                            </animated.div>
                                        )}
                                    </Spring>
                                    <Spring to={{ transform: isVisible ? 'translate3d(0,0px,0)': 'translate3d(0,-40px,0)', opacity: isVisible ? 1 : 0 }} delay={350} config={config.gentle}>
                                        {props => (
                                            <animated.div style={props}>
                                                <Form.Control onChange={this.handleChange} name='name' value={name} type="text" placeholder="Your name here" style={{width:300}}/>
                                            </animated.div>
                                        )}
                                    </Spring>
                                    <Spring to={{ transform: isVisible ? 'translate3d(0,0px,0)': 'translate3d(0,-40px,0)', opacity: isVisible ? 1 : 0 }} delay={500} config={config.gentle}>
                                        {props => (
                                            <animated.div style={props}>
                                                <Form.Label>Email address</Form.Label>
                                            </animated.div>
                                        )}
                                    </Spring>
                                    <Spring to={{ transform: isVisible ? 'translate3d(0,0px,0)': 'translate3d(0,-40px,0)', opacity: isVisible ? 1 : 0 }} delay={650} config={config.gentle}>
                                        {props => (
                                            <animated.div style={props}>
                                                <Form.Control onChange={this.handleChange} name='email' value={email} type="email" placeholder="name@example.com" style={{width:300}}/>
                                            </animated.div>
                                        )}
                                    </Spring>
                                    <Spring to={{ transform: isVisible ? 'translate3d(0,0px,0)': 'translate3d(0,-40px,0)', opacity: isVisible ? 1 : 0 }} delay={800} config={config.gentle}>
                                        {props => (
                                            <animated.div style={props}>
                                                <Form.Label>Message</Form.Label>
                                            </animated.div>
                                        )}
                                    </Spring>
                                    <Spring to={{ transform: isVisible ? 'translate3d(0,0px,0)': 'translate3d(0,-40px,0)', opacity: isVisible ? 1 : 0 }} delay={950} config={config.gentle}>
                                        {props => (
                                            <animated.div style={props}>
                                                <Form.Control onChange={this.handleChange} name='message' value={message} as="textarea" type="textarea" rows={3} placeholder="Enter your message here" style={{width:300}}/>
                                            </animated.div>
                                        )}
                                    </Spring>
                                </Form.Group>
                                <Spring to={{ transform: isVisible ? 'translate3d(0,0px,0)': 'translate3d(0,40px,0)', opacity: isVisible ? 1 : 0 }} delay={1100} config={config.gentle}>
                                    {props => (
                                        <animated.div style={props}>
                                            <ReCAPTCHA sitekey="6LdZjFsaAAAAAJ2DqNJzjtqV9puWStQi6knj6mkX" />
                                        </animated.div>
                                    )}
                                </Spring>
                                <Spring to={{ transform: isVisible ? 'translate3d(0,0px,0)': 'translate3d(0,40px,0)', opacity: isVisible ? 1 : 0 }} delay={1250} config={config.gentle}>
                                    {props => (
                                        <animated.div style={props}>
                                            <Button variant="primary" type="submit">Submit</Button>
                                        </animated.div>
                                    )}
                                </Spring>
                            </Form>
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                </InView>
                </Container>
            </div>
        )
    }
}