import * as types from '../types/characters'

const initialState = {
    isFetching: false,
    list: [],
    character: null
}

export default function reducer( state = initialState, action = {}){

    switch (action.type){

        case types.CHARACTERS_UPDATE_LIST:
            return{
                ...state,
                list: action.list,
            };
        
        case types.CHARACTERS_UPDATE_CHARACTER:
            return{
                ...state,
                character: action.character
            };

        case types.CHARACTERS_SET_FETCHING:
        return{
            ...state,
            isFetching: action.value
        };

        default:
            return state;
    }
}