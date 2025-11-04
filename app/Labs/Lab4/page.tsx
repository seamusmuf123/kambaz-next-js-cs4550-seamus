"use client"
import ReduxExamples from "./ReduxExamples";
import PassingFunctions from "./PassingFunctions";
import React from "react";
import EventObject from "./EventObject";
import ClickEvent from "./ClickEvent";
import BooleanStateVariables from "./BooleanStateVariables";
import PassingDataOnEvent from "./PassingDataOnEvent";
import Counter from "./Counter";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariables";
import ArrayStateVariable from "./ArrayStateVariable";
import ObjectStateVariables from "./ObjectStateVariables";
import ParentStateComponent from "./ParentStateComponent";
import store from "./store";
import { Provider } from "react-redux";
export default function Lab4() {
  function sayHello() {
    alert("Hello");
  }
  return (
    <Provider store={store}>
    <div id="wd-passing-functions">
      <h2>Lab 4</h2>
  <ReduxExamples />
      <PassingFunctions theFunction={sayHello} />
      <EventObject />
      <ClickEvent />
      <BooleanStateVariables />
      <PassingDataOnEvent />
      <Counter />
      <StringStateVariables xyz="John" />
      <DateStateVariable />
      <ArrayStateVariable />
      <ObjectStateVariables />
      <ParentStateComponent />
    </div>
  </Provider>
);}
