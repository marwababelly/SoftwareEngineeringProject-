import React from "react";
import "../../topnav.css";
import { IDropdownItem } from "../../../dropdown/dropdown.interface";

function NotificationItem({ item }: { item: IDropdownItem }) {
  return (
    <div className="notification-item" key={item.id}>
      <item.icon />
      <span>{item.content}</span>
    </div>
  );
}

export default NotificationItem;
