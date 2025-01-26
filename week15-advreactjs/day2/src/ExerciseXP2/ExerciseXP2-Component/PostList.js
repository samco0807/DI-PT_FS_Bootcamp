import dataFiles from "./dataFiles.json";
import React, { Component } from "react";

export default class PostList extends Component {
  render() {
    return (
      <div>
        <h1>This is a title</h1>
        {dataFiles.map((data, index) => (
          <div key={index}>
            <h1>{data.title}</h1>
            <h3>{data.content}</h3>
            {/* <h2>{data.date}</h2> */}
            {/* <h2>{data.slug}</h2> */}
          </div>
        ))}
      </div>
    );
  }
}
