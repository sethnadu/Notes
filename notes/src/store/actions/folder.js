import {db} from '../../util/base'
import { useEffect } from 'react'

export const OPEN_ADD_FOLDER_TEXT = "OPEN_ADD_FOLDER_TEXT"

export const GET_ALL_FOLDERS_REQUEST = "GET_ALL_FOLDERS_REQUEST"
export const GET_ALL_FOLDERS_SUCCESS = "GET_ALL_FOLDERS_SUCCESS"
export const GET_ALL_FOLDERS_FAILURE = "GET_ALL_FOLDERS_FAILURE"

// export const GET_FOLDER_REQUEST = "GET_FOLDER_REQUEST"
// export const GET_FOLDER_SUCCESS = "GET_FOLDER_SUCCESS"
// export const GET_FOLDER_FAILURE = "GET_FOLDER_FAILURE"

export const POST_FOLDER_REQUEST = "POST_FOLDER_REQUEST"
export const POST_FOLDER_SUCCESS = "POST_FOLDER_SUCCESS"
export const POST_FOLDER_FAILURE = "POST_FOLDER_FAILURE"

// export const UPDATE_FOLDER_REQUEST = "UPDATE_FOLDER_REQUEST"
// export const UPDATE_FOLDER_SUCCESS = "UPDATE_FOLDER_SUCCESS"
// export const UPDATE_FOLDER_FAILURE = "UPDATE_FOLDER_FAILURE"

// export const DELETE_FOLDER_REQUEST = "DELETE_FOLDER_REQUEST"
// export const DELETE_FOLDER_SUCCESS = "DELETE_FOLDER_SUCCESS"
// export const DELETE_FOLDER_FAILURE = "DELETE_FOLDER_FAILURE"


export const addFolderTextOpen = (open) => dispatch => {
    dispatch({type: OPEN_ADD_FOLDER_TEXT, payload: !open})
}

export const getAllFolders = () => dispatch => {
    dispatch({type: GET_ALL_FOLDERS_REQUEST})
    db
        .collection('folders')
        .get()
        .then((folder) => {
            let folders = []
            folder.forEach((f) => {
                folders.push({
                    id: f.id,
                    name: f.data().name
                })
            })
            dispatch({type: GET_ALL_FOLDERS_SUCCESS, payload: folders})
        })
        .catch(error => {
            console.log("Error retrieving all folders")
            dispatch({type: GET_ALL_FOLDERS_FAILURE, payload: error.res})
        })

}



export const addFolder = (data) => dispatch => {
    dispatch({type: POST_FOLDER_REQUEST})
    db
        .collection('folders')
        .add({ 
            name: data
        })
            .then(folder => {
                dispatch({type: POST_FOLDER_SUCCESS, payload: folder})
            })
            .catch(error => {
                console.log("Error adding folder")
                dispatch({type: POST_FOLDER_FAILURE, payload: error.res})
            })
}
