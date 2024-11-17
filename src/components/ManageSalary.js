import React, { useRef, useState } from 'react'
import { AUTH_BAGROUND_URL } from '../utils/constants'
import { useDispatch } from 'react-redux';
import { updateTax, updateOverTime, updateUnderTime } from '../utils/paySlipSlice';

import Header from './Header.js';
import Admin from './Admin.js';

const ManageSalary = () => {

    const newUnderTime = useRef(null);
    const newOverTime = useRef(null);
    const newTax = useRef(null);
    const dispatch = useDispatch();
    const [back, setBack] = useState(null);

    const handleChanges = () => {
        dispatch(updateTax(newTax?.current?.value));
        dispatch(updateOverTime(newOverTime?.current?.value));
        dispatch(updateUnderTime(newUnderTime?.current?.value));
    }

    const handleBack = () => {
        setBack(true);
    }

    if(back){
        return(
            <Admin />
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
          <div>
          <form onSubmit={(e) => {e.preventDefault()}} className='absolute mt-48 mx-auto right-0 left-0 bg-white border border-gray-400 rounded-3xl w-3/12 h-4/6 ' >
           
              <h1 className='text-black mx-20 text-4xl mt-3  text-center font-bold'>MANAGE SALARY</h1>
              <hr className='mx-16 my-7'/>
              
              <input ref={newTax} type='number' placeholder='Enter New Tax%' className='w-8/12 mx-20 mb-3 p-3  rounded-2xl border-gray-800 border'/>
              <input ref={newUnderTime} type='number' placeholder='Enter new UnderTime penalty per hour' className='w-8/12 mx-20  p-3 mt-3 rounded-2xl border-gray-800 border' />
              <input ref={newOverTime} type='number' placeholder='Enter new OverTime reward per hour' className='w-8/12 mx-20  p-3 mt-3 rounded-2xl border-gray-800 border' />
              
              <button onClick={handleChanges} className='p-3 bg-blue-500 text-white w-8/12 mx-20 font-semibold rounded-2xl mt-11'>Update Changes</button>
              <button onClick={handleBack} className='p-3 bg-blue-500 text-white w-8/12 mx-20 font-semibold rounded-2xl mt-11'>Go Back</button>
              </form>
          </div>
      </div>
    </div>
  )
}

export default ManageSalary