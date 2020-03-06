import React from 'react'

import text from './text'
import profilePic from '../../assets/images/profilepic.jpg'


const Header = () => (
  <div id="resume-header">
    <div className="row">
      <div className="twelve columns text-center">
        <div className="title">{text.name}</div>
        {text.title} <br />
        {text.location} <br />
        <a href={text.website}> {text.website} </a>
      </div>
      <div className="profile">
        <img className="profile-pic" src={profilePic} alt="Joel Detweiler" />
      </div>
    </div>
  </div>
)

export default Header
