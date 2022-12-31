import React from "react";
import classNames from "classnames/bind";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);
function Button({ className, content, color = "primary", onClick }) {
  const classes = cx("wrapper", {
    [className]: className,
    [color]: color,
  });
  return (
    <button type="button" className={classes} onClick={onClick}>
      <div className={cx("content")}>{content}</div>
    </button>
  );
}

export default Button;
