import React from "react";
import "./Word.css";

const Word = props => (
  <li>
    Po ANGIELSKU: <strong>{props.english}</strong>. Po POLSKU:
    <strong> {props.polish}</strong>
  </li>
);

export default Word;
