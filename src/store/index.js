import { createStore } from "redux";

function reducer() {
  return ["Fazer café", "esturdar", "trabalhar"];
}

const store = createStore(reducer);

export default store;
