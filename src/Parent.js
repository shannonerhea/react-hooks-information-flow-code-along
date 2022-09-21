import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [childrenColor, setChildrenColor] = useState("#fff");

  function handleChangeColor() {
    const newRandomColor = getRandomColor();
    setColor(newRandomColor);
    setChildrenColor(newChildColor);
  };

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child Child color={childrenColor} onChangeColor={handleChangeColor} />
      <Child Child color={childrenColor} onChangeColor={handleChangeColor} />
    </div>
  );
}

export default Parent;
