// import React from 'react';
// import { useTypewriter, Cursor } from 'react-simple-typewriter';
// import { BsFillPersonLinesFill } from 'react-icons/bs';
// import { Link } from 'react-router-dom';

// function Home() {
//   const [text] = useTypewriter({
//     words: ['Developer', 'Designer'],
//     loop: {},
//     typeSpeed: 150,
//   });

//   return (
//       <div className='h-screen w-full bg-primary-gray flex items-start pt-72 pl-40'>
//       <div className='px-4 py-16 text-left'>
//         <div className='text-4xl text-white font-semibold'>
//           <div className="flex flex-col items-start">
//             <h1>Hello, I'm a</h1>
//             <h1 style={{ fontWeight: 'bold', color: '#FF4A57', fontSize: '4rem' }}>{text}</h1>
            
//           </div>
//           <div className="mt-5 ml-4">
//             <button className='text-xl font-semibold text-white bg-custom-red px-6 py-3 flex items-center rounded-md border-2 border-custom-red'>
//               <Link to='not/public/MAHAPARA NIZAMANI.pdf' target='_blank'>Download Resume</Link>
//               <span className='ml-2'>
//                 <BsFillPersonLinesFill size={25} />
//               </span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;


import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import TypewriterComponent, { Typewriter } from 'typewriter-effect';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Home() {
  const [text] = useTypewriter({
    words: ['Developer', 'Website Designer', ],
    loop: {},
    typeSpeed: 150,
    deleteSpeed:40, 
    
  });


  return (
<div className='h-screen w-full bg-primary-gray sm:items-start pt-64 pl-4 sm:pl-40 sm:pt-72'>
  <div className='text-left sm:px-6 sm:py-16'>
    <div className='text-2xl ml-4 items-left text-justify text-white font- font-bold leading-tight sm:text-6xl'>
         <h1 className='hidden sm:block' style={{ marginBottom: '20px' }}>
        Hello, I'm a {""}
        <span className='pb-8 mb-8 p-4' style={{ paddingTop: '20rem', fontWeight: 'bold', color: '#FF4A57', fontSize: '4rem' }}>
          <br className='sm:hidden' />{text}
        </span>
        <span style={{ color: '#FF4A57', marginTop: '60px' }}>
          {" "}
          <Cursor className='bg-primary-gray pt-8 -z-0' cursorStyle='<' />
        </span>
    </h1>
          {/* <div className='text-xl'>
          <h1 className='sm:hidden md: hidden' style={{ marginBottom: '20px' }}>
  Hello, I'm a {""}
  <div className='pb-8 mb-8 p-4 sm:p-8 text-sm ' style={{ paddingTop: '20rem', fontWeight: 'bold', color: '#FF4A57', fontSize: '0.2rem', sm: 'text-xl' }}>
    <br className='sm:hidden' /><p>{text}</p>
  </div>
  <span style={{ color: '#FF4A57', marginTop: '60px' }}>
    {" "}
    <Cursor className='bg-transparent pt-8' cursorStyle='<' />  
  </span>
</h1>
</div> */}


<div className='text-5xl font-semibold tracking-wide'>
  <h1 className='sm:hidden md:hidden pb-2' style={{ marginBottom: '20px' }}>
    Hello, I'm a {""}
    <div className='sm:hidden md:block pt-2'>
      <h1 className='text-5xl font-bold text-custom-red inline'>{text}</h1>

    <span style={{ color: 'transparent',  }}>
      {" "}
      <Cursor className='bg-primary-gray '  Cursor='false'  cursorBlinking='false' cursorStyle='<' />
    </span>
    </div>
  </h1>
</div>


<div className='flex justify-between gap-8'>
  <button className='px-2 py-2 text-base mt-4 flex items-start font-normal sm:mt-8 sm:text-xl sm:font-semibold text-white bg-custom-red sm:px-6 sm:py-3 sm:my-3 sm:flex sm:items-center rounded-md border-2 border-custom-red'>
    <a href='./MAHAPARA NIZAMANI.pdf' target='_blank'  alt="alt text"
    rel="noopener noreferrer">Download Resume</a>

    <span className='ml-2'>
      <BsFillPersonLinesFill size={25} />
    </span>
  </button>
</div>

        </div>
      </div>
    </div>
  );
}

export default Home;
