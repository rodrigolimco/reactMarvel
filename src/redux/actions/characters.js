import * as types from '../types/characters'
import { fetch } from 'reactMarvel/src/webservices/webservices'
import * as constants from 'reactMarvel/src/webservices/constants'
import qs from 'qs'



function updateCharactersList(list, total) { 
    return {
        type: types.CHARACTERS_UPDATE_LIST,
        list,
        total
    }
}

export function updateCharactersListOffset(value){
    return {
        type: types.CHARACTERS_UPDATE_LIST_OFFSET,
        value
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

export function initCharacterList(){
    return (dispatch, getState) => {
        // Rest characters list and set total to 0
        dispatch(updateCharactersList([], 0))

        // Set offset to 0
        dispatch(updateCharactersListOffset(0))

        // Fetch list
        dispatch(fetchCharactersList())
    }
}

export function updateMyCharactersList(character){
    return (dispatch, getState) => {

        const state = getState()
        const myList = state.characters.myList

        const newList = [...myList, character]
        console.log("UPDATEMYCHARACTERSLIST ACTION: ", newList)
        dispatch(updateMyCreatedList(newList))
    }
}


export function fetchCharactersList() {
    return (dispatch, getState) => {

        dispatch(setCharactersFetching(true))

        const state = getState()
        const list = state.characters.list
        const offset = state.characters.offset
        const limit = 20

        const filters = {
            limit   : limit,
            offset  : offset
        }
    
        const fetchUrl = constants.CHARACTERS + constants.TIME_STAMP + constants.PUBLIC_API_KEY + constants.HASH + qs.stringify(filters)
        console.log("URL MARVEL: ", fetchUrl)
        
        fetch(fetchUrl).then(response => {

            dispatch(setCharactersFetching(false))

            const newList = [...list, ...response.data.results]

            const charactersList = response.data && response.data.results ? response.data.results : []
            dispatch(updateCharactersList(newList, response.data.total))

        }).catch( error => {
 
            console.log("fetchCharactersList error:", error)
            dispatch(setCharactersFetching(false))
        })
    }
}
