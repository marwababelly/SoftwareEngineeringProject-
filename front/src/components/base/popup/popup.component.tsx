/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback, useEffect } from "react";
import Overlay from "../overlay/overlay.component";
import useMainStore from "../../../zustand/main/main.store";

const Popup = () => {
  const popupState = useMainStore((state) => state.popupState);
  const setPopupState = useMainStore((state) => state.setPopupState);

  const handleClose = useCallback(() => {
    document.body.style.overflow = "auto";
    popupState?.onClose?.();
    return setPopupState({
      open: false,
    });
  }, [popupState, setPopupState]);

  useEffect(() => {
    if (popupState?.open) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [handleClose, popupState?.open]);

  return popupState?.open ? (
    <div className="flex z-[100] justify-center items-center w-full h-full fixed top-0 left-0 cursor-default">
      <div className="scrollable z-[120] rounded-3xl rounded-tr-none rounded-br-none  bg-white relative py-4 sm:py-8 px-12 p-2 sm:px-16 w-[94vw] xs:w-[86vw] sm:w-[min(80vw,33rem)] h-fit max-h-[86vh] overflow-auto">
        {popupState?.children}
      </div>
      {!popupState?.withoutOverlay && <Overlay onClose={handleClose} />}
    </div>
  ) : null;
};

export default Popup;
