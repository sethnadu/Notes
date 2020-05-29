import { applyMiddleware, createStore, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { verifyAuth } from "../store/actions/index";
import reducer from "../store/reducers/index";
import {reduxFirestore, getFirestore} from "redux-firestore"
import {reactReduxFirebase, getFirebase} from 'react-redux-firebase'

export default function configureStore(persistedState) {
    const store = createStore(
      reducer,
      persistedState,
      compose (
        applyMiddleware(
          thunkMiddleware.withExtraArgument({getFirestore, getFirebase})),
          reduxFirestore(),
          reactReduxFirebase()

        )
    );
    store.dispatch(verifyAuth());
    return store;
  }