import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "./reducer";
import modulesReducer from "./[cid]/Modules/reducer";
import assignmentsReducer from "./[cid]/Assignments/reducer";
import accountReducer from "../Account/reducer";
import enrollmentsReducer from "../Enrollments/reducer";
const store = configureStore({
  reducer: { coursesReducer, modulesReducer, assignmentsReducer, accountReducer, enrollmentsReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;