import { apiRequest } from "../../../../services/apiService";
import { getFormData } from "../../../../services/utils";
import { UPDATE_AUTH } from "../../../auth/store/constant";
import { GET_PROFILE_FAIL, GET_PROFILE_REQUEST, GET_PROFILE_SUCCESS, UPDATE_PROFILE_FAIL, UPDATE_PROFILE_REQUEST, UPDATE_PROFILE_SUCCESS } from "../constant";

export const getProfile = () => {
    return async (dispatch) => {
        dispatch({ type: GET_PROFILE_REQUEST });
        const { response, error } = await apiRequest({
            method: 'GET',
            url: `getprofile`,
            isToken: true
        })
        if (response) {
            dispatch({ type: GET_PROFILE_SUCCESS, payload: response?.data?.data })
        }
        else if (error) {
            dispatch({ type: GET_PROFILE_FAIL })
        }
    }
}

export const updateProfile = (data, successCallback) => {
    const payload = getFormData(data)
    return async (dispatch) => {
        dispatch({ type: UPDATE_PROFILE_REQUEST });
        const { response, error } = await apiRequest({
            method: 'PUT',
            url: `updateuser`,
            data: payload,
            isToken: true
        })
        if (response) {
            dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: response?.data?.data })
            dispatch({ type: UPDATE_AUTH, payload: response?.data?.data })
            successCallback()
        }
        else if (error) {
            dispatch({ type: UPDATE_PROFILE_FAIL })
        }
    }
}