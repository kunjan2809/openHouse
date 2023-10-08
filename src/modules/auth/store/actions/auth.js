import { apiRequest } from "../../../../services/apiService";
import { FORGOT_PASSWORD_FAIL, FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS, GENERATE_OTP_FAIL, GENERATE_OTP_REQUEST, GENERATE_OTP_SUCCESS, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, OTP_FAIL, OTP_REQUEST, OTP_SUCCESS, RESET_PASSWORD_FAIL, RESET_PASSWORD_REQUEST, RESET_PASSWORD_SUCCESS, SIGNUP_FAIL, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "../constant";


export const signUp = (data, successCallback) => {
    return async (dispatch) => {
        dispatch({ type: SIGNUP_REQUEST });
        const { response, error } = await apiRequest({
            method: 'POST',
            url: `signUp`,
            data: data
        })
        if (response) {
            dispatch({ type: SIGNUP_SUCCESS, payload: response?.data })
            successCallback()
        }
        else if (error) {
            dispatch({ type: SIGNUP_FAIL })
        }
    }
}

export const verifyOtp = (data, successCallback) => {
    return async (dispatch) => {
        dispatch({ type: OTP_REQUEST });
        const { response, error } = await apiRequest({
            method: 'POST',
            url: `verifyotp`,
            data: data
        })
        if (response) {
            dispatch({ type: OTP_SUCCESS, payload: response?.data })
            successCallback()
        }
        else if (error) {
            dispatch({ type: OTP_FAIL })
        }
    }
}

export const resendOtp = (data, successCallback) => {
    return async (dispatch) => {
        dispatch({ type: GENERATE_OTP_REQUEST });
        const { response, error } = await apiRequest({
            method: 'POST',
            url: `generateotp`,
            data: data
        })
        if (response) {
            dispatch({ type: GENERATE_OTP_SUCCESS, payload: response?.data })
            successCallback()
        }
        else if (error) {
            dispatch({ type: GENERATE_OTP_FAIL })
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
                    otpStatus: response?.data?.isVerfied,
                    userToken: response?.data?.token
                }
            })
            let isMobileVerified = response?.data?.isVerfied
            if (isMobileVerified !== undefined && isMobileVerified !== null) {
                successCallback(isMobileVerified)
            } else {
                successCallback(true)
            }
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
            dispatch({ type: FORGOT_PASSWORD_SUCCESS, payload: response?.data })
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
            dispatch({ type: RESET_PASSWORD_SUCCESS, payload: response?.data })
            successCallback()
        }
        else if (error) {
            dispatch({ type: RESET_PASSWORD_FAIL })
        }
    }
}
