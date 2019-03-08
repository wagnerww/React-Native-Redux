import { createStore } from "redux";

import todos from "./reducers/todos";

const createAppropriateStore = __DEV__ ? console.tron.createStore : createStore;
const store = createAppropriateStore(todos);

export default store;
