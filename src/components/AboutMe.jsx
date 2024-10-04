import React from 'react';
import myPhoto from '/assets/images/my-photo.jpg'

const AboutMe = () => {
  return (
    <section className="about-me">
      <h2>About Me</h2>
      <img src={myPhoto} alt="A portrait of Alexander Braff" className="profile-pic" />
      <p>
        My React portfolio describes past projects during my time studying via UofT BOOTCAMP. 
        I am a beekeeper trying to implement code to benefit beekeepers worldwide through gathering 
        data to better understand honeybees as well as native bees. This portfolio includes a section 
        about me, my resume, and my contact information where you can reach me.
      </p>
    </section>
  );
};

export default AboutMe;
