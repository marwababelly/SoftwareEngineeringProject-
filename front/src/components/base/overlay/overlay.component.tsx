import React, { useEffect } from "react";
import "./overlay.css";

type Props = {
  onClose?: () => void;
};

function Overlay({ onClose }: Props) {
  const handleClose = () => {
    document.body.style.overflow = "auto";
    onClose?.();
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return <button className="overlay" onClick={onClose && handleClose} />;
}

export default Overlay;
