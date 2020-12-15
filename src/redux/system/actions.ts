import {SystemActions, UPDATE_LANG, USER_LOGIN, USER_LOGOUT} from "../../types/system/types";
import {LoginUserResponse} from "../../types/responses/User";

export function updateLanguage(lang: string): SystemActions {
    return {
        type: UPDATE_LANG,
        payload: lang
    }
}

export function loginUser(userData: LoginUserResponse): SystemActions {
    return {
        type: USER_LOGIN,
        payload: {
            user: userData,
            accessToken: userData.accessToken
        },
    }
}

export function logoutUser(): SystemActions {
    return {
        type: USER_LOGOUT,
        payload: null
    }
}
