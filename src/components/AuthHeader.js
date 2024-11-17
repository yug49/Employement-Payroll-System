import React from 'react'
import { LOGO } from '../utils/constants'

const AuthHeader = () => {

  return (
    <div className='flex bg-gradient-to-b from-gray-900 z-10 absolute w-full pt-4'>
        <div>
            <img src={LOGO} className='w-28 rounded-full ml-64 ' />
        </div>
    </div>
  )
}

export default AuthHeader