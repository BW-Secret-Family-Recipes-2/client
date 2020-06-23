import React, {useState} from 'react'
import axios from 'axios'
import { v4 as uuid } from 'uuid'

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

 