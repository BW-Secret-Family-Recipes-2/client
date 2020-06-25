import React, { useState } from 'react'
import * as Yup from 'yup'
import formSchema from '../validation/formSchema2'
import { useHistory, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { postUserRegister } from '../actions'
import { LoadingLottie } from '../lotties/LoadingLottie'
import animationData from '../lotties/890-loading-animation (1).json'


const initialInfoValues = {
  username: '',
  password: '',
  email: '',
}

const initialFormValues = {
  username: '',
  password: '',
  email: '',
}

const initialFormErrors = {
  username: '',
  password: '',
  email: '',
}


export default function Registration() {

  const [user, setUser] = useState(initialInfoValues)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [isLoading, error] = useSelector(state=>[state.isLoading, state.error])

  const history = useHistory()
  const dispatch = useDispatch()


  const onChange = evt => {

    const { name, value } = evt.target

    Yup
      .reach(formSchema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: ""
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        })
      })


    setUser({
      ...user,
      [name]: value,
    })

    setFormValues({
      ...formValues,
      [name]: value,
    })

  }

  const postNewUser = newUser => {
    // console.log(newUser)
    // axiosWithAuth()
    // .post('https://recipes-bw.herokuapp.com/api/auth/register', newUser)
    //   .then(res => {
    //     console.log(res.data)
    //     localStorage.setItem("userID", res.data.newUser.id)
    //     console.log(localStorage.getItem("userID"))
    //     window.localStorage.setItem('token', res.data.token)
    //     history.push("/")
    //     // setUser([...user, res.data])
    //   })
    //   .catch(err => {
    //     console.log(err.message)
    //     debugger
    //   })
    //   .finally(() => {
       
    //   })
    dispatch(postUserRegister(newUser,history)) 
   
 
  }

  const onSubmit = evt => {

    evt.preventDefault()

    const newUser = { ...user }

    setUser(user => [newUser, user])

    postNewUser(newUser)
  }



  return (
    <form className='loginForm' onSubmit={onSubmit}>
      <div>
        <div className="titleDiv">
        {isLoading && <LoadingLottie something={animationData} width={100} height={100}/>}  <h2>Create An Account</h2>     {isLoading && <LoadingLottie something={animationData} width={100} height={100}/>}
        </div>
        <div className="infoDiv">

          <br></br>

          <label><h3>Username:&nbsp;</h3>
                        <input
              type='text'
              name='username'
              maxLength='20'
              value={user.username}
              onChange={onChange}
              placeholder="Enter a username"
            />
          </label>

          <br></br>

          <label><h3>Password:&nbsp;</h3>
                        <input
              type='password'
              name='password'
              maxLength='20'
              value={user.password}
              onChange={onChange}
              placeholder="Enter a password"
            />
          </label>

          <br></br>

          <label><h3>E-Mail Address:&nbsp;</h3>
                        <input
              type='text'
              name='email'
              maxLength='50'
              value={user.email}
              onChange={onChange}
              placeholder="Enter a valid e-mail"
            />
          </label>

          
          <br></br>
 
          <NavLink className='haveAccount' to='/login'>
                <h4> Already have an account? Click to Login! </h4>
                </NavLink>
             
          <button className='createBtn'>Create</button>

      

          <div className='errors'>

            <div>{formErrors.username}</div>


            <div>{formErrors.password}</div>


            <div>{formErrors.email}</div>

          </div>
          {error && <div className='onClickError'>{error} </div>}
        
        </div>
      </div>
    </form>


  )

}