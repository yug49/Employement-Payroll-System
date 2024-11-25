import React, { useRef, useState } from 'react'
import { AUTH_BAGROUND_URL } from '../utils/constants'
import { auth } from '../utils/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import Header from './Header.js';
import { ValiditeSignIn } from '../utils/ValidateFormat.js';
import Admin from './Admin.js';
import { useDispatch } from 'react-redux';
import { addEmployee, addSalary } from '../utils/salarySlice.js';


const AddEmployee = () => {

    const empEmail = useRef(null);
    const empPassword = useRef(null);
    const empSalary = useRef(null);
    const [signUpValid, setSignUpValid] = useState("");
    const [back, setBack] = useState("");
    const dispatch = useDispatch();
    const [employeeAdded, setEmployeeAdded] = useState("");

    const handleBack = () => {
        setBack(true);
    }

    const handleAddEmployee = () => {
        const message = ValiditeSignIn(empEmail?.current?.value, empPassword?.current?.value);
        if(message){
            setSignUpValid(message);
            return;
        }

        createUserWithEmailAndPassword(auth, empEmail?.current?.value, empPassword?.current?.value)
            .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            dispatch(addSalary(empSalary?.current?.value));
            dispatch(addEmployee(empEmail?.current?.value));
            setEmployeeAdded("Employee Added!");
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
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
          <div className='absolute'>
              <img src={AUTH_BAGROUND_URL} alt='bg image' className='w-screen h-screen'/>
          </div>
          <div>
          <form onSubmit={(e) => {e.preventDefault()}} className='absolute mt-48 mx-auto right-0 left-0 bg-white border border-gray-400 rounded-3xl w-3/12 h-4/6' >
              
              <h1 className='text-black mx-20 text-4xl mt-3  text-center font-bold'>ADD EMPLOYEE</h1>
              <hr className='mx-16 my-7'/>
              
              <input ref={empEmail} type='text' placeholder='New Employee Email' className='w-8/12 mx-20 mb-3 p-3  rounded-2xl border-gray-800 border'/>
              <input ref={empPassword} type='text' placeholder='Set a Password' className='w-8/12 mx-20  p-3 mt-3 rounded-2xl border-gray-800 border' />
              <input ref={empSalary} type='number' placeholder='Enter Salary' className='w-8/12 mx-20  p-3 mt-3 rounded-2xl border-gray-800 border' />
              <div className='text-red-700 mx-20 mt-7 mb-7 font-semibold'>{signUpValid}</div>
              <div className='text-green-700 mx-20 mt-7 mb-7 font-semibold'>{employeeAdded}</div>
             
              <button onClick={handleAddEmployee} className='p-3 bg-blue-500 text-white w-8/12 mx-20 font-semibold rounded-2xl mt-11'>Add Employee</button>
              <button onClick={handleBack} className='p-3 bg-blue-500 text-white w-8/12 mx-20 font-semibold rounded-2xl mt-11'>Go Back</button>
              </form>
          </div>
      </div>
  )
}

export default AddEmployee