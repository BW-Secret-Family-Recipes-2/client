import React, { useState } from 'react'
import { addRecipe, startAdding, cancelAdd } from '../actions'
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
    const [user, adding] = useSelector(state=>[state.user, state.adding])

    // ````````````Helpers
    const handleChange = e => {
        setNewRecipe({...newRecipe, [e.target.name]:e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(addRecipe({...newRecipe,user: user.username ,user_id:user.id}))
        setNewRecipe(initialState)
        // Must flesh out later !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    }

    return (
        <>
       {adding && 
       <form className='recipeForm' onSubmit={handleSubmit}>
  
            <label>Title:
            <input 
            name='title'
            placeholder='title'
            onChange={handleChange}
            value={newRecipe.title}
            required
            />
            </label>

            <label>User:
                <input
                name='user'
                placeholder='user'
                onChange={handleChange}
                value={user.username}
                required
                />
            </label>

            <label>Ingredients:
                <textarea rows="7" 
                name='ingredients'
                placeholder=
                {`ingredient1,\ningredient2, \ningredient3, \netc`}
                onChange={handleChange}
                value={newRecipe.ingredients}
                required
                />
            </label>

            <label>Instructions:
                <textarea rows="15" 
                name='instructions'
                placeholder={`1.)step description, \n2)step description, \n3)step description, \netc`}
                onChange={handleChange}
                value={newRecipe.instructions}
                required
                />
            </label>

            <label>Category:
                <input
                name='category'
                placeholder='category'
                onChange={handleChange}
                value={newRecipe.category}
                required
                />
            </label>
       
           <button >Add Recipe</button>
           <button onClick={()=>dispatch(cancelAdd())}>Cancel</button>
        
        </form>}
        {!adding && <button className='addRecipeBtn' onClick={()=> dispatch(startAdding())}>Add new Recipe?</button>}
        </>
    )
}

export default AddRecipe;