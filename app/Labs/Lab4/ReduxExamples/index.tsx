"use client";
import React from "react";
import TodoList from "./todos/TodoList";
import CounterRedux from "./CounterRedux";
import AddRedux from "./AddRedux";
import HelloRedux from "./HelloRedux";

export default function ReduxExamples() {
  return (
    <div>
      <h2>Redux Examples</h2>
      <HelloRedux />
      <CounterRedux />
      <AddRedux />
      <TodoList />
    </div>
  );
}

