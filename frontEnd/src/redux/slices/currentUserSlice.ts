import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export interface CurrentUserState {
    id: number;
    token: string;
    nickname: string;
    cartCount: number;
    heartCount: number;
}

const initialState = {
    id: 0,
    token: "",
    nickname: "",
    cartCount: 0,
    heartCount: 0,
} as CurrentUserState

const currentUserSlice = createSlice({
    name: "currentUser",
    initialState,
    reducers: {
        setCurrentUser: (state, action: PayloadAction<CurrentUserState>) => {
            state.id = action.payload.id;
            state.token = action.payload.token;
            state.nickname = action.payload.nickname;
            state.cartCount = action.payload.cartCount;
            state.heartCount = action.payload.heartCount;
        },
        removeCurrentUser: (state) => {
            state.id = 0;
            state.token = "";
            state.nickname = "";
            state.cartCount = 0;
            state.heartCount = 0;
        }
    }
})

export const { setCurrentUser, removeCurrentUser } = currentUserSlice.actions;

export default currentUserSlice.reducer;