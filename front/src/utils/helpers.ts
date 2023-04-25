export const saveToLocalStorage = (key: string, value: any) => {
  typeof window !== "undefined" &&
    localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLocalStorage = (key: string) => {
  const data = typeof window !== "undefined" && localStorage.getItem(key);
  if (!data) return null;

  return JSON.parse(data);
};

export const saveToSessionStorage = (key: string, value: any) => {
  typeof window !== "undefined" &&
    sessionStorage.setItem(key, JSON.stringify(value));
};

export const getFromSessionStorage = (key: string) => {
  const data = typeof window !== "undefined" && sessionStorage.getItem(key);
  if (!data) return null;

  return JSON.parse(data);
};
