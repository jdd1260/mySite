import React from 'react'
import schools from './text'

const Education = () => (
  <div className="row education">
    <div className="two columns header-col">
      <h1>
        <span>Education</span>
      </h1>
    </div>

    <div className="ten columns main-col">
      {schools.map(school => (
        <div className="row item" key={school.name}>
          <div className="twelve columns">
            <div className="row">
              <div className="eight columns">
                <h4>{school.name}</h4>
              </div>
              <div className="four columns text-right">
                <h5> {school.location} </h5>
              </div>
            </div>
            <div className="row">
              <div className="seven columns">{school.degree}</div>
              <div className="five columns text-right">{school.date}</div>
            </div>
            <ul className="bulleted">
              {school.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </div>
)

export default Education
