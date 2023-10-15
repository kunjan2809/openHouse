import { CLEAR_PROPERTY_LISTING_DATA, CREATE_LISTING_FAIL, CREATE_LISTING_REQUEST, CREATE_LISTING_STEP, CREATE_LISTING_SUCCESS } from "../constant";

const initialState = {
    loading: false,
    listingData: {},
}

const createListingReducer = (state = initialState, action) => {
    switch (action.type) {

        //Create listing step
        case CREATE_LISTING_STEP:
            return {
                ...state,
                listingData: {
                    ...state.listingData,
                    [action.payload.step]: action.payload.data
                }
            }
        //Clear listing data
        case CLEAR_PROPERTY_LISTING_DATA:
            return {
                ...state,
                listingData: {}
            }

        //Create listing
        case CREATE_LISTING_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case CREATE_LISTING_SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case CREATE_LISTING_FAIL:
            return {
                ...state,
                loading: false,
            }

        //Default
        default:
            return state;
    }
}

export { createListingReducer }
