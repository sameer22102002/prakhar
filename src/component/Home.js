import React from 'react'
import "./Home.css"
import Typewriter from "typewriter-effect";

const Home = () => {
    return (
        <div className='home'>
                <Typewriter
                options={{
                    strings: ['HEY THERE! ', 'WELCOME TO ONLINE PDF VIEWER'],
                    autoStart: true,
                    loop: true,
                }}
            />
            <div>Let's Edit Your PDF</div>
        </div>
    )
}

export default Home
