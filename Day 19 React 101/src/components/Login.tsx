import React from 'react'
import { useState } from 'react'


const Login = () => {
    // const [Username, setUsername] = useState<number>();
    // const [Password, setPassword] = useState<number>();
    const [weight, setWeight] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);


    // const onChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setUsername(+event.target.value)
    //     console.log(Username)
    // }
    const onChangeWeight = (event: React.ChangeEvent<HTMLInputElement>) => {
        setWeight(+event.target.value)
        console.log('weight are' , weight)
        
    }
    const onChangeHeight = (event: React.ChangeEvent<HTMLInputElement>) => {
        setHeight(+event.target.value)
        console.log('height are' ,height)
    }
   
    const CalculateBMI = (weight: number, height: number): number => {
        return (weight / (height * height)) * 10000
    };

   

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const bmi = CalculateBMI(weight, height);
        console.log(bmi.toFixed(2))
        setWeight(99)
    }

   
    return (
        <>
            <div>
                <form onSubmit={onSubmit}>
                    <h1>BMI Result : </h1>
                    {/* <h1>weight is {weight}</h1>
                    <h1>height is {height}</h1> */}
                    <h1>{CalculateBMI(weight,height)}</h1>
                    <label htmlFor="weight"><b>BMI Calculation</b></label>
                    <br />
                    {/* <input type="text" id='username' name='username' onChange={onChangeUsername} />
        <input type="password" id='password' name='password' onChange={onChangePassword}/> */}
                    <br />
                    <label htmlFor="">Input weight (kg.)</label>
                    <input type="number" name="weight" id="weight" onChange={onChangeWeight} />
                    <br />
                    <label htmlFor="">Input height (m.)</label>
                    <input type="number" name="height" id="height" onChange={onChangeHeight} />
                    <br />
                    <input type="submit" />
                </form>
            </div>
        </>
    )
}



export default Login
