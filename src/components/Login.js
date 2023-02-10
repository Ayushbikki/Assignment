import React from 'react'
import { useState } from 'react';
//import Data from './Data';
import { Navigate, useNavigate } from 'react-router-dom';


function Login() {
    const initialValue = { username: '', password: '' }
    const [userInfo, setUserInfo] = useState(initialValue)
    const navigate = useNavigate();

    const handleChange = (e) => {
        //destructuring
        const { name, value } = e.target
        setUserInfo({ ...userInfo, [name]: value });
        console.log('user', userInfo)
    }

    const handleSubmit = (e) => {

        e.preventDefault();
        if (userInfo.username === 'demo@coralmango.com' && userInfo.password === 'demo123') {
            navigate("/data")
            //alert('valid')
        }
        else {
            alert('not a valid user');
        }
        setUserInfo(initialValue)

    }

    return (
        <>
            <h2>Login Page</h2>
            <form onSubmit={handleSubmit}>

                <input className='m-2' type='email' name='username' value={userInfo.username}
                    placeholder='UserName' onChange={handleChange} />
                <br></br>
                <input type='password' className='m-2' name='password' value={userInfo.password}
                    placeholder="Password" onChange={handleChange} />
                <br></br>
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default Login