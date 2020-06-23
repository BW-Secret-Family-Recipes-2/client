import * as types from '../types'
import {axiosWithAuth} from '../utils/axiosWithAuth'

// `````````````````User functions/actions``````````````````````
export const fetchUser = (userid) => dispatch => {
    axiosWithAuth()
        .get(`/api/users/${userid}`)
        .then(res => {
            // console.log(res.data)
            dispatch({type: types.FETCH_USER, payload: {...res.data}})
        })
        .catch(err => {
            console.log(err)
        })
}

export const postExistingUser = (newUser, history) => dispatch =>{ //Double check this function once login is ready
    axiosWithAuth()
    .post('/api/auth/login')
    .then(res=>{
        console.log(res.data)
        localStorage.setItem("userID",res.data.newUser.id)
        console.log(localStorage.getItem("userID"))
        window.localStorage.setItem('token', res.data.token)
        // //navigate the user to /protected route (whatever landing page)
        history.push('/')

    })
    .catch(err=>{
        console.log(err)
    })
}

export const postUserRegister = (newUser, history) => dispatch => {
    axiosWithAuth()
    .post('/api/auth/register', newUser)
    .then(res=>{
        console.log(res.data)
        localStorage.setItem("userID",res.data.newUser.id)
        console.log(localStorage.getItem("userID"))
        window.localStorage.setItem('token', res.data.token)
        // //navigate the user to /protected route (whatever landing page)
        history.push('/')
    })
    .catch(err=>{
        console.log(err)
    })
}

// ````````````Recipes functions/actions````````````````
export const fetchRecipes = () => dispatch => {
    axiosWithAuth()
    .get('/api/recipes')
    .then(res=>{
        // console.log(res)
        dispatch({type: types.FETCH_RECIPES, payload: res.data.recipes})
    })
    .catch(err=>{
        console.log(err)
    })
}

export const addRecipe = (newRecipe) => dispatch => {
    axiosWithAuth()
    .post('/api/recipes/', newRecipe)
    .then(res=>{
        console.log(res.data)
        dispatch({type: types.ADD_RECIPE, payload: res.data.newRecipe})
    })
    .catch(err=>{
        console.log(err)
    })
}

export const deleteRecipe = (recipeId) => dispatch => {
    axiosWithAuth()
    .post(`/api/recipes/${recipeId}`)
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })
}

export const updateRecipe = (recipe) => dispatch => {
    axiosWithAuth()
    .put(`/api/recipes/${recipe.id}`, recipe)
    .then(res=>{
        console.log(res)
    })
    .catch(err=>{
        console.log(err)
    })
}


// Might use this one inside of updateRecipe
export const getRecipeById = recipeId => dispatch =>{
    axiosWithAuth()
    .get(`/api/recipes/${recipeId}`)
    .then(res=>{
        console.log(res)
    })
    .catch(err=>{
        console.log(err)
    })
}