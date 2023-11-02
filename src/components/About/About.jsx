import React from 'react'

const About = () => {
  return (
    <div className='h-screen overflow-scroll w-full overflow-y-auto pt-48 pt pb-5 px-2 bg-primary-gray'>
      <div className='max-w-screen-lg mx-auto flex flex-col justify-center py-5 px-5 text-center sm:text-left'>
        <div>
          <h2 className='text-3xl sm:text-4xl text-custom-red font-bold pb-5'>About</h2>
        </div>
        <p className='text-xl font-light  sm:text-2xl sm:font-light sm:tracking-widest text-white'>
          Hi, I'm Mahapara,
          
          With one year of experience in web development, I possess a strong foundation in JavaScript, HTML, React, Node.js, and the Tailwind CSS framework. My expertise lies in building web applications that are both functional and visually appealing. I have successfully contributed to various projects, demonstrating my proficiency in creating responsive and dynamic web solutions. My commitment to learning and staying up-to-date with industry trends allows me to adapt and deliver high-quality, user-friendly applications.
        </p>
      </div>
      
    </div>
  )
}

export default About
