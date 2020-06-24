import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import formSchema from '../validation/formSchema'
import * as Yup from 'yup'//needs * to work without error
import { useDispatch, useSelector } from 'react-redux'
import { postUserLogin } from '../actions'
import { LoadingLottie } from '../lotties/LoadingLottie'
import animationData from '../lotties/10818-food-around-the-city.json'


const exampleUser = {
    username: 'Harper',
    password: 'abc123',
}

const initialInfoValues = {
    username: '',
    password: '',
}

const initialFormErrors = {
    username: '',
    password: '',
}

export default function Login(props) {

    const [user, setUser] = useState(initialInfoValues)
    const [formError, setFormError] = useState(initialFormErrors)
    const [isLoading, error] = useSelector(state => [state.isLoading, state.error])

    const history = useHistory()
    const dispatch = useDispatch()


    const onChange = evt => {

        setUser({ ...user, [evt.target.name]: evt.target.value })

        const { name, value } = evt.target //deleted .value


        //Yup needs looking over
        Yup
            .reach(formSchema, name)
            .validate(value)
            .then(() => {
                setFormError({
                    ...formError,
                    [name]: ''
                })
            })
            .catch(err => {
                setFormError({
                    ...formError,
                    [name]: err.errors[0]
                    
                })
                
            })

    }





    //not showing?
    //come back
    const postNewLogin = newLogin => {
        // axiosWithAuth()
        // .post('https://recipes-bw.herokuapp.com/api/auth/login', newLogin)
        // .then(res=>{
        //     console.log(res.data)
        //     localStorage.setItem("userID",res.data.user.id)
        //     // console.log(localStorage.getItem("userID"))
        //     window.localStorage.setItem('token', res.data.token)
        //     history.push("/")
        // })
        // .catch(error=>{
        //     console.log('you broke it!',error)
        // })
        dispatch(postUserLogin(newLogin, history))
    }

    const onSubmit = evt => {
        evt.preventDefault()
        console.log(user)
        const newLogin = {
            // id:uuid(),
            username: user.username,
            password: user.password
           
        }
        
        postNewLogin(newLogin)

    }





    return (
        
        <form onSubmit={onSubmit}> {/* added onSubmit*/}
            
            <div>
                <br />
                <div>
                    <h1>Sign In</h1>

                </div>

                <div>
                    <br />
                    <label>Username:&nbsp;
                        <input
                            type='text'
                            name='username'
                            placeholder='username'
                            value={user.username}
                            maxLength='20'
                            onChange={onChange}
                           // required
                           

                           // required
                           



                        />
                    </label><br /><br />
                    <label>Password:&nbsp;
                        <input
                            type='password'
                            name='password'
                            placeholder='password'
                            value={user.password}
                            maxLength='20'
                            onChange={onChange}

                           // required
                           

                        />
                    </label>


                </div><br />


                <div className='errors'>

                    <div>{formError.username}</div>

                    <div>{formError.password}</div>

                </div>
                      
                <div>
                    {isLoading && <LoadingLottie something={animationData} width={200} height={200} />}
                    {error && <div>{error} </div>}
                    <button className='submitBtn'>Submit</button>
                </div>
            </div>
        </form>
    )
}

