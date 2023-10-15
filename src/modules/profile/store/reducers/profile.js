import { GET_PROFILE_FAIL, GET_PROFILE_REQUEST, GET_PROFILE_SUCCESS, UPDATE_PROFILE_FAIL, UPDATE_PROFILE_REQUEST, UPDATE_PROFILE_SUCCESS } from "../constant"

const initialState = {
    loading: false,
    profileDetails: {},
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        //get profile
        case GET_PROFILE_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case GET_PROFILE_SUCCESS:
            return {
                ...state,
                loading: false,
                profileDetails: action.payload
            }
        case GET_PROFILE_FAIL:
            return {
                ...state,
                loading: false,
                profileDetails: {}
            }

        //update profile
        case UPDATE_PROFILE_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case UPDATE_PROFILE_SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case UPDATE_PROFILE_FAIL:
            return {
                ...state,
                loading: false,
            }

        //Default
        default:
            return state;
    }
}

export { profileReducer }
