import React, { useRef, useState } from 'react'
import { AUTH_BAGROUND_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux';
import { updateTax, updateOverTime, updateUnderTime } from '../utils/paySlipSlice';

import Header from './Header.js';
import Admin from './Admin.js';
import EmployeeInfo from './EmployeeInfo.js';

const ManageSalary = () => {

    const newUnderTime = useRef(null);
    const newOverTime = useRef(null);
    const newTax = useRef(null);
    const dispatch = useDispatch();
    const [back, setBack] = useState(null);
    const current = useSelector((store) => store.paySlip)
    const [employeeInfo, setEmmployeeInfo] = useState(false);

    const handleChanges = () => {
        dispatch(updateTax(newTax?.current?.value));
        dispatch(updateOverTime(newOverTime?.current?.value));
        dispatch(updateUnderTime(newUnderTime?.current?.value));
    }

    const handleBack = () => {
        setBack(true);
    }

    const handleInfo = () => {
        setEmmployeeInfo(true);
    }

    if(back){
        return(
            <Admin />
        )
    }

    if(employeeInfo){
      return <EmployeeInfo />
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
          <form onSubmit={(e) => {e.preventDefault()}} className='absolute mt-40 mx-auto right-0 left-0 bg-white border border-gray-400 rounded-3xl w-3/12 py-10 ' >
           
              <h1 className='text-black mx-20 text-4xl   text-center font-bold'>MANAGE SALARY</h1>
              <hr className='mx-16 my-7'/>
              <u><h1 className='text-black mx-20 text-2xl mt-3 text-center font-bold'>Current Values</h1></u>
              <h1 className='text-black mx-20 text-lg mt-3 text-center font-bold'>Tax: {current.tax}</h1>
              <h1 className='text-black mx-20 text-lg mt-3 text-center font-bold'>Over Time per Hour: {current.overTime}</h1>
              <h1 className='text-black mx-20 text-lg mt-3 text-center font-bold'>Under Time per Hour: {current.underTime}</h1>
              <hr className='mx-16 my-7'/>

              <input ref={newTax} type='number' placeholder='Enter New Tax%' className='w-8/12 mx-20 mb-3 p-3  rounded-2xl border-gray-800 border'/>
              <input ref={newUnderTime} type='number' placeholder='Enter new UnderTime penalty per hour' className='w-8/12 mx-20  p-3 mt-3 rounded-2xl border-gray-800 border' />
              <input ref={newOverTime} type='number' placeholder='Enter new OverTime reward per hour' className='w-8/12 mx-20  p-3 mt-3 rounded-2xl border-gray-800 border' />
              
              <button onClick={handleChanges} className='p-3 bg-blue-500 text-white w-8/12 mx-20 font-semibold rounded-2xl mt-11'>Update Changes</button>
              <button onClick={handleInfo} className='p-3 bg-blue-500 text-white w-8/12 mx-20 font-semibold rounded-2xl mt-11'>View Employees</button>
              <button onClick={handleBack} className='p-3 bg-blue-500 text-white w-8/12 mx-20 font-semibold rounded-2xl mt-11'>Go Back</button>
              </form>
          </div>
      </div>
    </div>
  )
}

export default ManageSalary