import girisReducer from "./giris";

import { combineReducers } from "redux";

const butunReducerlar = combineReducers({
  giris: girisReducer,
});

export default butunReducerlar;
