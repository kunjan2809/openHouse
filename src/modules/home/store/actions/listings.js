import { apiRequest } from "../../../../services/apiService";
import { GET_LISTINGS_FAIL, GET_LISTINGS_REQUEST, GET_LISTINGS_SUCCESS, LISTINGS_FILTER } from "../constant";

export const getLisitngs = (payload) => {
    return async (dispatch) => {
        dispatch({ type: GET_LISTINGS_REQUEST });
        const { response, error } = await apiRequest({
            method: 'POST',
            url: `getProperties`,
            data: payload,
        })
        if (response) {
            dispatch({ type: GET_LISTINGS_SUCCESS, payload: response?.data })
        }
        else if (error) {
            dispatch({ type: GET_LISTINGS_FAIL })
        }
    }
}

export const listingFilter = (payload) => {
    return { type: LISTINGS_FILTER, payload: payload }
}