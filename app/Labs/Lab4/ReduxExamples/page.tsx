"use client";
import React from "react";
import TodoList from "./todos/TodoList";
import { Provider } from "react-redux";
import store from "../store/page";  
import CounterRedux from "./CounterRedux/index";
import AddRedux from "./AddRedux/index";
import HelloRedux from "./HelloRedux";
export default function ReduxExamples() {
  return(
    <div>
      <h2>Redux Examples</h2>
      <Provider store={store}>
        <HelloRedux />
        <CounterRedux />
        <AddRedux />
        <TodoList />
      </Provider>
    </div>
  );
};
