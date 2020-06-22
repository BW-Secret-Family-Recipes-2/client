import React from 'react'


export default function Registration(){


    return(
        <form>
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