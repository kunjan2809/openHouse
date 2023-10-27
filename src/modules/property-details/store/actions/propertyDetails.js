import { apiRequest } from "../../../../services/apiService";
import { GET_PROPERTY_DETAILS_FAIL, GET_PROPERTY_DETAILS_REQUEST, GET_PROPERTY_DETAILS_SUCCESS, GET_REALTOR_DETAILS_FAIL, GET_REALTOR_DETAILS_REQUEST, GET_REALTOR_DETAILS_SUCCESS, GET_SIMILAR_PROPERTY_FAIL, GET_SIMILAR_PROPERTY_REQUEST, GET_SIMILAR_PROPERTY_SUCCESS } from "../constant";


export const getPropertyDetails = (id) => {
    return async (dispatch) => {
        dispatch({ type: GET_PROPERTY_DETAILS_REQUEST });
        const { response, error } = await apiRequest({
            method: 'GET',
            url: `getPropertyDetails/${id}`,
        })
        if (response) {
            dispatch({ type: GET_PROPERTY_DETAILS_SUCCESS, payload: response?.data?.data })
        }
        else if (error) {
            dispatch({ type: GET_PROPERTY_DETAILS_FAIL })
        }
    }
}

export const getRealtorInfo = (id) => {
    return async (dispatch) => {
        dispatch({ type: GET_REALTOR_DETAILS_REQUEST });
        const { response, error } = await apiRequest({
            method: 'GET',
            url: `getUserDetails/${id}`,
        })
        if (response) {
            dispatch({ type: GET_REALTOR_DETAILS_SUCCESS, payload: response?.data?.data })
        }
        else if (error) {
            dispatch({ type: GET_REALTOR_DETAILS_FAIL })
        }
    }
}

export const getSimilarProperty = (id) => {
    return async (dispatch) => {
        dispatch({ type: GET_SIMILAR_PROPERTY_REQUEST });
        const { response, error } = await apiRequest({
            method: 'GET',
            url: `getSimilarProperty/${id}`,
        })
        if (response) {
            dispatch({ type: GET_SIMILAR_PROPERTY_SUCCESS, payload: response?.data?.data })
        }
        else if (error) {
            dispatch({ type: GET_SIMILAR_PROPERTY_FAIL })
        }
    }
}
