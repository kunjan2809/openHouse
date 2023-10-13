import { combineReducers } from 'redux'
import { authReducer } from '../modules/auth/store/reducers/auth';
import { profileReducer } from '../modules/profile/store/reducers/profile';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { ownPropertiesReducer } from '../modules/profile/store/reducers/properties';
import { listingsReducer } from '../modules/home/store/reducers/listings';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth']
}

const rootReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    ownProperties: ownPropertiesReducer,
    listings: listingsReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default persistedReducer;

