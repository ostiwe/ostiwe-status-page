import {SystemActions, SystemState} from "../../types/system/types";

enum AvailableLanguages {
    RU = "ru",
    EN = "en"
}

let initialLanguage = window.localStorage.getItem('app_lang') ?? AvailableLanguages.RU;
if (initialLanguage !== typeof AvailableLanguages) {
    initialLanguage = AvailableLanguages.RU
}

const initialState: SystemState = {
    user: null,
    accessToken: null,
    logged: false,
    lang: initialLanguage,
    availableLanguage: [
        {code: AvailableLanguages.RU, name: 'Russian (Русский)'},
        {code: AvailableLanguages.RU, name: 'English'},
    ]
}

export function systemReducer(
    state = initialState,
    action: SystemActions
): SystemState {
    switch (action.type) {
        case "UPDATE_LANG":
            window.localStorage.setItem('app_lang', action.payload)
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