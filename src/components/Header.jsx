import React from "react";
import "./Header.css";

export default function Header({ setCurrentPage }) {
  return (
    <div className="container">
      <div className="logo">Wheels</div>

      <div className="navigation">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Services</li>
        </ul>
      </div>
    </div>
  );
}
