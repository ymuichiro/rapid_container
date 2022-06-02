import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import AuthenticationStates from "../../interfaces/ReduxClasses/AuthenticationStates";

// define state type & initial state value
const initialState: AuthenticationStates = {
  isLogin: false,
};

// define reducer & action
const slice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    updateLoginStatus: (_, action: PayloadAction<boolean>): AuthenticationStates => {
      return { ..._, isLogin: action.payload };
    },
  },
});

export type State = typeof initialState;
export const { updateLoginStatus } = slice.actions;
export default slice.reducer;
