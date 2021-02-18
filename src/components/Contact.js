import React from 'react';
import { Form, Container, Row, Col, Button } from 'react-bootstrap';
import * as emailjs from 'emailjs-com';
import ReCAPTCHA from "react-google-recaptcha";
import { Spring, config } from 'react-spring/renderprops';

export default class Contact extends React.Component {

    constructor () {
        super()
        this.state = {
            name: '',
            email: '',
            message: '',
            sent: false
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
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
        if (sent) { 
            return (
            <div style={{ padding: 80 }}>
                <Spring from={{ transform: 'translate3d(0,-40px,0)', opacity: 0 }} to={{ transform: 'translate3d(0,0px,0)', opacity: 1 }} delay={100} config={config.gentle}>
                    {props => (
                        <h3 style={{ textAlign: 'center', margin: 150, ...props }}>Message Sent</h3>
                    )}
                </Spring>
            </div> ) 
        } 
        return (
            <div id="contact" style={{ padding: 80 }}>
                <div>
                    <h1 style={{ textAlign:'center', paddingBottom: 10, paddingTop: 40 }}>Contact</h1>
                    <p style={{ textAlign:'center'}} >Reach out to me any time: I'd love to hear from you!</p>      
                </div>
                <Container>
                    <Row>
                        <Col>
                        </Col>
                        <Col>
                            <Form onSubmit={this.onSubmit}>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control onChange={this.handleChange} name='name' value={name} type="text" placeholder="Your name here" style={{width:300}}/>
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control onChange={this.handleChange} name='email' value={email} type="email" placeholder="name@example.com" style={{width:300}}/>
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control onChange={this.handleChange} name='message' value={message} as="textarea" type="textarea" rows={3} placeholder="Enter your message here" style={{width:300}}/>
                                </Form.Group>
                                <ReCAPTCHA sitekey="6LdZjFsaAAAAAJ2DqNJzjtqV9puWStQi6knj6mkX" />
                                <Button variant="primary" type="submit">Submit</Button>
                            </Form>
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}