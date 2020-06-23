import React, { useState } from 'react'
import { addRecipe } from '../actions'
import { useDispatch, useSelector } from 'react-redux'

const initialState = {
    title: '',
    user: '', // Author? User? Source?
    ingredients: '',
    instructions: '',
    category: '',
}

const AddRecipe = () => {
    const [newRecipe, setNewRecipe] = useState(initialState)
    const dispatch = useDispatch()
    const [user] = useSelector(state=>[state.user])

    // ````````````Helpers
    const handleChange = e => {
        setNewRecipe({...newRecipe, [e.target.name]:e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(addRecipe({...newRecipe,user: user.username ,user_id:user.id}))
        // Must flesh out later !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    }

    return (
        <form className='recipeForm' onSubmit={handleSubmit}>
            <label>Title:
            <input 
            name='title'
            placeholder='title'
            onChange={handleChange}
            value={newRecipe.title}
            />
            </label>

            <label>User:
                <input
                name='user'
                placeholder='user'
                onChange={handleChange}
                value={user.username}
                />
            </label>

            <label>Ingredients:
                <input
                name='ingredients'
                placeholder='ingredient1, ingredient2, ingredient3, etc'
                onChange={handleChange}
                value={newRecipe.ingredients}
                />
            </label>

            <label>Instructions:
                <input
                name='instructions'
                placeholder='step1, step2, step3, etc'
                onChange={handleChange}
                value={newRecipe.instructions}
                />
            </label>

            <label>Category:
                <input
                name='category'
                placeholder='category'
                onChange={handleChange}
                value={newRecipe.category}
                />
            </label>

            <button>Add Recipe</button>
        </form>
    )
}

export default AddRecipe;