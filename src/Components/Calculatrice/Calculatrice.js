import React from "react";
import "./Calculatrice.css";

export default function Calculatrice() {
  return (
    <div className="container-calculatrice">
      <div className="display">
        <span>(0)</span>0
      </div>
      <div className="component-clavier">
        <div className="first-row">
          <button className="btn-clear">DEL</button>
          <button>%</button>
          <button>/</button>
        </div>
        <div className="second-row">
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>x</button>
        </div>
        <div className="third-row">
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>-</button>
        </div>
        <div className="fourth-row">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>+</button>
        </div>
        <div className="last-row">
          <button className="btn-zero">0</button>
          <button>.</button>
          <button>=</button>
        </div>
      </div>
    </div>
  );
}
