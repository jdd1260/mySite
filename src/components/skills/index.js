import React from 'react'
import { intro, skills } from './skills'

const Skills = () => (
  <div className="row skill">
    <div className="three columns header-col">
      <h1>
        <span>Skills</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      {intro}

      <div className="bars">
        <ul className="skills">
          {skills.map(skill => (
            <li key={skill.name}>
              <span
                className="bar-expand"
                style={{ width: skill.value + '%' }}
              />
              <em>{skill.name}</em>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
)

export default Skills
