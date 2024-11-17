import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { deleteRequest, requestEmpId, requestTo , requestFrom, requestReason, requestStatus} from '../utils/leaveSlice';
import { AUTH_BAGROUND_URL } from '../utils/constants';

import Header from './Header.js';
import { useNavigate } from 'react-router-dom';
import Client from './Client.js';

const RequestLeave = () => {
    
        const employees = useSelector((store) => store.leaves);
        const dispatch = useDispatch();
        const empID = useRef(null);
        const from = useRef(null);
        const to = useRef(null);
        const reason = useRef(null);
        const [newRequest , setNewRequest] = useState(true);
        const navigate = useNavigate();
        const [back , setBack] = useState(false);
        
        const handleBack = () => {
            setBack(true);
        }
        const handleNew = () => {
            dispatch(deleteRequest());
        }
        const handleRequest = () => {
            dispatch(requestEmpId(empID?.current?.value));
            dispatch(requestFrom(from?.current?.value));
            dispatch(requestTo(to?.current?.value));
            dispatch(requestReason(reason?.current?.value));
            dispatch(requestStatus());
            
        }
        
        if(back){
            return(
                <Client />
            )
        }

        if(!employees.empID){
            return(
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
              
              <input ref={empID} type='text' placeholder='Emp ID' className='w-8/12 mx-20 mb-3 p-3  rounded-2xl border-gray-800 border'/>
              <input ref={from} type='text' placeholder='From ' className='w-8/12 mx-20  p-3 mt-3 rounded-2xl border-gray-800 border' />
              <input ref={to} type='text' placeholder='To' className='w-8/12 mx-20  p-3 mt-3 rounded-2xl border-gray-800 border' />
              <input ref={reason} type='text' placeholder='Reason' className='w-8/12 mx-20  p-3 mt-3 rounded-2xl border-gray-800 border' />
              

              <button onClick={handleRequest} className='p-3 bg-blue-500 text-white w-8/12 mx-20 font-semibold rounded-2xl mt-11'>Request</button>
              <button onClick={handleBack} className='p-3 bg-blue-500 text-white w-8/12 mx-20 font-semibold rounded-2xl mt-11'>Go Back</button>
              
              </form>
          </div>
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
              <h1 className='text-black mx-20 text-2xl mt-3  text-center font-bold'>status: {employees.status}</h1>
              
              
              <button onClick={handleNew} className='p-3 bg-blue-500 text-white w-8/12 mx-20 font-semibold rounded-2xl mt-11'>New Request?</button>
              <button onClick={handleBack} className='p-3 bg-blue-500 text-white w-8/12 mx-20 font-semibold rounded-2xl mt-11'>Go Back</button>

              
              </div>
          </div>
        </div>
      )
    
}

export default RequestLeave