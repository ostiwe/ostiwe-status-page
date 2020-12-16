export const UPDATE_LANG = 'UPDATE_LANG';
export const USER_LOGOUT = 'USER_LOGOUT';
export const USER_LOGIN = 'USER_LOGIN';

export interface UpdateLanguagePayloadInterface {
    type: typeof UPDATE_LANG,
    payload: string
}

export interface UserLoginInterface {
    type: typeof USER_LOGIN,
    payload: {
        user: User,
        accessToken: string
    }
}

export interface UserLogoutInterface {
    type: typeof USER_LOGOUT,
    payload: null
}

export interface Language {
    code: string,
    name: string
}

export interface SystemState {
    logged: boolean,
    user: User | null,
    accessToken: string | null
    lang: string
    availableLanguage: Language[]
}

export interface User {
    id: number,
    username: string
}


export type SystemActions = UpdateLanguagePayloadInterface | UserLoginInterface | UserLogoutInterface