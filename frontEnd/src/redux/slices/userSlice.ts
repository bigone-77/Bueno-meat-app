import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface CurrentUserState {
    token: string;
    nickname: string;
}

const initialState = {
    token: "",
    nickname: "",
} as CurrentUserState

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<CurrentUserState>) => {
            state.token = action.payload.token;
            state.nickname = action.payload.nickname;
        },
        removeUser: (state) => {
            state.token = "";
            state.nickname = "";
        }
    }
})

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;