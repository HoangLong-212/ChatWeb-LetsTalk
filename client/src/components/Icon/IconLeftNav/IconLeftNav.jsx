import React from "react";
import classNames from "classnames/bind";
import styles from "./IconLeftNav.module.scss";

const cx = classNames.bind(styles);
function IconLeftNav({ className, img, children = undefined }) {
  const classes = cx("inner", {
    [className]: className,
  });
  return (
    <div className={cx("listItem")}>
      <div className={classes}>
        {!children ? (
          <img className={cx("imgIcon")} src={img} alt="" />
        ) : (
          children
        )}
      </div>
    </div>
  );
}

export default IconLeftNav;
