import React, { useState } from 'react'
import { AUTH_BAGROUND_URL } from '../utils/constants'
import ManageLeaves from './ManageLeaves.js';
import { useDispatch } from "react-redux";
import AddEmployee from './AddEmployee.js';
import ManageSalary from './ManageSalary.js';
import RemoveEmployee from './RemoveEmployee.js';
import Header from './Header.js';

const Admin = () => {

    const [manageSalary, setManageSalary] = useState(false);
    const [manageLeaves, setManageLeaves] = useState(false);
    const [addEmployee, setAddEmployee] = useState(false);
    const [removeEmployee, setRemoveEmployee] = useState(false);

    const dispatch = useDispatch();

    const handleManageSalary = () => {
        setManageSalary(true);
    }

    const handleManageLeaves = () => {
        setManageLeaves(true);
    }

    const handleAddEmployee = () => {
        setAddEmployee(true);
    }

    const handleRemoveEmployee = () => {
        setRemoveEmployee(true);
    }


    if(manageLeaves){
        return(
            <ManageLeaves />
        )
    }

    if(manageSalary){
        return(
            <ManageSalary />
        )
    }

    if(addEmployee){
        return(
            <AddEmployee />
        )
    }

    if(removeEmployee){
        return(
            <RemoveEmployee />
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
          <form onSubmit={(e) => {e.preventDefault()}} className='absolute mt-48 mx-auto right-0 left-0 bg-white border border-gray-400 rounded-3xl w-3/12 h-4/6 ' >
            <div className='my-20'>
            <div>
              <h1 className='text-black mx-20 text-4xl text-center font-bold'>ADMIN Portal</h1>
              <h3 className='text-black mx-20 text-2xl mt-3  text-center font-semibold'>Admin</h3>
              <h3 className='text-black mx-20 text-2xl mt-3 mb-3  text-center font-semibold'>admin@employee.com</h3>
              </div>
              <button onClick={handleAddEmployee} className='p-3 bg-blue-500 text-white w-8/12 mx-20 font-semibold rounded-2xl mt-11'>Add Employees</button>
              {/* <button onClick={handleRemoveEmployee} className='p-3 bg-blue-500 text-white w-8/12 mx-20 font-semibold rounded-2xl mt-11'>Remove Employees</button> */}
              <button onClick={handleManageSalary} className='p-3 bg-blue-500 text-white w-8/12 mx-20 font-semibold rounded-2xl mt-11'>Manage Salary</button>
              <button onClick={handleManageLeaves} className='p-3 bg-blue-500 text-white w-8/12 mx-20 font-semibold rounded-2xl mt-11'>Manage Leaves</button>
            </div>
            
        </form>
        </div>
    </div>
  )
}

export default Admin