import React from "react";
import classNames from "classnames/bind";
import styles from "./IconLeftNav.module.scss";
import { Link, useLocation, useParams } from "react-router-dom";

const cx = classNames.bind(styles);
function IconLeftNav({
  className,
  img,
  children = undefined,
  guildId,
  onClick,
}) {
  let match = useLocation();
  let { serverId } = useParams();
  let active = false;
  // if (match.pathname === guildId) {
  //   active = true;
  // }

  const classes = cx("inner", {
    [className]: className,
    active,
  });

  // console.log("match", match);
  return (
    <div className={cx("listItem")} onClick={onClick}>
      <Link to={guildId ? `${guildId}` : ""}>
        <div className={classes}>
          {!children ? (
            <img
              className={cx("imgIcon", { active: active })}
              src={img}
              alt=""
            />
          ) : (
            children
          )}
        </div>
      </Link>
    </div>
  );
}

export default IconLeftNav;
