import React from 'react'

export const Background = () => {
  return (
    <div>
        <>
        <div className='fixed w-full h-screen z-[2]'>
           <div className='absolute top-[3%]   flex justify-center text-zinc-300 font-semibold  w-full py-10'>Documents</div>
           <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] leading-none tracking-tighter font-semibold text-zinc-700'>Docs.</h1>
        </div>
       
        </>
    </div>
  )
}
