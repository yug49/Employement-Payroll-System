import React from 'react'
import { LOGO } from '../utils/constants'
import { Link } from 'react-router-dom'


const Header = () => {

  return (
    <div className='flex justify-between bg-gradient-to-b from-gray-900 z-10 absolute w-full pt-8'>
        <div>
            <img src={LOGO} className='w-28 rounded-full ml-64 ' />
        </div>
        <div>

        <ul className="flex self-center mr-64">
        <Link className="headerLink" to="/sign-in"><li className="cursor-pointer mr-10 text-xl px-4 py-2 text-center border-2 rounded-3xl mt-4 border-black border-solid bg-white">Log Out</li></Link>
        </ul>
        </div>
    </div>
  )
}

export default Header