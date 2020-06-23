import React, { useEffect } from 'react'
import AddRecipe from './AddRecipe'
import UpdateRecipe from './UpdateRecipe'
import RecipeList from './RecipeList'
import { LoadingLottie } from '../lotties/LoadingLottie'
import { useSelector, useDispatch } from 'react-redux'
import {fetchUser} from '../actions'


const Home = () => {
    const [updating, user] = useSelector(state => [state.updating, state.user])
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUser(1)) //need to change id later based on localStorage !!!!!!!!!!!!!!!!!!!!!!!!
    }, [dispatch]) //use effect to display a welcome msg for the user
 
    return (
        <div className='home' >
            <h2>Welcome {user.username}!</h2>

            {!updating && <LoadingLottie height={200} width={200} />}
            {/* ^^ remove later; just here to look through loader options!!!!!!!!!!!!!!!!!!!! */}
            <UpdateRecipe />
            <RecipeList />
            <AddRecipe />
       
        </div>
    )
}

export default Home;
