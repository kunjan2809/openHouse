import { GET_LISTINGS_FAIL, GET_LISTINGS_REQUEST, GET_LISTINGS_SUCCESS, LISTINGS_FILTER } from "../constant"


const initialState = {
    loading: false,
    listings: [],
    totalListings: null,
    filters: {
        search: '',
        type: 'any',
        price: 'any',
        bedroom: 'any',
        sort: 'any',
        page: '',
        pageSize: 1
    }
}

const listingsReducer = (state = initialState, action) => {
    switch (action.type) {

        //get listings
        case GET_LISTINGS_REQUEST:
            return {
                ...state,
                loading: true,
                totalListings: null,
            }
        case GET_LISTINGS_SUCCESS:
            return {
                ...state,
                loading: false,
                totalListings: action.payload?.totalRecords,
                listings: action.payload?.data
            }
        case GET_LISTINGS_FAIL:
            return {
                ...state,
                listings: [],
                loading: false,
                totalListings: null,
            }

        //listings filter
        case LISTINGS_FILTER:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    [action.payload?.key]: action.payload?.value
                }
            }

        //Default
        default:
            return state;
    }
}

export { listingsReducer }
