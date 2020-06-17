import {
    GET_ALL_FOLDERS_REQUEST,
    GET_ALL_FOLDERS_SUCCESS,
    GET_ALL_FOLDERS_FAILURE,
    OPEN_ADD_FOLDER_TEXT,
    POST_FOLDER_REQUEST,
    POST_FOLDER_SUCCESS,
    POST_FOLDER_FAILURE
} from "../actions/folder"

const initialState = {
    allFolders: [],
    getFolders: NaN,
    isLoadingAllFolders: false,
    allFoldersErrors: false,
    openAddFolder: false

}

export const folderReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_FOLDERS_REQUEST:
            return {
                ...state,
                isLoadingAllFolders: true,
                allFoldersErrors: false

            }
        case GET_ALL_FOLDERS_SUCCESS:
            return {
                ...state,
                allFolders: [...state.allFolders, action.payload],
                isLoadingAllFolders: false
            }    
        case GET_ALL_FOLDERS_FAILURE:
            return {
                ...state,
                allFoldersErrors: true
            }
        case OPEN_ADD_FOLDER_TEXT:
            return {
                ...state,
                openAddFolder: action.payload
            } 

        case POST_FOLDER_REQUEST:
            return {
                ...state,
                isLoadingAllFolders: true,
                allFoldersErrors: false
            }
        case POST_FOLDER_SUCCESS:
            return {
                ...state,
                allFolders:[...state.allFolders, action.payload],
                isLoadingAllFolders: false
            }    
        case POST_FOLDER_FAILURE:
            return {
                ...state,
                allFoldersErrors: true
            }
        default:
            return state;
    }
}