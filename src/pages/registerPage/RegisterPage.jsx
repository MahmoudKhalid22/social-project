import React from "react";
import "./registerPage.css";

export default function RegisterPage() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Lamasocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Lamasocial.{""}
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Username" className="loginInput" />
            <input placeholder="Email" className="loginInput" />

            <input
              placeholder="Password"
              type="password"
              className="loginInput"
            />
            <input
              placeholder="Confirm Password"
              type="password"
              className="loginInput"
            />
            <button className="loginButton">Sign up</button>

            <button className="loginRegisterButton">Log into Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}
