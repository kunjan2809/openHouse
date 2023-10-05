import { FORGOT_PASSWORD_FAIL, FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, RESET_PASSWORD_FAIL, RESET_PASSWORD_REQUEST, RESET_PASSWORD_SUCCESS, SIGNUP_FAIL, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "../constant"


const initialState = {
    userDetails: {},
    userToken: "",
    loginLoading: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {

        //signup
        case SIGNUP_REQUEST:
            return {
                ...state,
                loginLoading: true
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                loginLoading: false
            }
        case SIGNUP_FAIL:
            return {
                ...state,
                loginLoading: false
            }

        //login
        case LOGIN_REQUEST:
            return {
                ...state,
                userDetails: {},
                loginLoading: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                userDetails: action.payload.data,
                userToken: action.payload.token,
                loginLoading: false
            }
        case LOGIN_FAIL:
            return {
                ...state,
                userDetails: {},
                loginLoading: false
            }

        //forgot password
        case FORGOT_PASSWORD_REQUEST:
            return {
                ...state,
                loginLoading: true
            }
        case FORGOT_PASSWORD_SUCCESS:
            return {
                ...state,
                loginLoading: false
            }
        case FORGOT_PASSWORD_FAIL:
            return {
                ...state,
                loginLoading: false
            }

        //reset password
        case RESET_PASSWORD_REQUEST:
            return {
                ...state,
                loginLoading: true
            }
        case RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                loginLoading: false
            }
        case RESET_PASSWORD_FAIL:
            return {
                ...state,
                loginLoading: false
            }


        //Default
        default:
            return state;
    }
}

export { authReducer }
