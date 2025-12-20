import { type User } from "./authTypes";

const USER_KEY = "user";
const CURRENT_USER_KEY = "currentUser";

export const getUsers = (): User[] => {
  return JSON.parse(localStorage.getItem(USER_KEY) || "[]");
};

export const saveUsers = (user: User[]) => {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
};

export const setCurrentUser = (user: User) => {
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
};

export const removeCurrentUser = () => {
  localStorage.removeItem(CURRENT_USER_KEY);
};
