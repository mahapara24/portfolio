import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData()

    // const [data,setData] =useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/mahapara24')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // })
  return (
    <div className='snap-y px-10 h-screen w-full py-40 overflow-y-auto sm:overflow-hidden sm:py-40 sm:px-60 sm:pb-20  bg-primary-gray  '>
    <div className='sm:max-w-screen-lg pt-20 sm:p-4 flex flex-col justify-center  sm:py-30 sm:px-30 '> 
     <div> <h2 className='leading-loose text-2xl text-custom-red font-bold sm:text-4xl'>
            Github</h2>
            <p className='sm:text-3xl sm:m-4 sm:p-4 sm:pt-4 sm:mr-14 text-white text-2xl sm:pb-14'>
            GitHub followers: <span className='text-white'> {data.followers}</span>
            <br/>
            <img className='sm:pt-8 w-80' src={data.avatar_url} alt="git picture" width={300} />

            </p></div>
    </div>
  </div>
  )
}

export default Github

export const githubinfoLoader = async () => {
 const response = await fetch('https://api.github.com/users/mahapara24')
 return response.json()
}