import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { v4 as uuid } from 'uuid'
import { getQueriesForElement } from '@testing-library/react'
import * as Yup from 'yup'
import formSchema from '../validation/formSchema2'
import { useHistory } from 'react-router-dom'


  

  
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
  

export default function Registration(){

    const [ user, setUser] = useState(initialInfoValues)
    const [ formValues, setFormValues ] = useState(initialFormValues)
    const [ formErrors, setFormErrors ] = useState(initialFormErrors)

    const history = useHistory()



    const onChange = evt => {

      const { name, value } = evt.target

      // Yup
      //   .reach(formSchema, user)
      //   .validate(value)
      //   .then(() => {
      //     setFormValues({
      //       ...formErrors,
      //       [name]: ""
      //     })
      //   })
      //   .catch(err => {
      //     setFormErrors({
      //       ...formErrors,
      //       [name]: err.errors[0]
      //     })
      //   })


      setUser({
        ...user,
        [name]: value,
      })

      setFormValues({
        ...formValues,
        [name]:value,
      })

    }

    const postNewUser = newUser => {
      console.log(newUser)
      axios.post('https://recipes-bw.herokuapp.com/api/auth/register', newUser)
    .then(res => {
      console.log(res.data)
      localStorage.setItem("userID",res.data.newUser.id)
      console.log(localStorage.getItem("userID"))
      history.push("/")
      // setUser([...user, res.data])
    })
    .catch(err => {
      console.log(err.message)
      debugger
    })
    .finally(() =>{
      setFormValues(initialInfoValues)
    })
  }

    const onSubmit = evt => {
     
        evt.preventDefault()

        const newUser = { ...user}
        
        setUser(user => [newUser, user])

        postNewUser(newUser)
    }

    

    


    return(
        <form onSubmit={onSubmit}>
            <div>
                <div>
                    <h2>Create An Account</h2>
                    <button>Create</button>
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
                            type='text'
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
                            maxLength='20'
                            value={user.email}
                            onChange={onChange}
                        />
                    </label>
                </div>
            </div>
        </form>

    )
}