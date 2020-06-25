import React, { useState, useEffect } from 'react'
import { useHistory, NavLink } from 'react-router-dom'
import formSchema from '../validation/formSchema'
import * as Yup from 'yup'//needs * to work without error
import { useDispatch, useSelector } from 'react-redux'
import { postUserLogin } from '../actions'
import { LoadingLottie } from '../lotties/LoadingLottie'
import animationData from '../lotties/10815-walking-burger.json'
import animationData2 from '../lotties/890-loading-animation (1).json'

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

        <form className='loginForm' onSubmit={onSubmit}> {/* added onSubmit*/}
            <div>
                
                <div className="titleDiv">
                {isLoading && <div className='loader'><LoadingLottie something={animationData} width={80} height={80} /> </div>} <h2>Sign In</h2> {isLoading && <div className='loader'><LoadingLottie something={animationData} width={80} height={80} /> </div>}
                </div>

                <div className="infoDiv">
                    
                    <br/>
                    
                    <label><h3>Username:&nbsp;</h3>
                        <input
                            type='text'
                            name='username'
                            placeholder='Enter your username'
                            value={user.username}
                            maxLength='20'
                            onChange={onChange}

                        />
                    </label>
                    
                    <br/>
                    
                    <label><h3>Password:&nbsp;</h3>
                        <input
                            type='password'
                            name='password'
                            placeholder='Enter your password'
                            value={user.password}
                            maxLength='20'
                            onChange={onChange}
                        />
                    </label>

                    <br/>
                    <NavLink className='haveAccount' to='/registration'>
                <h4> Don't have an account? Click to Register! </h4>
                </NavLink>

                    <button className='submitBtn'>Submit</button>

                    <br/>
                
               

                    <div className='errors'>

                        <div>{formError.username}</div>

                        <div>{formError.password}</div>

                    </div>
                    {error && <div className='onClickError'>{error} </div>}
                </div>
                
            
            </div>
        </form>
    )
}

