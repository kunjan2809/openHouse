import { apiRequest } from "../../../../services/apiService";
import { FORGOT_PASSWORD_FAIL, FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, RESET_PASSWORD_FAIL, RESET_PASSWORD_REQUEST, RESET_PASSWORD_SUCCESS, SIGNUP_FAIL, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "../constant";


export const signUp = (data, successCallback) => {
    return async (dispatch) => {
        dispatch({ type: SIGNUP_REQUEST });
        const { response, error } = await apiRequest({
            method: 'POST',
            url: `signUp`,
            data: data
        })
        if (response) {
            dispatch({ type: SIGNUP_SUCCESS, payload: response?.data?.data })
            successCallback()
        }
        else if (error) {
            dispatch({ type: SIGNUP_FAIL })
        }
    }
}

export const signin = (data, successCallback) => {
    return async (dispatch) => {
        dispatch({ type: LOGIN_REQUEST });
        const { response, error } = await apiRequest({
            method: 'POST',
            url: `login`,
            data: data
        })
        if (response) {
            dispatch({
                type: LOGIN_SUCCESS, payload: {
                    data: response?.data?.user,
                    token: response?.data?.token
                }
            })
            successCallback()
        }
        else if (error) {
            dispatch({ type: LOGIN_FAIL })
        }
    }
}

export const forgotPassword = (data, successCallback) => {
    return async (dispatch) => {
        dispatch({ type: FORGOT_PASSWORD_REQUEST });
        const { response, error } = await apiRequest({
            method: 'POST',
            url: `forgot-password`,
            data: data
        })
        if (response) {
            dispatch({ type: FORGOT_PASSWORD_SUCCESS, payload: response?.data?.data })
            successCallback()
        }
        else if (error) {
            dispatch({ type: FORGOT_PASSWORD_FAIL })
        }
    }
}

export const resetPassword = (data, successCallback, token) => {
    return async (dispatch) => {
        dispatch({ type: RESET_PASSWORD_REQUEST });
        const { response, error } = await apiRequest({
            method: 'PATCH',
            url: `reset-password/${token}`,
            data: data
        })
        if (response) {
            dispatch({ type: RESET_PASSWORD_SUCCESS, payload: response?.data?.data })
            successCallback()
        }
        else if (error) {
            dispatch({ type: RESET_PASSWORD_FAIL })
        }
    }
}
