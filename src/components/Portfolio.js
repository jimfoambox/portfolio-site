import React, { useRef } from 'react'
import { Card, Button, Container, Row } from 'react-bootstrap'
import { useSpring, useChain, animated } from 'react-spring'


const Portfolio = () => {
    const springRefOne = useRef();
    const springRefTwo = useRef();
    const springRefThree = useRef();
    const fadeInBounceOne = useSpring({ transform: 'translate3d(0,0px,0)', opacity:1, from: { transform: 'translate3d(0,-40px,0)', opacity: 0 }, config: {duration: 1300}, ref: springRefOne})
    const fadeInBounceTwo = useSpring({ transform: 'translate3d(0,0px,0)', opacity:1, from: { transform: 'translate3d(0,-40px,0)', opacity: 0}, config: {duration: 1300}, ref: springRefTwo})
    const fadeInBounceThree = useSpring({ transform: 'translate3d(0,0px,0)', opacity:1, from: { transform: 'translate3d(0,-40px,0)', opacity: 0}, config: {duration: 1300}, ref: springRefThree})
    useChain([springRefOne, springRefTwo, springRefThree], [0.1, 0.3, 0.5])
    const AnimatedCard = animated(Card)

    return (
        <div>
            <h1>Portfolio</h1>
            <Container>
                <Row>
                    <AnimatedCard style={ { width: '18rem', margin: '20px', ...fadeInBounceOne }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </AnimatedCard>
                    <AnimatedCard style={{ width: '18rem', margin: '20px', ...fadeInBounceTwo  }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </AnimatedCard>
                    <AnimatedCard style={{ width: '18rem', margin: '20px', ...fadeInBounceThree  }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </AnimatedCard>
                </Row>
            </Container>
        </div>
    )
}
export default Portfolio