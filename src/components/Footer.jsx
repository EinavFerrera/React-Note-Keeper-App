import React from "react";

export default function Footer() {
  var date = new Date().getFullYear();
  return (
    <footer>
      <p>Made by Einav {date}</p>
    </footer>
  );
}
