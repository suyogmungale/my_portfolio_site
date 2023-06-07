import React from 'react'

import {AiFillGithub,AiFillLinkedin,AiFillInstagram}  from 'react-icons/ai'

const SocialMedia = () => {
  const Github = () => {
    window.open('https://github.com/suyogmungale');
  };

  const Linkedin = () => {
    window.open('https://www.linkedin.com/in/suyog-mungale-473193212/');
  };
  
  return (
    <div className="app__social">
    <div>
      <AiFillGithub onClick={Github} />
    </div>
    <div>
      <AiFillLinkedin onClick={Linkedin}/>
    </div>
    <div>
      <AiFillInstagram/>
    </div>
    
  </div>
  )
}

export default SocialMedia
