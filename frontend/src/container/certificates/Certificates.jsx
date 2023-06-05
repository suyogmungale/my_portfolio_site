import React from 'react'
import './Certificates.scss'
import { images } from '../../constant'
import { animate, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { urlFor, client } from '../../client'

const Certificates = () => {

  const [certificate, setCertificate] = useState([])

  useEffect(() => {
    const query = '*[_type == "certificates"]'
    client.fetch(query).then((data) => {
      console.log(data)
      setCertificate(data);

    });
  }, [])

  return (
    <>
    <h3 className='head-text'>Certificate</h3>
    <div className="app__cert-container">
        <motion.div
          className='app__skills-list'>
          {certificate?.map((cert) => (

            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__cert-item app__flex"
              key={cert?.title}
            >
              <div
                className="app__flex"
                // style={{ backgroundColor:  }}
              >
                <img src={urlFor(cert?.imgUrl)} alt={cert?.title} />
              </div>
              <p className="p-text"><a href={cert.certificateLink}>{cert?.title}</a></p>

            </motion.div>

          ))}
        </motion.div>

      </div>


    </>
  )
}

export default Certificates