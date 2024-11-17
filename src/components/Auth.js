import React, { useRef, useState } from 'react';
import { ValiditeSignIn } from '../utils/ValidateFormat';
import { AUTH_BAGROUND_URL, LOGIN_LOGO } from '../utils/constants'
import { auth } from '../utils/firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import AuthHeader from './AuthHeader';
  

const Auth = () => {

  const email = useRef(null);
  const password = useRef(null);


  const [employeeLogin, setEmployeeLogin] = useState(true);
  const [signInValidity, setSignInValidity] = useState("");
  const navigate = useNavigate();
  
  const handleClientSignIn = () => {
    const message = ValiditeSignIn(email?.current?.value, password?.current?.value);
    setSignInValidity(message);
    if(message) return;

    signInWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user
      
      console.log("logged in")
      console.log(user);
      navigate("/Client");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }

  const handleAdminSignIn = () => {
    const message = ValiditeSignIn(email?.current?.value, password?.current?.value);
    setSignInValidity(message);
    if(message) return;

    signInWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user
      
      console.log("logged in")
      console.log(user);

      navigate("/Admin");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }

  
  if(employeeLogin){
    return (
      <div>
        <div>
          <AuthHeader />
        </div>
          <div className='absolute'>
              <img src={AUTH_BAGROUND_URL} alt='bg image' className='w-screen h-screen'/>
          </div>
          <div>
          <form onSubmit={(e) => {e.preventDefault()}} className='absolute mt-48 mx-auto right-0 left-0 bg-white border border-gray-400 rounded-3xl w-3/12 h-4/6 ' >
              <img src={LOGIN_LOGO} alt='loginLogo' className='w-16 mx-auto mt-12'/>
              
              <h1 className='text-black mx-20 text-4xl mt-3  text-center font-bold'>EMPLOYEE PAYROLL SYSTEM</h1>
              <hr className='mx-16 my-7'/>
              <h3 className='text-black mx-20 text-xl mb-5 font-semibold'>Employee Sign In</h3>
              
              <input ref={email} type='text' placeholder='Employee Email ID' className='w-8/12 mx-20 mb-3 p-3  rounded-2xl border-gray-800 border'/>
              <input ref={password} type='password' placeholder='Password' className='w-8/12 mx-20  p-3 mt-3 rounded-2xl border-gray-800 border' />
              <div className='text-red-700 mx-20 mt-7 mb-7 font-semibold'>{signInValidity}</div>
              <div className='text-black mx-20 mt-5 font-semibold'>Not an employee? <p className='cursor-pointer text-blue-500 inline' onClick={() => {
                setEmployeeLogin(!employeeLogin);
              }}>
                Admin Login</p></div>
              <button onClick={handleClientSignIn} className='p-3 bg-blue-500 text-white w-8/12 mx-20 font-semibold rounded-2xl mt-11'>Sign In</button>
              </form>
          </div>
      </div>
    )
  }
  else{
    return (
      <div>
        <div>
          <AuthHeader />
        </div>
          <div className='absolute'>
              <img src={AUTH_BAGROUND_URL} alt='bg image' className='w-screen h-screen'/>
          </div>
          <div>
          <form onSubmit={(e) => {e.preventDefault()}} className='absolute mt-48 mx-auto right-0 left-0 bg-white border border-gray-400 rounded-3xl w-3/12 h-4/6' >
              <img src={LOGIN_LOGO} alt='loginLogo' className='w-16 mx-auto mt-12'/>
              
              <h1 className='text-black mx-20 text-4xl mt-3  text-center font-bold'>EMPLOYEE PAYROLL SYSTEM</h1>
              <hr className='mx-16 my-7'/>
              <h3 className='text-black mx-20 text-xl mb-5 font-semibold'>Admin Sign In</h3>
              
              <input ref={email} type='text' placeholder='Admin Email ID' className='w-8/12 mx-20 mb-3 p-3  rounded-2xl border-gray-800 border'/>
              <input ref={password} type='password' placeholder='Password' className='w-8/12 mx-20  p-3 mt-3 rounded-2xl border-gray-800 border' />
              <div className='text-red-700 mx-20 mt-7 mb-7 font-semibold'>{signInValidity}</div>
              <div className='text-black mx-20 mt-5 font-semibold'>Not an Admin? <p className='cursor-pointer text-blue-500 inline' onClick={() => {
                setEmployeeLogin(!employeeLogin);
              }}>
                Employee Login</p></div>
              <button onClick={handleAdminSignIn} className='p-3 bg-blue-500 text-white w-8/12 mx-20 font-semibold rounded-2xl mt-11'>Sign In</button>
              </form>
          </div>
      </div>
    )
  }
  
}

export default Auth