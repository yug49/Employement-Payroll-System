import React, { useState } from 'react'
import Header from './Header'
import { AUTH_BAGROUND_URL } from '../utils/constants'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Client from './Client'

const GeneratePayslip = () => {
    const navigate = useNavigate();
    const paySlip = useSelector((store) => store.paySlip);
    const [back , setBack] = useState(false);
    
    const handleBack = () => {
        setBack(true);
    }
    if(back){
        return(
            <Client />
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
          <h1 className='text-black mx-20 text-4xl mt-3  text-center font-bold'>Generated Payslip</h1>
          <h1 className='text-black mx-20 text-2xl mt-3  text-center font-bold'>Salary: Rs.10000</h1>
          <h1 className='text-black mx-20 text-2xl mt-3  text-center font-bold'>Tax: {paySlip.tax}</h1>
          <h1 className='text-black mx-20 text-2xl mt-3  text-center font-bold'>Overtime: 5hr * {paySlip.overTime} = Rs. {5*paySlip.overTime}</h1>
          <h1 className='text-black mx-20 text-2xl mt-3  text-center font-bold'>UnderTime: 3hr * {paySlip.underTime} = -Rs. {3*paySlip.underTime}</h1>
          <h1 className='text-black mx-20 text-2xl mt-3  text-center font-bold'>Total: Rs. {10000 - (100*paySlip.tax) + 5*paySlip.overTime - 3*paySlip.underTime}</h1>
          <div className='flex'>
          <button onClick={handleBack} className='p-3 bg-blue-500 text-white w-8/12 mx-20 font-semibold rounded-2xl mt-11'>Go Back</button>
          
          </div>
          </div>
      </div>
    </div>
  )
}

export default GeneratePayslip