import React from 'react'

import AddRecipe from './AddRecipe'
import UpdateRecipe from './UpdateRecipe'
import RecipeList from './RecipeList'

const Home = () => {

    return(
        <div>
            This is the Home Page: 
            <AddRecipe />
            <UpdateRecipe />
            <RecipeList />
        </div>
    )
}

export default Home;
