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
        setUser(evt.target)
    }

    const onSubmit = evt => {
    
    }

    return(

        <form>
            <div>
                <div>
                    <h2>Enter Info</h2>
                    <button>Submit</button>
                </div>
                <div>
                    <label>Username:&nbsp;
                        <input 
                            type='text'
                            name='username'
                            maxLength='20'

                        />
                    </label>
                    <label>Password:&nbsp;
                        <input 
                            type='text'
                            name='password'
                            maxLength='20'
                        />
                    </label>


                </div>
            </div>
        </form>
    )
}

 