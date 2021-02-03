import { createStore } from 'redux'
import usersReducer from '../store/usersReducer'

const store = createStore()


export const store = createStore(usersReducer);
