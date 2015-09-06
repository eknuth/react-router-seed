import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

import { treesReducer } from './reducers'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

export default createStoreWithMiddleware(treesReducer)
