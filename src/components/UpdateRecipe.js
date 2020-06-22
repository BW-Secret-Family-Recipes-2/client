import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

const initialState = {
    title: '',
    source: '',
    ingredients: '',
    instructions: '',
    category: ''
}

const UpdateRecipe = () => {
    const [updatedRecipe, setUpdatedRecipe] = useState(initialState)
    const [updating] = useSelector(state => [state.updating])

    useEffect(()=>{
        //get by id call for recipes -- need set updating recipe into the inputs
    }, []) //<-id

    const handleChange = e => {
        setUpdatedRecipe({ ...updatedRecipe, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        // Must flesh out later!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    }

    return (
        <>
            {!updating &&  //remove '!' once editing function is implemented!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                <form className='recipeForm' onSubmit={handleSubmit}>
                    <label>Title:
            <input
                            name='title'
                            placeholder='title'
                            onChange={handleChange}
                            value={updatedRecipe.title}
                        />
                    </label>

                    <label>Source:
                <input
                            name='source'
                            placeholder='source'
                            onChange={handleChange}
                            value={updatedRecipe.source}
                        />
                    </label>

                    <label>Ingredients:
                <input
                            name='ingredients'
                            placeholder='ingredients'
                            onChange={handleChange}
                            value={updatedRecipe.ingredients}
                        />
                    </label>

                    <label>Instructions:
                <input
                            name='instructions'
                            placeholder='instructions'
                            onChange={handleChange}
                            value={updatedRecipe.instructions}
                        />
                    </label>

                    <label>Category:
                <input
                            name='category'
                            placeholder='category'
                            onChange={handleChange}
                            value={updatedRecipe.category}
                        />
                    </label>

                    <button>Update Recipe</button>
                </form>
            }
        </>
    )
}

export default UpdateRecipe;