import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { approveRequests, declineRequests } from '../utils/leaveSlice';
import { AUTH_BAGROUND_URL } from '../utils/constants';

import Header from './Header.js';
import Admin from './Admin.js';

const ManageLeaves = () => {

    const employees = useSelector((store) => store.leaves);
    const dispatch = useDispatch();
    const [back, setBack] = useState(false);

    const handleApprove = () =>{
        dispatch(approveRequests());
    }

    const handleDecline = () => {
        dispatch(declineRequests());
    }

    const handleBack = () => {
        setBack(true);
    }

    if(back){
        return(
            <Admin />
        )
    }


    if(!employees.empID){
        
        return (
            <div>
            <div>
                <Header />
            </div>
                <div className='absolute'>
                    <img src={AUTH_BAGROUND_URL} alt='bg image' className='w-screen h-screen'/>
                </div>
            <div className='absolute mt-48 mx-auto right-0 left-0 bg-white border border-gray-400 rounded-3xl w-3/12 h-4/6'>
                <h1 className='text-black mx-20 text-4xl mt-3  text-center font-bold'>Manage Leaves</h1>
                <h1 className='text-black mx-20 text-2xl mt-3  text-center font-bold'>NO REQUEST FOUND</h1>  
                <button onClick={handleBack} className='p-3 bg-blue-500 text-white w-8/12 mx-20 font-semibold rounded-2xl mt-11'>Go Back</button>
          </div>
      </div>
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
          <h1 className='text-black mx-20 text-4xl mt-3  text-center font-bold'>Manage Leaves</h1>
          <h1 className='text-black mx-20 text-2xl mt-3  text-center font-bold'>Emp ID: {employees.empID}</h1>
          <h1 className='text-black mx-20 text-2xl mt-3  text-center font-bold'>from: {employees.from}</h1>
          <h1 className='text-black mx-20 text-2xl mt-3  text-center font-bold'>to: {employees.to}</h1>
          <h1 className='text-black mx-20 text-2xl mt-3  text-center font-bold'>reason: {employees.reason}</h1>
          <h1 className='text-black mx-20 text-lg mt-3  text-center font-bold'>status: {employees.status}</h1>
          <div className='flex'>
          <button onClick={handleApprove} className='p-3 bg-green-600 text-white w-1/4 mx-auto font-semibold rounded-2xl mt-11'>Approve</button>
          <button onClick={handleDecline} className='p-3 bg-red-700 text-white w-1/4 mx-auto font-semibold rounded-2xl mt-11'>Decline</button>
          </div>
          <button onClick={handleBack} className='p-3 bg-blue-500 text-white w-8/12 mx-20 font-semibold rounded-2xl mt-11'>Go Back</button>
          </div>
      </div>
    </div>
  )
}

export default ManageLeaves