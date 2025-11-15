import React from "react";
import WorkingWithArrays from "./WorkingWithArrays";
import EnvironmentVariables from "./EnvironmentVariables";
import QueryParameters from "./QueryParameters";
import WorkingWithObjects from "./WorkwithObjects";
import PathParameters from "./PathParameters";
import HttpClient from "./HttpClient";
import WorkingWithObjectsAsynchronously from "./WorkingWithObjectsAsynchronomously";
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER || "http://localhost:4000";
export default function Lab5() {
  return (
    <div id="wd-lab5">
      <h2>Lab 5</h2>
      <div className="list-group">
        <a href={`${HTTP_SERVER}/lab5/welcome`} className="list-group-item">
          Welcome
        </a>
      </div><hr />
      <EnvironmentVariables />
        <QueryParameters />
        <PathParameters />
        <WorkingWithObjects />
        <WorkingWithArrays />
        <HttpClient />
        <WorkingWithObjectsAsynchronously />
    </div>
);}
