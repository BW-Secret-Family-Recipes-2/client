import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { v4 as uuid } from 'uuid'
import formSchema from '../validation/formSchema'
import* as Yup from 'yup'//needs * to work without error



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
    const [error,setError]=useState(initialInfoValues)

  
    
    const onChange = evt => {

        setUser({...user,[evt.target.name]:evt.target.value})
    }

    const newLogin={
        id:uuid(),
        username:user.username,
        password:user.password
    }
    
    const onSubmit = evt => {
        evt.preventDefault()
        setUser(evt.target.value)
        
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
                            placeholder='username'
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
                            placeholder='password'
                            value={user.password}
                            maxLength='20'
                            onInputChange={onChange}
                            onSubmit={onSubmit}

                        />
                    </label>


                </div>
                <div>
                    
                    <button className='submitBtn'>Submit</button>
                </div>
            </div>
        </form>
    )
}

 