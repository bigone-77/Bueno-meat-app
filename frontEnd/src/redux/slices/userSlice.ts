import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export interface CurrentUserState {
    token: string;
    nickname: string;
    cartCount: number;
    heartCount: number;
}

const initialState = {
    token: "",
    nickname: "",
    cartCount: 0,
    heartCount: 0,
} as CurrentUserState

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<CurrentUserState>) => {
            state.token = action.payload.token;
            state.nickname = action.payload.nickname;
            state.cartCount = action.payload.cartCount;
            state.heartCount = action.payload.heartCount;
        },
        removeUser: (state) => {
            state.token = "";
            state.nickname = "";
            state.cartCount = 0;
            state.heartCount = 0;
        }
    }
})

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;