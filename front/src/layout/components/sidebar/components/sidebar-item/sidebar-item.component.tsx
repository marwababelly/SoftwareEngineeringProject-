import React from "react";
import "../../sidebar.css";
import { ISidebarItem } from "../../sidebar.interface";

const SidebarItem = ({ item }: { item: ISidebarItem }) => {
  return (
    <div className="Sidebar_Item">
      <div className="Sidebar_Item_Inner">
        <item.icon />
        <span className="title">{item.title}</span>
      </div>
    </div>
  );
};

export default SidebarItem;
