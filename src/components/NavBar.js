import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const NavBar = () => {
    const [userLoggedIn, setUserLoggedIn] = useState(false)
    const [user] = useSelector(state=>[state.user])
    useEffect(() => {
        const token = window.localStorage.getItem('token') 
        if (token) {
            setUserLoggedIn(true)
        }
    }, [user])

    // Helpers ````````````````````
    const logout = () => { 
        // if (token) {
        //   alert('Logging out')
        //   localStorage.removeItem('token')
        // }
        if (userLoggedIn) {
            alert('Logging out')
            localStorage.removeItem('token')
            // localStorage.removeItem('userID')
            setUserLoggedIn(false)
        }
    }
    return (
        <div className='navBar'>
            <h2>Secret Family Recipe 2</h2> 
            <nav> 
     
                <Link onClick={logout} to='/'>{userLoggedIn ? 'Logout' : 'Login'}</Link> {/*switch route to '/' once private Route is running*/}
        
                <Link to='/registration'>Register</Link>

                <Link to='/'>Home</Link> {/* Switch to the Marketing Page once privateRoute is up*/}

            </nav>
        </div>
    )
}

export default NavBar