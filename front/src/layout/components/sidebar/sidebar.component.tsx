import React, { useEffect, useRef } from "react";
import "./sidebar.css";
import { NavLink } from "react-router-dom";
import { BiMenuAltLeft } from "react-icons/bi";
import SidebarItem from "./components/sidebar-item/sidebar-item.component";
import useLinks from "../../use-links.hook";

export default function Sidebar() {
  const sidebarRef = useRef<any>();
  const links = useLinks();

  const handleToggleSidebar = () => {
    sidebarRef?.current?.classList?.toggle("close");
    sidebarRef?.current?.classList?.toggle("open");
    let sidebarWidth = getComputedStyle(document.documentElement)
      .getPropertyValue("--sidebar-width")
      .trim();
    document.documentElement.style.setProperty(
      "--sidebar-width",
      sidebarWidth === "300px" ? "100px" : "300px"
    );
  };

  useEffect(() => {
    if (window.innerWidth < 800) {
      sidebarRef.current.classList.add("close");
      sidebarRef.current.classList.remove("open");
      document.documentElement.style.setProperty("--sidebar-width", "100px");
    } else {
      sidebarRef.current.classList.add("open");
      sidebarRef.current.classList.remove("close");
      document.documentElement.style.setProperty("--sidebar-width", "300px");
    }
    window.addEventListener("resize", function () {
      if (window.innerWidth < 800) {
        sidebarRef.current.classList.add("close");
        sidebarRef.current.classList.remove("open");
        document.documentElement.style.setProperty("--sidebar-width", "100px");
      } else {
        sidebarRef.current.classList.add("open");
        sidebarRef.current.classList.remove("close");
        document.documentElement.style.setProperty("--sidebar-width", "300px");
      }
    });
  }, []);

  return (
    <aside ref={sidebarRef} className="sidebar open">
      <div className="Sidebar_Logo">
        <button onClick={handleToggleSidebar}>
          <BiMenuAltLeft />
          <span className="title"> Admin Dashboard </span>
        </button>
      </div>
      {links.map((item) => {
        return (
          <NavLink to={item.href} key={item.id}>
            <SidebarItem item={item} />
          </NavLink>
        );
      })}
    </aside>
  );
}
