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

export const postUserLogin = (newUser, history) => dispatch =>{ //Double check this function once login is ready
  dispatch({type: types.POST_EXISTINGUSER, payload: true})
    axiosWithAuth()
    .post('/api/auth/login', newUser)
    .then(res=>{
        console.log(res.data)
        localStorage.setItem("userID",res.data.user.id)
        console.log(localStorage.getItem("userID"))
        window.localStorage.setItem('token', res.data.token)
        // //navigate the user to /protected route (whatever landing page)
        history.push('/')

        dispatch({type: types.POST_EXISTINGUSER_SUCCESS, payload: false})
    })
    .catch(err=>{
        console.log(err.response.data.message)
        dispatch({type: types.POST_EXISTINGUSER_FAIL, payload: err.response.data.message})
    })
}

export const postUserRegister = (newUser, history,setIsLoading) => dispatch => {
    
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
        console.log(err.response.data.message)
        dispatch({type: types.POST_NEWUSER_FAIL, payload: err.response.data.message })
    })
    // .finally(setIsLoading)
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

export const startAdding = () => dispatch => {
    dispatch({type: types.START_ADDING, payload: true})
}

export const cancelAdd = () => dispatch => {
    dispatch({type: types.DONT_ADD, payload: false})
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
    .delete(`/api/recipes/${recipeId}`)
    .then(res => {
        console.log(res.data)
        dispatch({type: types.DELETE_RECIPE, payload: res.data.deletedRecipe})
    })
    .catch(err => {
        console.log(err)
    })
}

export const startUpdating = () => dispatch => {
    dispatch({type: types.START_UPDATING, payload: true})
}

export const updateRecipe = (recipe) => dispatch => {
    axiosWithAuth()
    .put(`/api/recipes/${recipe.id}`, recipe)
    .then(res=>{
        console.log(res.data.updatedRecipe)
        dispatch({type: types.UPDATE_RECIPE, payload: res.data.updatedRecipe})
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