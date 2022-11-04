import { createStore, applyMiddleware, compose  } from 'redux'
import thunk from "redux-thunk";
import authReducer from "./authReducer";

const initialState = {
  sidebarShow: true,
}

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return { ...state, ...rest }
    default:
      return state
  }
}
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(authReducer, composeEnhancers(applyMiddleware(thunk)));
const store = createStore(changeState)
export default store
