import * as types from '../types/characters'
import { fetch } from 'reactMarvel/src/webservices/webservices'
import * as constants from 'reactMarvel/src/webservices/constants'



function updateCharactersList(list) { 
    return {
        type: types.CHARACTERS_UPDATE_LIST,
        list,
    }
}

function updateMyCreatedList(newList) { 
    return {
        type: types.CHARACTERS_UPDATE_MYLIST,
        myList: newList,
    }
}


function setCharactersFetching(value) {
    return {
        type: types.CHARACTERS_SET_FETCHING,
        value: value
    }
}


export function updateCharacterSelected(character) {
    return {
        type: types.CHARACTERS_UPDATE_CHARACTER,
        character
    }
}

export function updateMyCharactersList(character){
    return (dispatch, getState) => {

        const state = getState()
        const myList = state.characters.myList

        const newList = [...myList, character]
        console.log("MYLIST RODRIGO:", newList)
        dispatch(updateMyCreatedList(newList))
    }
}


export function fetchCharactersList() {
    return (dispatch, getState) => {

        dispatch(setCharactersFetching(true))
        //dispatch(updateCharactersList([]))
    
        const fetchUrl = constants.CHARACTERS + constants.TIME_STAMP + constants.PUBLIC_API_KEY + constants.HASH
        
        fetch(fetchUrl).then(response => {

            console.log("fetchCharactersList response: ", response)
            dispatch(setCharactersFetching(false))

            const charactersList = response.data && response.data.results ? response.data.results : []
            dispatch(updateCharactersList(charactersList))
            console.log("LISTA PERSONAJES: ", charactersList)

        }).catch( error => {
 
            console.log("fetchCharactersList error:", error)
            dispatch(setCharactersFetching(false))
        })
    }
}
