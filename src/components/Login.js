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
    const [formError,setFormError]=useState(initialInfoValues)

  
    
    const onChange = evt => {

       setUser({...user,[evt.target.name]:evt.target.value})
       const {name,value}=evt.target.value

       Yup
        .reach(formSchema,name)
        .validate(value)
        .then(()=>{
            setFormError({
                ...formError,
                [name]:''
            })
        })
        .catch(err=>{
            setFormError({
                ...formError,
            [name]:err.error[0]
            })
        })
        
    }

    
    const newLogin={
        id:uuid(),
        username:user.username,
        password:user.password
    }
    

   //not showing?
   //come back
    const postNewLogin = newLogin=>{
        axios.post('https://recipes-bw.herokuapp.com/api/auth/login', newLogin)
        .then(res=>{
            console.log(res.data)
        })
        .catch(error=>{
            console.log('you broke it!',error)
        })
    }

    const onSubmit = evt => {
        evt.preventDefault()
        setUser(evt.target.value)

        postNewLogin(newLogin)
        
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
                            onChange={onChange}
                            onSubmit={onSubmit}

                        />
                    </label><br/>
                    <label>Password:&nbsp;
                        <input 
                            type='text'
                            name='password'
                            placeholder='password'
                            value={user.password}
                            maxLength='20'
                            onChange={onChange}
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

 