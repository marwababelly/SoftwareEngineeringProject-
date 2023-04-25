import { ReactNode } from "react";
import { create } from "zustand";

type IPopupState = {
  open: boolean;
  children?: ReactNode;
  withoutOverlay?: boolean;
  onClose?: () => void;
};

type IInitialState = {
  popupState: IPopupState | null;
};

const initialState: IInitialState = {
  popupState: null,
};

type TMainStoreAction = {
  setPopupState: (value?: IPopupState) => void;
};

const useMainStore = create<IInitialState & TMainStoreAction>((set, get) => ({
  // states
  popupState: initialState.popupState,

  // set
  setPopupState: (value) => {
    set({
      ...initialState,
      popupState: value,
    });
  },
}));

export default useMainStore;
