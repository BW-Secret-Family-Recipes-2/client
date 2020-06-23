import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const token = window.localStorage.getItem('token') //move that to NavBar 
const NavBar = () => {
    const [userLoggedIn, setUserLoggedIn] = useState(false)

    useEffect(() => {
        if (token) {
            setUserLoggedIn(true)
        }
    }, [])
    // Helpers ````````````````````
    const logout = () => { //Move this function to NavBar 
        // if (token) {
        //   alert('Logging out')
        //   localStorage.removeItem('token')
        // }
        if (userLoggedIn) {
            alert('Logging out')
            localStorage.removeItem('token')
            //localStorage.removeItem('userID')
            setUserLoggedIn(false)
        }
    }
    return (
        <div className='navBar'>
            <h2>Secret Family Recipe 2</h2> {/* move this header into NavBar return statement*/}
            <nav> {/*move this whole nav into NavBar return statement*/}

                {/* <Link to='/login'>Login</Link> */}
       
                <Link onClick={logout} to='/login'>{userLoggedIn ? 'Logout' : 'Login'}</Link> {/*switch route to '/' once private Route is running*/}
        
                <Link to='/registration'>Register</Link>

                <Link to='/'>Home</Link> {/* Switch to the Marketing Page once privateRoute is up*/}

            </nav>
        </div>
    )
}

export default NavBar