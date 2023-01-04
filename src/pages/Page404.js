import Buttons from 'components/atoms/Buttons'
import React from 'react'

function Page404() {
  return (
    <div className='flex h-screen w-screen items-center justify-center flex-col'>
        <p className='text-8xl font-bold '>404</p>
        <p className='text-4xl font-semibold my-8'>Page Not Found</p>
        <Buttons href='/' type='link' className='mt-3 bg-sky-400 rounded-lg text-white p-2 text-lg shadow'>Back to home</Buttons>
    </div>
  )
}

export default Page404