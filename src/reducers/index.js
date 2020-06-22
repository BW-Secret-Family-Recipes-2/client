import * as types from '../types'

export const initialState = {
    user:{},
    recipes:[]
}


export const reducer = (state = initialState, action) => {

    switch (action.type) {
        case types.FETCH_USER:
            return{
                ...state,
            }
        case types.FETCH_RECIPES:
            return{
                ...state,
            }   
        case types.ADD_RECIPE:
            return{
                ...state,
            }
        case types.DELETE_RECIPE:
            return{
                ...state,
            }         
        case types.UPDATE_RECIPE:
            return{
                ...state,
            }    

        default:
            return state;
    }
}