import React from "react";
import classNames from "classnames/bind";
import styles from "./IconLeftNav.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);
function IconLeftNav({ className, img, children = undefined, navigate }) {
  const classes = cx("inner", {
    [className]: className,
  });
  return (
    <div className={cx("listItem")}>
      <Link to={navigate}>
        <div className={classes}>
          {!children ? (
            <img className={cx("imgIcon")} src={img} alt="" />
          ) : (
            children
          )}
        </div>
      </Link>
    </div>
  );
}

export default IconLeftNav;
