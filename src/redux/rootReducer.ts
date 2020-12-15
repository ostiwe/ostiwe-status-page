import {systemReducer} from "./system/reducer";
import {combineReducers, createStore} from "redux";


const rootReducer = combineReducers({
    system: systemReducer
});


export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer);