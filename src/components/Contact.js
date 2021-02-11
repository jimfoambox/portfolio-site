import React from 'react'
import { Form, Container, Row, Col } from 'react-bootstrap'

export default class Contact extends React.Component {

    render () {
        return (
            <div>
                <h1>Contact</h1>
                <Container>
                    <Row>
                        <Col>
                            <Form>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="name@example.com" style={{width:300}}/>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}