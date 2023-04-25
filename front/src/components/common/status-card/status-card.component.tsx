import React from "react";
import "./status-card.css";
import { IconType } from "react-icons";

export default function StatusCard({
  Icon,
  count,
  title,
}: {
  Icon: IconType;
  count: string;
  title: string;
}) {
  return (
    <div className="status-card ">
      <div className="status-card__icon">
        <Icon />
      </div>
      <div className="status-card__info">
        <h4>{count}</h4>
        <span>{title}</span>
      </div>
    </div>
  );
}
