import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { authSlice } from "src/pages/auth/slice";
import { allBoardSlice } from "src/pages/home/slice";
import { activeBoard } from "src/pages/board/slice";
import { createWrapper } from "next-redux-wrapper";

const makeStore = () =>
  configureStore({
    reducer: {
      [authSlice.name]: authSlice.reducer,
      [allBoardSlice.name] : allBoardSlice.reducer,
      [activeBoard.name] : activeBoard.reducer,
    },
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);

// const store = createStore(rootReducer);