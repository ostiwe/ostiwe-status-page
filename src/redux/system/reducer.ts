import {SystemActions, SystemState} from "../../types/system/types";


const initialState: SystemState = {
    user: null,
    accessToken: null,
    logged: false,
    lang: 'ru'
}

export function systemReducer(
    state = initialState,
    action: SystemActions
): SystemState {
    switch (action.type) {
        case "UPDATE_LANG":
            return {
                ...state,
                lang: action.payload
            }
        case "USER_LOGIN":
            return {
                ...state,
                accessToken: action.payload.accessToken,
                user: action.payload.user
            }
        case "USER_LOGOUT":
            return {
                ...initialState,
                lang: state.lang
            }
        default:
            return state
    }
}