import React, { useState } from 'react'
import { AUTH_BAGROUND_URL } from '../utils/constants'
import RequestLeave from './RequestLeave';
import Header from './Header';
import GeneratePayslip from './GeneratePayslip';
import { useSelector } from 'react-redux';

const Client = () => {

    const [generatePaySlip, setGeneratePaySlip] = useState(false);
    const [requestLeave, setRequestLeave] = useState(false);
    const user = useSelector((store) => store.user);

    const handleGeneratePaySlip = () => {
        setGeneratePaySlip(true);
    }

    const handleRequestLeave = () => {
        setRequestLeave(true);
    }

    if(generatePaySlip){
        return (
            <GeneratePayslip />
        )
    }

    if(requestLeave){
        return(
            
            <RequestLeave />
        )
    }
  return (
    <div>
        <div>
            <Header />
        </div>
          <div className='absolute'>
              <img src={AUTH_BAGROUND_URL} alt='bg image' className='w-screen h-screen'/>
          </div>
          <div>
          
        
          <form onSubmit={(e) => {e.preventDefault()}} className=' pt-20  absolute mt-48 mx-auto right-0 left-0 bg-white border border-gray-400 rounded-3xl w-3/12 h-4/6 ' >
          <h1 className='text-black mx-20 text-4xl text-center font-bold mb-10'>Employee Portal</h1>
            <h3 className='text-black mx-20 text-2xl mt-3  text-center font-semibold'>{user.emailId}</h3>
            <h3 className='text-black mx-20 text-2xl mt-3 mb-20  text-center font-semibold'>{user.password}</h3>
              <button onClick={handleGeneratePaySlip} className='p-3 bg-blue-500 text-white w-8/12 mx-20 font-semibold rounded-2xl '>Generate Payslip</button>
              <button onClick={handleRequestLeave} className='p-3 bg-blue-500 text-white w-8/12 mx-20 font-semibold rounded-2xl mt-32'>Request Leave</button>
              </form>
          </div>
      </div>
  )
}

export default Client