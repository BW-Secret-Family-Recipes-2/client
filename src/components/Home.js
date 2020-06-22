import React, { useState } from 'react'
import AddRecipe from './AddRecipe'
import UpdateRecipe from './UpdateRecipe'
import RecipeList from './RecipeList'
import { LoadingLottie } from '../lotties/LoadingLottie'
import { useSelector } from 'react-redux'

const Home = () => {
const [updating] = useSelector(state=>[state.updating]) 

    return(
        <div className='home' >
          {!updating &&  <LoadingLottie height={200} width={200} />} 
          {/* ^^ remove later; just here to look through loader options */}
            This is the Home Page: 
            <UpdateRecipe />
            <AddRecipe />
            <RecipeList />
        </div>
    )
}

export default Home;
