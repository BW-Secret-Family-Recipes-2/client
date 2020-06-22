import React from 'react'


export default function Login(props){

    const {
        onChange,
    } = props

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

 