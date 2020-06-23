import * as types from '../types'
import {axiosWithAuth} from '../utils/axiosWithAuth'


export const fetchUser = (userid) => dispatch => {
    axiosWithAuth()
        .get(`/api/users/${userid}`)
        .then(res => {
            console.log(res.data)
            dispatch({type: types.FETCH_USER, payload: {...res.data}})
        })
        .catch(err => {
            console.log(err)
        })
}

export const fetchRecipes = () => dispatch => {
    axiosWithAuth()
    .get('/api/recipes')
    .then(res=>{
        console.log(res)
        dispatch({type: types.FETCH_RECIPES, payload: res.data.recipes})
    })
    .catch(err=>{
        console.log(err)
    })
}

export const addRecipe = () => dispatch => {

}

export const deleteRecipe = () => dispatch => {

}

export const updateRecipe = () => dispatch => {

}