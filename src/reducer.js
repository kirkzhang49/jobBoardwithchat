import { combineReducers } from 'redux'
import {user} from './redux/user.redux'
import {chartuser} from './redux/chartuser.redux'
import {chat} from './redux/chat.redux'

export default combineReducers({user,chartuser,chat})
