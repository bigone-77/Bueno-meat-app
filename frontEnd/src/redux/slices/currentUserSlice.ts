import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export interface CurrentUserState {
    id: number;
    nickname: string;
    // cartList: number[];
}

const initialState = {
    id: 0,
    nickname: "",
    // cartList: [],
} as CurrentUserState

const currentUserSlice = createSlice({
    name: "currentUser",
    initialState,
    reducers: {
        setCurrentUser: (state, action: PayloadAction<CurrentUserState>) => {
            state.id = action.payload.id;
            state.nickname = action.payload.nickname;
            // state.cartList = action.payload.cartList;
        },
        removeCurrentUser: (state) => {
            state.id = 0;
            state.nickname = "";
            // state.cartList = [];
        },
        updateCurrentUserNickname: (state, action: PayloadAction<Partial<CurrentUserState>>) => {
            Object.assign(state, action.payload);
        }
    }
})

export const { setCurrentUser, removeCurrentUser, updateCurrentUserNickname } = currentUserSlice.actions;

export default currentUserSlice.reducer;