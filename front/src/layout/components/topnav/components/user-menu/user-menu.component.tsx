import React from "react";
import { Link } from "react-router-dom";
import "../../topnav.css";
import { IDropdownItem } from "../../../dropdown/dropdown.interface";

const UserMenu = ({ item }: { item: IDropdownItem }) => {
  return (
    <Link to={"/" + item.content.split(" ").join("-")} key={item.id}>
      <div className="notification-item">
        <item.icon />
        <span>{item.content}</span>
      </div>
    </Link>
  );
};

export default UserMenu;
