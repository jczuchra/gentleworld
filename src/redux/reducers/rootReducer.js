import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import authReducer from './authReducer';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
    posts: postsReducer,
    auth: authReducer,
    firestore: firestoreReducer
})

export default rootReducer