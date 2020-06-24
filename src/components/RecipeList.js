import React, { useEffect, useState } from 'react'
import { fetchRecipes, deleteRecipe, startUpdating} from '../actions'
import { useDispatch, useSelector } from 'react-redux'
import UpdateRecipe from './UpdateRecipe'
import { LoadingLottie } from '../lotties/LoadingLottie'

const RecipeList = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [updatingRecipe, setUpdatingRecipe] = useState({})
    const dispatch = useDispatch()
    const [recipes, user, updating] = useSelector(state => [state.recipes, state.user, state.updating])

    console.log(recipes)
    console.log(user)
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
             {!updating && <LoadingLottie height={200} width={200} />}
            <UpdateRecipe updatingRecipe={updatingRecipe}/>

           
            <input

                placeholder='search by title or category'
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />
{/* `````````````````````````````````````````````````````````````````````````````````````````````````` */}
            {/*REACT I: Go ahead and make a map in here (console.log(recipes) on line 9 to see what you're
                dealing with and what you can display to the screen) */}

                {filterRecipes(recipes).map((item) => (
                    <div key={item.id} className='recipeCard'>
                        <h3>{item.title}</h3>
                        <div>Author: {item.user} </div>
                        <div>Category: {item.category}</div>
                        <div>Ingredients: {item.ingredients} </div>
                        <p>Instructions: {item.instructions}</p>
                       {(Number(user.id) === item.user_id) && <button onClick={()=>dispatch(deleteRecipe(item.id))}>Delete Recipe</button>}
                       {(Number(user.id) === item.user_id) && <button onClick={() =>{setUpdatingRecipe(item); window.scrollTo(0,0); dispatch(startUpdating())}}>Update Recipe</button>}
                        <br></br>
                    </div>
                ))}

            
        </div>
    )
}

export default RecipeList;