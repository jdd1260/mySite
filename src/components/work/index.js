import React from 'react'
import jobs from './text'

const Work = () => (
  <div className="row work">
    <div className="two columns header-col">
      <h1>
        <span>Work</span>
      </h1>
    </div>
    <div className="ten columns main-col">
      {jobs.map(job => (
        <div className="row item" key={job.company}>
          <div className="twelve columns">
            <div className="row">
              <div className="eight columns">
                <h4>{job.company}</h4>
              </div>
              <div className="four columns text-right">
                <h5> {job.location} </h5>
              </div>
            </div>
            <div className="row">
              <div className="seven columns">{job.title}</div>
              <div className="five columns text-right">{job.dates}</div>
            </div>
            <ul className="bulleted">
              {job.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </div>
)

export default Work
