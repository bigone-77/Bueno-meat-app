import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserProps } from "../../types/UserProps";

const initialState = {
    email: "",
    pw: "",
    username: "",
    phone: "",
    nickname: "",
    address: "",
    detailAddress: "",
} as UserProps;

const editUserDataSlice = createSlice({
    name: "editData",
    initialState,
    reducers: {
        setEditUser: (state, action: PayloadAction<UserProps>) => {
            state.email = action.payload.email;
            state.pw = action.payload.pw;
            state.username = action.payload.username;
            state.nickname = action.payload.nickname;
            state.phone = action.payload.phone;
            state.address = action.payload.address;
            state.detailAddress = action.payload.detailAddress;
        },
    }
})

export const { setEditUser } = editUserDataSlice.actions;

export default editUserDataSlice.reducer;