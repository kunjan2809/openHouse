import { FORGOT_PASSWORD_FAIL, FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, OTP_FAIL, OTP_REQUEST, OTP_SUCCESS, RESET_PASSWORD_FAIL, RESET_PASSWORD_REQUEST, RESET_PASSWORD_SUCCESS, SIGNUP_FAIL, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "../constant"


const initialState = {
    userToken: "",
    loading: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {

        //signup
        case SIGNUP_REQUEST:
            return {
                ...state,
                loading: true
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                loading: false
            }
        case SIGNUP_FAIL:
            return {
                ...state,
                loading: false
            }

        //verify otp
        case OTP_REQUEST:
            return {
                ...state,
                loading: true
            }
        case OTP_SUCCESS:
            return {
                ...state,
                loading: false
            }
        case OTP_FAIL:
            return {
                ...state,
                loading: false
            }

        //login
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
                userToken: "",
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                userToken: action.payload?.userToken,
            }
        case LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                userToken: "",
            }

        //forgot password
        case FORGOT_PASSWORD_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FORGOT_PASSWORD_SUCCESS:
            return {
                ...state,
                loading: false
            }
        case FORGOT_PASSWORD_FAIL:
            return {
                ...state,
                loading: false
            }

        //reset password
        case RESET_PASSWORD_REQUEST:
            return {
                ...state,
                loading: true
            }
        case RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                loading: false
            }
        case RESET_PASSWORD_FAIL:
            return {
                ...state,
                loading: false
            }


        //Default
        default:
            return state;
    }
}

export { authReducer }
