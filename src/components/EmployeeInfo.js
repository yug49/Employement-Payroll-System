import React, { useState } from 'react'
import ManageSalary from './ManageSalary';
import { useSelector } from 'react-redux';
import { AUTH_BAGROUND_URL } from '../utils/constants';
import Header from './Header';

const EmployeeInfo = () => {
    const [back, setBack] = useState(false);
    const salary = useSelector((store) => store.salary);
    
    
    const handleBack = () => {
        setBack(true);
    }

    if(back){
        return <ManageSalary />
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
           
              <h1 className='text-black mx-20 text-4xl mt-3  text-center font-bold'>EMPLOYEES INFO</h1>

              {
                salary.employee.map((employee, index) => 
                    (
                        <div>
                             <h1 className = 'text-black mx-20 text-2xl mt-3 text-center font-semibold'>{employee}</h1>
                             <h1 className = 'text-black mx-20 text-lg mt-3 text-center font'>Salary: {salary.salary[index]}</h1>
                             {console.log(employee + salary.salary[index])}
                        </div>
                        
                    )
                )
              }

              <button onClick={handleBack} className='p-3 bg-blue-500 text-white w-8/12 mx-20 font-semibold rounded-2xl mt-11'>Go Back</button>
              </form>
          </div>
      </div>
    </div>
  )
}

export default EmployeeInfo