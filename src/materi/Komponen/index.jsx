import React from "react";
import ClassComponent from "./pembahasan/ClassComponent";
import FuntionalComponent from "./pembahasan/FunctionalComponent";

export default class components extends React.Component {
  render() {
    return (
      <div>
        <ClassComponent />
        <FuntionalComponent />
      </div>
    );
  }
}
