import {combineReducers} from 'redux'

import {auth} from './auth'
import {folderReducer} from "./folder"

export default combineReducers({auth, folderReducer})