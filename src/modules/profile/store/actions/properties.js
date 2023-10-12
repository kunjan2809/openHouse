import { apiRequest } from "../../../../services/apiService";
import { GET_OWN_PROPERTY_FAIL, GET_OWN_PROPERTY_REQUEST, GET_OWN_PROPERTY_SUCCESS } from "../constant";

export const getOwnProperties = () => {
    return async (dispatch) => {
        dispatch({ type: GET_OWN_PROPERTY_REQUEST });
        const { response, error } = await apiRequest({
            method: 'GET',
            url: `propertyByUser`,
            isToken: true
        })
        if (response) {
            dispatch({ type: GET_OWN_PROPERTY_SUCCESS, payload: response?.data?.data })
        }
        else if (error) {
            dispatch({ type: GET_OWN_PROPERTY_FAIL })
        }
    }
}