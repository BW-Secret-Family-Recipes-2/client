import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { updateRecipe } from '../actions'

const initialState = {
    title: '',
    user: '',
    ingredients: '',
    instructions: '',
    category: ''
}

const UpdateRecipe = ({updatingRecipe}) => {
    const [updatedRecipe, setUpdatedRecipe] = useState(initialState)
    const [updating] = useSelector(state => [state.updating])
    const dispatch = useDispatch()

    // console.log(updatingRecipe)
    useEffect(()=>{
        //get by id call for recipes -- need set updating recipe into the inputs
        axiosWithAuth()
        .get(`/api/recipes/${updatingRecipe.id}`)
        .then(res=>{
            console.log(res)
            setUpdatedRecipe(updatingRecipe)
        })
        .catch(err=>{
            console.log(err)
        })
    }, [updatingRecipe]) //<-id?

    const handleChange = e => {
        setUpdatedRecipe({ ...updatedRecipe, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(updateRecipe(updatedRecipe))
        // Must flesh out later!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    }

    return (
        <>
            {updating &&  //remove '!' once editing function is implemented!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                <form className='recipeForm' onSubmit={handleSubmit}>
                    {/* <div className='recipeForm'> */}
                    <h2>Update Recipe:</h2>
                    <label>Title:
            <input
                            name='title'
                            onChange={handleChange}
                            value={updatedRecipe.title}
                        />
                    </label>
                    
                    <label>Category:
                <input
                            name='category'
                            onChange={handleChange}
                            value={updatedRecipe.category}
                        />
                    </label>

                    <label>Ingredients:
                <textarea rows="7"
                            name='ingredients'
                            onChange={handleChange}
                            value={updatedRecipe.ingredients}
                        />
                    </label>

                    <label>Instructions:

                <textarea rows="15"

                            name='instructions'
                            onChange={handleChange}
                            value={updatedRecipe.instructions}
                        />
                    </label>

                    <label>Author:
                <input
                            name='user'
                            // onChange={handleChange}
                            value={updatedRecipe.user}
                        />
                    </label>

                    <button>Update Recipe</button>
                    {/* </div> */}
                </form>
            }
        </>
    )
}

export default UpdateRecipe;