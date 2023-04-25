import React from "react";
import "./topnav.css";
import { FaRegUser } from "react-icons/fa";
import {
  AiFillSetting,
  AiOutlineLogout,
  AiOutlineShoppingCart,
  AiOutlineWallet,
} from "react-icons/ai";
import { BsPalette, BsSearch } from "react-icons/bs";
import { BiBell, BiError } from "react-icons/bi";
import { FiPackage } from "react-icons/fi";
import Dropdown from "../dropdown/dropdown.component";
import UserToggle from "./components/user-toggle/user-toggle.component";
import UserMenu from "./components/user-menu/user-menu.component";
import NotificationItem from "./components/notification-item/notification-item.component";
import { IDropdownItem } from "../dropdown/dropdown.interface";

export default function Topnav() {
  const userMenu: IDropdownItem[] = [
    {
      id: 0,
      icon: FaRegUser,
      content: "Profile",
    },
    {
      id: 1,
      icon: AiOutlineWallet,
      content: "My Wallet",
    },
    {
      id: 2,
      icon: AiFillSetting,
      content: "Settings",
    },
    {
      id: 3,
      icon: AiOutlineLogout,
      content: "Logout",
    },
  ];

  const notifications: IDropdownItem[] = [
    {
      id: 0,
      icon: BiError,
      content: "Curabitur id eros quis nunc suscipit blandit",
    },
    {
      id: 1,
      icon: FiPackage,
      content:
        "Duis malesuada justo eu sapien elementum, in semper diam posuere",
    },
    {
      id: 2,
      icon: AiOutlineShoppingCart,
      content: "Donec at nisi sit amet tortor commodo porttitor pretium a erat",
    },
    {
      id: 3,
      icon: BiError,
      content: "In gravida mauris et nisi",
    },
    {
      id: 4,
      icon: FaRegUser,
      content: "Curabitur id eros quis nunc suscipit blandit",
    },
  ];

  return (
    <div className="topnav">
      <div className="topnav__search">
        <input
          type="text"
          placeholder="Search ...."
          name="search"
          id="search"
        />
        <BsSearch />
      </div>
      <div className="topnav__right">
        <div className="topnav__right-item">
          <Dropdown
            customToggle={UserToggle}
            contentData={userMenu}
            renderItems={(item) => UserMenu({ item })}
          />
        </div>
        <div className="topnav__right-item">
          {
            <Dropdown
              Icon={BiBell}
              badge="12"
              contentData={notifications}
              renderItems={(item) => NotificationItem({ item })}
            />
          }
        </div>
        <div className="topnav__right-item">
          <button className="dropdown__toggle">
            <BsPalette />
          </button>
        </div>
      </div>
    </div>
  );
}
