import { CREATE_LISTING_STEP } from "../constant";

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
                loading: false,
                listingData: {
                    ...state.listingData,
                    [action.payload.step]: action.payload.data
                }
            }

        //Default
        default:
            return state;
    }
}

export { createListingReducer }
