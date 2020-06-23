import React, {useState} from 'react'
import axios from 'axios'
import* as Yup from 'yup'//needs * to work without error
import { v4 as uuid } from 'uuid'

const formSchema=Yup.obvject().shape({
    username:Yup
        .string()
        .required('Must include a username'),
    password:Yup
        .string()
        .min(6,'Passwords must be at least 6 characters long')
        .required('Password is Required')
})

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
  
export default function Login(props){

    const [ user, setUser] = useState(initialInfoValues)
  


    const onChange = evt => {

        setUser(evt.target.value)
    }

    
    const onSubmit = evt => {
        evt.preventDefault()
        newLogin()
        setUser(evt.target.value)
        
    }
    

    const newLogin={
        id:uuid(),
        username:user.username,
        password:user.password
    }
    

    return(

        <form>
            <div>
            <div>
                    <h1>Sign In</h1>
                    
                </div>
               
                <div>
                    <label>Username:&nbsp;
                        <input 
                            type='text'
                            name='username'
                            value={user.username}
                            maxLength='20'
                            onInputChange={onChange}
                            onSubmit={onSubmit}

                        />
                    </label>
                    <label>Password:&nbsp;
                        <input 
                            type='text'
                            name='password'
                            value={user.password}
                            maxLength='20'
                            onInputChange={onChange}
                            onSubmit={onSubmit}

                        />
                    </label>


                </div>
                <div>
                    
                    <button>Submit</button>
                </div>
            </div>
        </form>
    )
}

 