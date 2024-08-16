import dataFiles from "./ExerciseXP2.json";
import React, { Component } from "react";

export default class PostList extends Component {
  render() {
    return (
      <div>
        <h1>PostList</h1>
        {dataFiles.map((data, index) => (
          <div key={index}>
            <h2>{data.id}</h2>
            <h2>{data.title}</h2>
            <h2>{data.content}</h2>
            <h2>{data.date}</h2>
            <h2>{data.slug}</h2>
          </div>
        ))}
      </div>
    );
  }
}
