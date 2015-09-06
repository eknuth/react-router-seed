import { FETCH_TREES, RECEIVE_TREES } from './actions'

const initialState = {
  trees: []
};

export function treesReducer (state = initialState, action) {
  console.log('reducer', action)
  switch (action.type) {
  case FETCH_TREES:
    console.log('fetch')
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
