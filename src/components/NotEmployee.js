import React, { useState } from 'react'
import Header from './Header'
import { AUTH_BAGROUND_URL } from '../utils/constants'
import Auth from './Auth'

const NotEmployee = () => {
    const [back , setBack] = useState(false);
    
    const handleBack = () => {
        setBack(true);
    }
    if(back){
        return(
            <Auth />
        )
    }
  return (
    <div>
        <div>
        <Header />
    </div>
        <div>
          <div className='absolute'>
            <img src={AUTH_BAGROUND_URL} alt='bg image' className='w-screen h-screen'/>
          </div>
          <div className='absolute mt-48 mx-auto right-0 left-0 bg-white border border-gray-400 rounded-3xl w-3/12 h-4/6'>
          <h1 className='text-black mx-20 text-4xl mt-3  text-center font-bold'>Are you an Admin? Try Admin Login</h1>
          
          <button onClick={handleBack} className='p-3 bg-blue-500 text-white w-8/12 mx-20 font-semibold rounded-2xl mt-11'>Go Back to Login Page</button>
          
          </div>
          </div>
      </div>
  )
}

export default NotEmployee