import * as types from '../types'

export const initialState = {
    user:{},
    recipes:[],
    updating:false,
    isLoading: false,
    error:'',
    adding: false
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
            
        case types.START_ADDING:
            return{
                ...state, 
                adding: action.payload
            }   
        case types.ADD_RECIPE:
            return{
                ...state,
                recipes:[...state.recipes, action.payload],
                adding: false
            }
        case types.DELETE_RECIPE:
            return{
                ...state,
                recipes: state.recipes.filter( recipe =>{
                    return recipe.id !== action.payload.id
                })
            }  

        case types.START_UPDATING:
            return{
                ...state,
                updating: action.payload
            }    
        case types.UPDATE_RECIPE:
            return{
                ...state,
                recipes: state.recipes.map(recipe =>{
                    if(recipe.id === action.payload.id){
                        return action.payload
                    }else{
                        return recipe
                    }
                }),
                updating: false
            }  

        case types.POST_EXISTINGUSER:
        case types.POST_EXISTINGUSER_SUCCESS:    
            return{
                ...state,
                isLoading: action.payload
            }   

        case types.POST_NEWUSER_FAIL:
        case types.POST_EXISTINGUSER_FAIL:    
            return{
                ...state,
                error: action.payload
            }

        default:
            return state;
    }
}