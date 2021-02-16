import React from 'react'
import { Form, Container, Row, Col, Button } from 'react-bootstrap'

export default class Contact extends React.Component {

    render () {
        return (
            <div style={{ padding: 30 }}>
                <div>
                    <h1 style={{ textAlign:'center', paddingBottom: 10 }}>Contact</h1>      
                </div>
                <Container>
                    <Row>
                        <Col>
                        </Col>
                        <Col>
                            <Form>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Your name here" style={{width:300}}/>
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="name@example.com" style={{width:300}}/>
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" type="textarea" rows={3} placeholder="Enter your message here" style={{width:300}}/>
                                </Form.Group>
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