import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { verifyAuth } from "../store/actions/index";
import reducer from "../store/reducers/index";

export default function configureStore(persistedState) {
    const store = createStore(
      reducer,
      persistedState,
      applyMiddleware(thunkMiddleware)
    );
    store.dispatch(verifyAuth());
    return store;
  }