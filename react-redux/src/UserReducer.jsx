import { createSlice } from "@reduxjs/toolkit";
import { userlist } from "./Data";

const userSlice = createSlice({
  name: "users",
  initialState: userlist,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    updateUser: (state, action) => {
      const { id, name, email } = action.payload;
      const barath = state.find((user) => user.id == id);
      if (barath) {
        barath.name = name;
        barath.email = email;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const barath = state.find((user) => user.id == id);
      if (barath) {
        return state.filter((f) => f.id !== id);
      }
    },
  },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
