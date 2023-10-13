import { FORGOT_PASSWORD_FAIL, FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, OTP_FAIL, OTP_REQUEST, OTP_SUCCESS, RESET_PASSWORD_FAIL, RESET_PASSWORD_REQUEST, RESET_PASSWORD_SUCCESS, SIGNUP_FAIL, SIGNUP_REQUEST, SIGNUP_SUCCESS, UPDATE_AUTH } from "../constant"


const initialState = {
    userToken: "",
    loading: false,
    userDetails: {}
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
                userDetails: {}
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                userToken: action.payload?.userToken,
                userDetails: action.payload?.userDetails
            }
        case LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                userToken: "",
                userDetails: {}
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

        //update auth
        case UPDATE_AUTH:
            {
                const { firstName, lastName, companyName, profilePicture } = action.payload
                let newData = {
                    ...state.userDetails,
                    firstName,
                    lastName,
                    companyName,
                    profilePicture
                }
                
                return {
                    ...state,
                    userDetails: { ...newData }
                }
            }


        //Default
        default:
            return state;
    }
}

export { authReducer }
