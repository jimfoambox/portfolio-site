import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default class Bio extends React.Component {

    render () {
        return (
            <div>
                <h1>About Me</h1>
                <Container>
                    <Row>
                        <Col>
                            <p> My name is James Gill, and I am a full stack developer based out of Jersey City, New Jersey.  
                                Prior to my move to the world of software development, I was an audio engineer involved primarily 
                                in audio recording, music production, and sound + video system installation.  I first caught the 
                                coding bug during an internship right out of college, where I helped design and edit web pages 
                                and newsletters using HTML and CSS.  While my career in audio continued to evolve over the course 
                                of the next 10 years, I continued to hone and personally work on my skills in web development rooted 
                                in this initial experience, and with every new chapter in my own personal development, I found myself continually 
                                being drawn back to tech.
                            </p>
                            <p> My biggest source of gratification in my previous work was 
                                being able to take a blank canvas and bring either my own or other peoples' visions to life.  When you 
                                record a band, you start with an empty set of drums.  When you install a sound system, you’re on a construction 
                                site without walls or ceilings.  When the project is done, you were a part of making something beautiful.  
                                Moreover, no project is a one man show, and you come to appreciate working with others under often difficult 
                                and high pressure circumstances, which in my experience has served to enrich the sense of camaraderie that can 
                                develop when you’re on a great team.  The more I delved into software, I found and came to appreciate that in 
                                much the same way a blank page in VSCode or Xcode can spark something really cool as well, and can you can take an idea and 
                                turn that into a living, breathing entity that can benefit others in a myriad of different ways.  Eventually, I felt the 
                                writing was on the wall for me, and so I decided to make the career change to bring me to the world of professional 
                                Software Development.  I am a graduate and former teaching fellow at FullStack Academy and have worked ever since to perfect the necessary skills to 
                                succeed and be a long-term team asset in the software industry.
                            </p>
                        
                        </Col>
                        <Col>
                        <img style={{width: 500}} src='https://im.ra.co/images/profiles/lg/jamesgill.jpg?auto=format'/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}