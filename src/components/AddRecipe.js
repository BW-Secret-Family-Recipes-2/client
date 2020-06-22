import React, { useState } from 'react'

const initialState = {
    title: '',
    source: '',
    ingredients: '',
    instructions: '',
    category: ''
}

const AddRecipe = () => {
    const [newRecipe, setNewRecipe] = useState(initialState)

    const handleChange = e => {
        setNewRecipe({...newRecipe, [e.target.name]:e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Title:
            <input 
            name='title'
            placeholder='title'
            onChange={handleChange}
            value={newRecipe.title}
            />
            </label>

            <label>Source:
                <input
                name='source'
                placeholder='source'
                onChange={handleChange}
                value={newRecipe.source}
                />
            </label>

            <label>Ingredients:
                <input
                name='ingredients'
                placeholder='ingredients'
                onChange={handleChange}
                value={newRecipe.ingredients}
                />
            </label>

            <label>Instructions:
                <input
                name='instructions'
                placeholder='instructions'
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