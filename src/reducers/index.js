import {combineReducers} from "redux"
import messages from "./messages"
import errors from "./errors"


const rootReducer = combineReducers({
    messages,
    errors
})

export default rootReducer