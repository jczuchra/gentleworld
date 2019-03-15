import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import authReducer from './authReducer';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    posts: postsReducer,
    auth: authReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer