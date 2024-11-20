import React from 'react'
import { LOGO } from '../utils/constants'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { removeUser } from '../utils/userSlice'


const Header = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(removeUser());
    navigate('/');
  }

  return (
    <div className='flex justify-between bg-gradient-to-b from-gray-900 z-10 absolute w-full pt-8'>
        <div>
            <img src={LOGO} className='w-28 rounded-full ml-64 ' />
        </div>
        <div>

        <ul className="flex self-center mr-64">
        <button className="cursor-pointer mr-10 text-xl px-4 py-2 text-center border-2 rounded-3xl mt-4 border-white text-white border-solid bg-transparent" onClick={handleLogOut}>Log Out</button>
        </ul>
        </div>
    </div>
  )
}

export default Header