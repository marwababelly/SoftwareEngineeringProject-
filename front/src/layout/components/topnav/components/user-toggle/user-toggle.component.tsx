import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import useUserStore from "../../../../../zustand/user/user.store";
import "../../topnav.css";

function UserToggle() {
  const userName = useUserStore((state) => state.userInfo.firstName);

  return (
    <div className="topnav__right-user">
      <div className="topnav__right-user__image">
        <FaRegUserCircle />
      </div>
      <div className="topnav__right-user__name">{userName}</div>
    </div>
  );
}

export default UserToggle;
