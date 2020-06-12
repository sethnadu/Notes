import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { verifyAuth } from "../store/actions/index";
import reducer from "../store/reducers/index";
import {reduxFirestore, getFirestore} from "redux-firestore"
import {reactReduxFirebase, getFirebase} from 'react-redux-firebase'
import {myFirebase} from './base'
const configureStore = () => {
    const store = createStore(
      reducer,
      compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
        reduxFirestore(myFirebase),
        reactReduxFirebase(myFirebase)
        )
    );
    store.dispatch(verifyAuth());
    return store;
  }

  export default configureStore;