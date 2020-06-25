import React, { useEffect } from 'react'
import AddRecipe from './AddRecipe'
import RecipeList from './RecipeList'
// import { LoadingLottie } from '../lotties/LoadingLottie'
import { useSelector, useDispatch } from 'react-redux'
import {fetchUser} from '../actions'


const Home = () => {
    const [updating, user] = useSelector(state => [state.updating, state.user])
    const dispatch = useDispatch()
console.log(user)
    useEffect(() => {
        dispatch(fetchUser(localStorage.getItem('userID'))) 
    }, [dispatch]) //use effect to display a welcome msg for the user
 
    return (
        <div className='home' >
            <h2>Welcome {user.username}!</h2>

            {/* {updating && <LoadingLottie height={200} width={200} />} */}
            <AddRecipe />
            <RecipeList />
            <AddRecipe />
       
        </div>
    )
}

export default Home;
