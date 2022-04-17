import {createStore} from "redux"
import { reducer } from "./reducer"


export const Store = createStore(reducer,
    window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_() 
)


