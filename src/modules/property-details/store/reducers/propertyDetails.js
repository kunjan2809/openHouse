import { GET_PROPERTY_DETAILS_FAIL, GET_PROPERTY_DETAILS_REQUEST, GET_PROPERTY_DETAILS_SUCCESS, GET_REALTOR_DETAILS_FAIL, GET_REALTOR_DETAILS_REQUEST, GET_REALTOR_DETAILS_SUCCESS, GET_SIMILAR_PROPERTY_FAIL, GET_SIMILAR_PROPERTY_REQUEST, GET_SIMILAR_PROPERTY_SUCCESS } from "../constant"


const initialState = {
    loading: false,
    propertyDetails: {},
    realtorInfo: {},
    similarPRoperties: [],
}

const propertyDetailsReducer = (state = initialState, action) => {
    switch (action.type) {

        //Get property details
        case GET_PROPERTY_DETAILS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case GET_PROPERTY_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                propertyDetails: action.payload
            }
        case GET_PROPERTY_DETAILS_FAIL:
            return {
                ...state,
                loading: false,
                propertyDetails: {}
            }

        //Get realtor info
        case GET_REALTOR_DETAILS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case GET_REALTOR_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                realtorInfo: action.payload
            }
        case GET_REALTOR_DETAILS_FAIL:
            return {
                ...state,
                loading: false,
                realtorInfo: {}
            }

        //Get realtor info
        case GET_SIMILAR_PROPERTY_REQUEST:
            return {
                ...state,
                similarPRoperties: []
            }
        case GET_SIMILAR_PROPERTY_SUCCESS:
            return {
                ...state,
                similarPRoperties: action.payload
            }
        case GET_SIMILAR_PROPERTY_FAIL:
            return {
                ...state,
                similarPRoperties: []
            }

        //Default
        default:
            return state;
    }
}

export { propertyDetailsReducer }
