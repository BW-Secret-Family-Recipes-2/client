import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { v4 as uuid } from 'uuid'
import { getQueriesForElement } from '@testing-library/react'


const exampleUser = {
    id: uuid(),
    username:'Harper',
    password:'abc123',
  }
  
  const initialInfoValues = {
    id: uuid(),
    username: '',
    password: '',
  }

  const initialFormValues = {
      username: '',
      password: '',
  }
  

export default function Registration(){

    const [ user, setUser] = useState(initialInfoValues)
    const [ formValues, setFormValues ] = useState(initialFormValues)



    const onChange = evt => {

        const { name, value } = evt.target

        setUser({
            ...user,
            [name]: value,
        })

        setFormValues({
            ...formValues,
            [name]:value,
        })

    }

    const onSubmit = evt => {
     
        evt.preventDefault()

        const newUser = { ...user, id: uuid() }
        
        setUser(user => [newUser, user])

        postNewUser(newUser)
    }

    const postNewUser = newUser => {

        axios.post('https://reqres.in/api/user', newUser)
      .then(res => {
        setUser([...user, res.data])
      })
      .catch(err => {
        debugger
      })
      .finally(() =>{
        setFormValues(initialInfoValues)
      })
    }

    const getUser = () => {
        axios.get('https://reqres.in/api/user')
      .then(response => {
        console.log(response.data)
        setUser(response.data)
      })
      .catch(err => {
        debugger
      })
    }


    useEffect(() => {
        getUser()
    }, [])


    return(
        <form onSubmit={onSubmit}>
            <div>
                <div>
                    <h2>Create An Account</h2>
                    <button>Create</button>
                </div>
                <div>
                    <label>Username:&nbsp;
                        <input 
                            type='text'
                            name='username'
                            maxLength='20'
                            value={user.username}
                            onChange={onChange}
                        />
                    </label>
                    <label>Password:&nbsp;
                        <input 
                            type='text'
                            name='password'
                            maxLength='20'
                            value={user.password}
                            onChange={onChange}
                        />
                    </label>
                </div>
            </div>
        </form>

    )
}