import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer, IRootState } from "./reducers";

export type GetState = () => IRootState;
const composeEnhancers = composeWithDevTools({
  trace: true,
  traceLimit: 25,
});

export const STORE = createStore(rootReducer, composeEnhancers(applyMiddleware(reduxThunk)));
