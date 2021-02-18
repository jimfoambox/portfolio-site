import React from 'react'
import Portfolio from './Portfolio'
import Bio from './Bio'
import Contact from './Contact'

class Home extends React.Component {
    render () {
        return (
            <div className='homeBody'>
                <Portfolio />
                <Bio />
                <Contact />
            </div>
        )
    }
}

export default Home;