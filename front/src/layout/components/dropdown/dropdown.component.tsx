import React, { useRef } from "react";
import "./dropdown.css";
import { IconType } from "react-icons";
import { IDropdownItem } from "./dropdown.interface";

const clickOutsideRef = (contentRef: any, toggleRef: any) => {
  document.addEventListener("mousedown", (e) => {
    if (toggleRef.current && toggleRef.current.contains(e.target)) {
      contentRef.current.classList.toggle("active");
    } else if (contentRef.current && !contentRef.current.contains(e.target)) {
      contentRef.current.classList.remove("active");
    }
  });
};

type Props = {
  badge?: string;
  contentData: IDropdownItem[];
  Icon?: IconType;
  customToggle?: () => JSX.Element;
  renderItems: (item: IDropdownItem) => JSX.Element;
};

export default function Dropdown({
  badge,
  contentData,
  Icon,
  customToggle,
  renderItems,
}: Props) {
  const dropdownToggleEl = useRef(null);
  const dropdownContentEl = useRef(null);
  clickOutsideRef(dropdownContentEl, dropdownToggleEl);

  return (
    <div className="dropdown">
      <button ref={dropdownToggleEl} className="dropdown__toggle">
        {Icon && <Icon />}
        {badge ? <span className="dropdown__toggle-badge">{badge}</span> : ""}
        {customToggle && customToggle()}
      </button>
      <div ref={dropdownContentEl} className="dropdown__content">
        {contentData.map((item) => {
          return renderItems(item);
        })}
      </div>
    </div>
  );
}
