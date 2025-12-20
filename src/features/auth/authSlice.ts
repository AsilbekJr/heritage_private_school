import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type User } from "./authTypes";
import {
  getUsers,
  saveUsers,
  setCurrentUser,
  removeCurrentUser,
} from "./authStorage";

interface AuthState {
  user: User | null;
  isAuth: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  isAuth: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    register: (state, action: PayloadAction<User>) => {
      const users = getUsers();

      const exists = users.find((u) => u.phone === action.payload.phone);

      if (exists) {
        state.error = "Bu telefon raqam allaqachon mavjud";
        return;
      }

      users.push(action.payload);
      saveUsers(users);
      setCurrentUser(action.payload);

      state.user = action.payload;
      state.isAuth = true;
      state.error = null;
    },

    login: (
      state,
      action: PayloadAction<{ phone: string; password: string }>
    ) => {
      const users = getUsers();

      const foundUser = users.find(
        (u) =>
          u.phone === action.payload.phone &&
          u.password === action.payload.password
      );

      if (!foundUser) {
        state.error = "Telefon yoki parol noto‘g‘ri";
        return;
      }

      setCurrentUser(foundUser);
      state.user = foundUser;
      state.isAuth = true;
      state.error = null;
    },

    logout: (state) => {
      removeCurrentUser();
      state.user = null;
      state.isAuth = false;
    },

    clearError: (state) => {
      state.error = null;
    },
  },
});

export const { register, login, logout, clearError } = authSlice.actions;

export default authSlice.reducer;
