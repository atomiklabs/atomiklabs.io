import React from 'react'
import SVGTwitter from '../public/images/twitter.svg'
import SVGGithub from '../public/images/github.svg'
import SVGEmail from '../public/images/email.svg'

export const About = (props) => {
  const { aboutRef } = props

  return (
    <section ref={aboutRef} className="row justify-content-md-center">
      <div className="col-md-6 about">
        <h1>Web 3.0 solutions</h1>
        <br />
        <p>We solve problems in Web 3.0 space, where a network user owns their data for real.</p>
        <p>
          We are happy to share our expertise with you. You can learn about the blockchain and decentralised systems.
          You will find us describing various problems of different levels (basic, moderate, advanced).
        </p>

        <div className="about-social">
          <a href="https://twitter.com/atomiklabs_io" target="_blank" rel="noopener noreferrer">
            <SVGTwitter className="about-social-icon" />
          </a>
          <a href="https://github.com/atomiklabs/" target="_blank" rel="noopener noreferrer">
            <SVGGithub className="about-social-icon" />
          </a>
          <a href="mailto:nick@deploy.at?subject=deploy.at">
            <SVGEmail className="about-social-icon" />
          </a>
        </div>
      </div>
    </section>
  )
}
