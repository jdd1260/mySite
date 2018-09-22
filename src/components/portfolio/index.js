import React from 'react'
import { FaPlus, FaTag } from 'react-icons/lib/fa'

import projects from './text'

const Portfolio = () => (
  <section id="portfolio">
    <div className="row">
      <div className="twelve columns collapsed">
        <h1>Check Out Some of My Projects.</h1>

        <div
          id="portfolio-wrapper"
          className="bgrid-quarters s-bgrid-thirds cf"
        >
          {projects.map(project => (
            <div className="columns portfolio-item" key={project.title}>
              <div className="item-wrap">
                <a href={project.link} target="_blank">
                  <img alt="" src={project.image} />
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5>
                        {project.title}
                        <span className="pull-right">
                          <FaPlus />
                        </span>
                      </h5>
                      <p>{project.text}</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default Portfolio
