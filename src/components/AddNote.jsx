import React from "react";
import Button from "./Button";

function materializeEffect(event) {
  document.getElementById("temp") && document.getElementById("temp").remove();
  const circle = document.createElement("div");
  circle.setAttribute("id", "temp");
  const x = event.nativeEvent.offsetX;
  const y = event.nativeEvent.offsetY;
  circle.classList.add("circle");
  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;
  event.currentTarget.appendChild(circle);
}

function AddNote() {
  return <Button type="submit" onClick={materializeEffect} />;
}

export default AddNote;
