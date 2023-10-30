import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

type Inputs = {
    email: string
    password: string
    confirmPassword: string
}

const MyForm = () => {

    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit = (data: any) => console.log(data)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="email">Email</label>
            <input {...register('email')} />
            <label htmlFor="password">Password</label>
            <input {...register('password')} />
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input {...register('confirmPassword')} />
            <input type="submit" />
        </form>
    )
}

export default MyForm
