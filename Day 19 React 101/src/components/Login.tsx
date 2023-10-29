import React from 'react'
import { useState } from 'react'


const Login = () => {
    const [Username, setUsername] = useState<string>();
    const [Password, setPassword] = useState<string>();

    const onChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value)
        console.log(Username)
    }
    const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
        console.log(Password)
    }
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log("Submitted")
    }
    return (
        <>
        <div>
        <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id='username' name='name' onChange={onChangeUsername} />
        <input type="password" id='password' name='name' onChange={onChangePassword}/>
        </form>
        </div>
        </>
    )
}



export default Login
