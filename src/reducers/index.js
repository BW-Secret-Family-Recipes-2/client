import * as types from '../types'

export const initialState = {
    user:{},
    recipes:[],
    updating:false,
   
}


export const reducer = (state = initialState, action) => {

    switch (action.type) {
        case types.FETCH_USER:
            return{
                ...state,
                user: action.payload
            }
        case types.FETCH_RECIPES:
            return{
                ...state,
                recipes: action.payload
            }   
        case types.ADD_RECIPE:
            return{
                ...state,
                recipes:[...state.recipes, action.payload]
            }
        case types.DELETE_RECIPE:
            return{
                ...state,
            }         
        case types.UPDATE_RECIPE:
            return{
                ...state,
                updating: true,
            }  
            
        case types.POST_NEWUSER:
            return{
                ...state,
            }

        default:
            return state;
    }
}