import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { getQueriesForElement } from '@testing-library/react'
import * as Yup from 'yup'
import formSchema from '../validation/formSchema2'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { postUserRegister } from '../actions'
import { LoadingLottie } from '../lotties/LoadingLottie'
import animationData from '../lotties/4073-loader.json'

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
  const [isLoading, setIsLoading] =useState(false)

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
    setIsLoading(true)
    // console.log(newUser)
    // axios.post('https://recipes-bw.herokuapp.com/api/auth/register', newUser)
    //   .then(res => {
    //     console.log(res.data)
    //     localStorage.setItem("userID", res.data.newUser.id)
    //     console.log(localStorage.getItem("userID"))
    //     history.push("/")
    //     // setUser([...user, res.data])
    //   })
    //   .catch(err => {
    //     console.log(err.message)
    //     debugger
    //   })
    //   .finally(() => {
    //     setFormValues(initialInfoValues)
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
    <form onSubmit={onSubmit}>
      <div>
        <div>
          <h2>Create An Account</h2>
          <button>Create</button>
          {/* {isLoading && <LoadingLottie something={animationData}/>} */}
        </div>
        <div>

          <br></br>
          <br></br>

          <label>Username:&nbsp;
                        <input
              type='text'
              name='username'
              maxLength='20'
              value={user.username}
              onChange={onChange}
            />
          </label>

          <br></br>
          <br></br>

          <label>Password:&nbsp;
                        <input
              type='password'
              name='password'
              maxLength='20'
              value={user.password}
              onChange={onChange}
            />
          </label>

          <br></br>
          <br></br>

          <label>E-Mail Address:&nbsp;
                        <input
              type='text'
              name='email'
              maxLength='50'
              value={user.email}
              onChange={onChange}
            />
          </label>

          <br></br>
          <br></br>

          <div>

            <div>{formErrors.username}</div>


            <div>{formErrors.password}</div>


            <div>{formErrors.email}</div>

          </div>
        </div>
      </div>
    </form>


  )

}