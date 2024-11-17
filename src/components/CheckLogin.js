import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const CheckLogin = (props) => {

    const user = useSelector((store) => store.user);
    const navigate = useNavigate();
    
    const handleNavigate = () => {
        navigate("/");
    }
  
  return (
    <div>
        if(user.emailId === "") {handleNavigate}
    </div>
  )
}

export default CheckLogin;