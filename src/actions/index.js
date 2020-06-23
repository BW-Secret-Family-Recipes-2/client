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

export const postUserLogin = (newUser) => dispatch =>{
    axiosWithAuth()
    .post('/api/auth/register')
    .then(res=>{
        console.log(res)
    })
    .catch(err=>{
        console.log(err)
    })
}

export const postUserRegister = (newUser) => dispatch => {
    axiosWithAuth()
    .post('/api/auth/login', newUser)
    .then(res=>{
        console.log(res)
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

export const deleteRecipe = () => dispatch => {

}

export const updateRecipe = () => dispatch => {

}

