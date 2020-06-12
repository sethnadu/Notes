import {
    GET_ALL_FOLDERS_REQUEST,
    GET_ALL_FOLDERS_SUCCESS,
    GET_ALL_FOLDERS_FAILURE,
    OPEN_ADD_FOLDER_TEXT
} from "../actions/folder"

const initialState = {
    allFolders: [{id: "1", name: "folder-1"}],
    isLoadingAllFolders: false,
    allFoldersErrors: false,
    openAddFolder: false,

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
                allFolders:[...state.allFolders],
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
        default:
            return state;
    }
}