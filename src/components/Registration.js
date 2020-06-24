import React, { useState } from 'react'
import * as Yup from 'yup'
import formSchema from '../validation/formSchema2'
import { useHistory } from 'react-router-dom'
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
    <form onSubmit={onSubmit}>
      <div>
        <div className="titleDiv">
          <h2>Create An Account</h2>
        </div>
        <div className="infoDiv">

          <br></br>

          <label>Username:&nbsp;
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

          <label>Password:&nbsp;
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

          <label>E-Mail Address:&nbsp;
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
          {isLoading && <LoadingLottie something={animationData} width={100} height={100}/>}
          <button>Create</button>

          <div>

            <div>{formErrors.username}</div>


            <div>{formErrors.password}</div>


            <div>{formErrors.email}</div>

          </div>
          {error && error}
        </div>
      </div>
    </form>


  )

}