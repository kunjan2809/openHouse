import { combineReducers } from 'redux'
import { authReducer } from '../modules/auth/store/reducers/auth';
import { profileReducer } from '../modules/profile/store/reducers/profile';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { ownPropertiesReducer } from '../modules/profile/store/reducers/properties';
import { listingsReducer } from '../modules/home/store/reducers/listings';
import { createListingReducer } from '../modules/create-listing/store/reducers/createListing';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth', 'createListing']
}

const rootReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    ownProperties: ownPropertiesReducer,
    listings: listingsReducer,
    createListing: createListingReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default persistedReducer;

