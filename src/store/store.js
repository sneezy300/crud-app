import { createStore, compose, applyMiddleware } from 'redux';
import usersReducer from '../store/usersReducer';
import thunk from 'redux-thunk';
import { getFirestore, reduxFirestore } from 'redux-firestore';
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase';
import firebase from '../Firebase/Firebase';


const store = createStore()


export const store = createStore(
    usersReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reactReduxFirebase(firebase),
        reduxFirestore(firestore),
    )
);
