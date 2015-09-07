import { ASYNC_FETCH_TREES, RECEIVE_TREES } from './actions'

const initialState = {
  trees: []
};

export function treesReducer (state = initialState, action) {
  switch (action.type) {
  case ASYNC_FETCH_TREES:
    return Object.assign({}, state, { isFetchingTrees: true })
  case RECEIVE_TREES:
    return Object.assign({}, state, {
      isFetchingTrees: false,
      trees: action.payload
    })
  default:
   return state;
   }
}
