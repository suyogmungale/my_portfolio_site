import React from 'react'
import './Skills.scss'
import { useState, useEffect } from 'react'
import { Tooltip } from 'react-tooltip'
import { animate, motion } from 'framer-motion'
import { AppWrap } from '../../wrapper'
import { urlFor, client } from '../../client'

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      console.log(data)
      setExperiences(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);



  return (
    <>
      <h2 className='head-text'>Skills <span>and</span> Experiance</h2>
      <div className="app__skills-container">
        <motion.div
          className='app__skills-list'>
          {skills?.map((skill) => (

            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill?.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill?.icon)} alt={skill?.name} />
              </div>
              <p className="p-text">{skill?.name}</p>

            </motion.div>

          ))}
        </motion.div>





      </div>
    </>
  )
}

export default AppWrap(Skills, 'skills')