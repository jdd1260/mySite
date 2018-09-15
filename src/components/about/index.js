import React from 'react'
import { FaCloudDownload } from 'react-icons/lib/fa'

import { aboutMe, contact } from './text'

import profilePic from '../../assets/images/profilepic.jpg'

const About = () => (
  <section id="about">
    <div className="row">
      <div className="three columns">
        <img className="profile-pic" src={profilePic} alt="Joel Detweiler" />
      </div>
      <div className="nine columns main-col">
        <h2>About Me</h2>
        <p>{aboutMe}</p>
        <div className="row">
          <div className="columns contact-details">
            <h2>Contact Details</h2>
            <p className="address">
              <div>{contact.name}</div>
              <div>{contact.address}</div>
              <div>{contact.email}</div>
            </p>
          </div>
          {/*
            <div className="columns download">
              <p>
                <a href="#" className="button">
                  <FaCloudDownload /> Download Resume
                </a>
              </p>
            </div>
          */}
        </div>
      </div>
    </div>
  </section>
)

export default About
