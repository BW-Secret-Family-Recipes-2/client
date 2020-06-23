import React, { useEffect, useState } from 'react'
import { fetchRecipes} from '../actions'
import { useDispatch, useSelector } from 'react-redux'

const RecipeList = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const dispatch = useDispatch()
    const [recipes] = useSelector(state => [state.recipes])
    // console.log(recipes)
    useEffect(() => {
        // get request function here to get recipes array
        dispatch(fetchRecipes())
    }, [dispatch])

    //Probably will do Search bar here (filter function below as well)!!!!!!!!!!!!!!!!!!!!!!!!!
    const filterRecipes = (recipes) => {
        return recipes.filter(recipe => {
            if (recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                recipe.category.toLowerCase().includes(searchTerm.toLowerCase())) {
                return recipe
            }else {
                return null;
            }
        })
    }

    return (
        <div>
            <input
                placeholder='search by title or category'
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />
{/* `````````````````````````````````````````````````````````````````````````````````````````````````` */}
            {/*REACT I: Go ahead and make a map in here (console.log(recipes) on line 9 to see what you're
                dealing with and what you can display to the screen) */}
            
        </div>
    )
}

export default RecipeList;