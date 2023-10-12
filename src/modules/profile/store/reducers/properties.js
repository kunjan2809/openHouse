import { GET_OWN_PROPERTY_FAIL, GET_OWN_PROPERTY_REQUEST, GET_OWN_PROPERTY_SUCCESS } from "../constant"


const initialState = {
    loading: false,
    own_properties: [],
}

const ownPropertiesreducer = (state = initialState, action) => {
    switch (action.type) {
        
        //get profile
        case GET_OWN_PROPERTY_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case GET_OWN_PROPERTY_SUCCESS:
            return {
                ...state,
                loading: false,
                own_properties: action.payload
            }
        case GET_OWN_PROPERTY_FAIL:
            return {
                ...state,
                loading: false,
                own_properties: []
            }

        //Default
        default:
            return state;
    }
}

export { ownPropertiesreducer }
