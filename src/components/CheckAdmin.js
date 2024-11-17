import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const CheckAdmin = () => {
  
    const user = useSelector((store) => store.user);
    const navigate = useNavigate();
    

    if(user.emailId != "admin@company.com"){
        navigate("/sign-in");
    }
  
  return (
    <div>
        
    </div>
  )
}

export default CheckAdmin;