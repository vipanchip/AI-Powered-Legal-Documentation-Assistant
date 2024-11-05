import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
function Protected(props) {
  const { Component } = props;
  const Navigate = useNavigate();
  useEffect(() => {
    let login = localStorage.getItem("Loggedin");
    if (!login) {
      Navigate("/login");
    }
  });
  return (
    <div>
      <Component />
    </div>
  );
}

export default Protected;
