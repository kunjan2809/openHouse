import { apiRequest } from "../../../../services/apiService";
import { getFormData } from "../../../../services/utils";
import { CLEAR_PROPERTY_LISTING_DATA, CREATE_LISTING_FAIL, CREATE_LISTING_REQUEST, CREATE_LISTING_STEP, CREATE_LISTING_SUCCESS } from "../constant"

export const storeStepData = (step, data) => {
    return { type: CREATE_LISTING_STEP, payload: { step, data } }
}

export const createListing = (payload, successCallback) => {
    const formattedPayload = getFormData(payload, true)
    return async (dispatch) => {
        dispatch({ type: CREATE_LISTING_REQUEST });
        const { response, error } = await apiRequest({
            method: 'POST',
            url: `createProperty`,
            data: formattedPayload,
            isToken: true
        })
        if (response) {
            dispatch({ type: CREATE_LISTING_SUCCESS })
            dispatch({ type: CLEAR_PROPERTY_LISTING_DATA })
            successCallback()
        }
        else if (error) {
            dispatch({ type: CREATE_LISTING_FAIL })
        }
    }
}