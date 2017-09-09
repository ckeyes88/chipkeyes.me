import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

function reducer(state = { articles: [] }, action) {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case "SET_ARTICLES":
      newState.articles = action.articles;
      return newState;
    default:
      return newState;
  }
}

export default combineReducers({
  reducer,
  routing: routerReducer,
});
