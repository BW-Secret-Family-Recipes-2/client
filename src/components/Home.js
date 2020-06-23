import React, { useEffect } from 'react'
import AddRecipe from './AddRecipe'
import UpdateRecipe from './UpdateRecipe'
import RecipeList from './RecipeList'
import { LoadingLottie } from '../lotties/LoadingLottie'
import { useSelector, useDispatch } from 'react-redux'
import {fetchUser} from '../actions'

// const postNewUser = newUser => { --------------->Registration component
//     console.log(newUser)
//   //   axios.post('https://recipes-bw.herokuapp.com/api/auth/register', newUser)
//   // .then(res => {
//   //   console.log(res.data)
//   //   localStorage.setItem("userID",res.data.newUser.id)
//   //   console.log(localStorage.getItem("userID"))
//   //   history.push("/")
//   //   // setUser([...user, res.data])
//   // })
//   // .catch(err => {
//   //   console.log(err.message)
//   //   debugger
//   // })
//   dispatch(postUserRegister(newUser,history))
// }
const Home = () => {
    const [updating, user] = useSelector(state => [state.updating, state.user])
    const dispatch = useDispatch()
console.log(user)
    useEffect(() => {
        dispatch(fetchUser(localStorage.getItem('userID'))) //need to change id later based on localStorage !!!!!!!!!!!!!!!!!!!!!!!!
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
