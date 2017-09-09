import React, { Component } from 'react'
import colors from '../Helpers/Colors';

class Self extends Component {
  render () {
    const borderColor = `4px solid ${colors[Math.floor(Math.random()*6)]}`
    return (
      <div className="self">
        <img
          alt="Profile"
          style={{border: borderColor}} 
          id="profile" 
          src="/images/profile.jpg"/>
        {/* <section id="bio">
          <h3>Bio</h3>
          <p>I like to consider myself a jack of all trades. It's pretty rare for me 
            to find a programming topic that doesn't pique my interest (at least at 
            first). I've worked on stuff all over the stack from React/Redux client-side
             applications to Go-lang and Elixir server-side projects (some for work, 
             some for personal enrichment).</p>
          
          <p>I enjoy learning about the more nerdy esoteric parts of programming like 
            how languages are built and then trying to apply those things to my day to
            day work.</p>

          <p>I have an amazing wife, Molly, a crazy little girl Emmylou and a hopefully less 
            crazy little boy Sawyer. I love Emacs, Functional Programming (in Elixir), and Doctor Who. My
            favorite book series is The Kingkiller Chronicles by Patrick Rothfuss. I 
            love expanding my network so let me know if you think we should know each 
            other!</p>
        </section> */}
        <section id="skills">
          <div>
          <h3>Degrees</h3>
            <ul>
              <li>Syracuse University - BS Biochemistry 2011</li>
              <li>Johns Hopkins University - MS Computer Science 2016</li>
            </ul>
            </div>
            <div>
            <h3>Likes</h3>
            <ul>
              <li>Wonderful Wife</li>
              <li>Crazy Daughter</li>
              <li>Less Crazy Son</li>
              <li>Doctor Who</li>
              <li>Overwatch</li>
              <li>Homebrewing</li>
              <li>Programming Language Theory</li>
              <li>The KingKiller Chronicles by Patrick Rothfuss</li>
            </ul>
            </div>
          </section>
      </div>
    )
  }
}

export default Self
