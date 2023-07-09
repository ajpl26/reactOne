import React from 'react'

import vg from "../assets/2.webp"

import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from 'react-icons/ai';


const Home = () => {
  return (
    <>
    
    <div className="home" id='home'>
        <main>
            <h1>ChinSys</h1>
            <p>Gives you a great guidance</p>
        </main>
    </div>

    <div className="home2">
      <img src= {vg} alt="Graphics" />
      <div>
        <p>We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.</p>
      </div>
    </div>

    <div className="home3" id="about">
      <div>
        <h1>Who we are?</h1>
        <p>Welcome to our company, where we strive to provide comprehensive solutions to all your technology-related problems. We understand that in today's fast-paced world, individuals and businesses encounter numerous challenges when it comes to utilizing and troubleshooting various technologies. That's why we are here to simplify your tech journey.

        Our company is dedicated to delivering top-notch customer service and unmatched expertise in a wide range of technological domains.Whether you're facing software glitches, hardware malfunctions, network issues, or simply need guidance on how to make the most of your devices, we have you covered.
         Our team of highly skilled professionals excels in problem-solving and is adept at finding innovative solutions tailored to your unique needs.Customer satisfaction is our utmost priority. 









        </p>
      </div>
    </div>

    <div className="home4" id="brands">
      <div>
        <h1>Brands</h1>
        <article>
          <div style={{
            animationDelay : "0.3s"
          } }>
            <AiFillGoogleCircle />
            <p>Google</p>
          </div>

          <div style={{
            animationDelay : "0.5s"
          } }>
            <AiFillAmazonCircle />
            <p>Amazon</p>
          </div>

          <div style={{
            animationDelay : "0.7s"
          } }>
            <AiFillYoutube />
            <p>YouTube</p>
          </div>

          <div style={{
            animationDelay : "1s"
          } }>
            <AiFillInstagram />
            <p>Instagram</p>
          </div>
        </article>
      </div>
    </div>

    </>
  )
}

export default Home