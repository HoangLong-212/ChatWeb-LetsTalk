import React from "react";
import classNames from "classnames/bind";
import styles from "./AuthenticationLayout.module.scss";

const cx = classNames.bind(styles);
function AuthenticationLayout({ children }) {
  const url = window.location.pathname;
  const path = url.split("/").filter((x) => x);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <h1>
          {path[0] === "login" ? (
            <div className={cx("description")}>
              <strong>Welcome back!</strong>
              <p>We're are so excited to see you again!</p>
            </div>
          ) : (
            "Sign Up"
          )}
        </h1>
        {children}
      </div>
    </div>
  );
}

export default AuthenticationLayout;
