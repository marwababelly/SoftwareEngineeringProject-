import { create } from "zustand";
import { saveToLocalStorage, saveToSessionStorage } from "../../utils/helpers";

export type TUserInfoForProfile = {
  fullName: string;
  firstName: string;
  lastName: string;
  photoUrl: string | undefined;
  backgroundImages: string[];
  bio: string;
  address?: string;
  id: number;
};

export type IUser = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  token: string;
  address?: string;
};

type IInitialState = {
  userInfo: IUser;
  rememberMe: boolean;
};

const initialState: IInitialState = {
  userInfo: {
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    token: "",
  },
  rememberMe: false,
};

const $LOCAL_KEY = "user";

const getInitialState = () => {
  try {
    const data =
      typeof window !== "undefined" && localStorage.getItem($LOCAL_KEY);

    if (data) {
      const user = JSON.parse(data as string);
      if (user?.id) {
        return {
          ...initialState,
          userInfo: user,
        };
      }
    }

    const sessionData =
      typeof window !== "undefined" && sessionStorage.getItem($LOCAL_KEY);

    if (sessionData) {
      const sessionUser = JSON.parse(sessionData as string) as IUser;

      if (sessionUser?.id) {
        return {
          ...initialState,
          userInfo: sessionUser,
        };
      }
    }
    return initialState;
  } catch {
    return initialState;
  }
};

const saveItem = ({
  data,
  rememberMe,
}: {
  data?: IUser;
  rememberMe?: boolean;
}) => {
  if (rememberMe) {
    saveToLocalStorage($LOCAL_KEY, data);
  } else {
    saveToSessionStorage($LOCAL_KEY, data);
  }
};

type TUserActions = {
  signIn: (payload: { data: IUser; rememberMe: boolean }) => void;
  logOut: () => void;
};

const useUserStore = create<IInitialState & TUserActions>((set, get) => ({
  // states
  userInfo: getInitialState().userInfo,
  rememberMe: getInitialState().rememberMe,

  // set
  signIn: async (payload) => {
    set({ userInfo: payload.data, rememberMe: payload.rememberMe });
    saveItem(payload);
  },
  logOut: () => {
    sessionStorage.removeItem($LOCAL_KEY);
    localStorage.removeItem($LOCAL_KEY);
    set({
      userInfo: getInitialState().userInfo,
    });
  },

  // get
}));

export default useUserStore;
