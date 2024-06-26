// import { createSlice } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  post: 0,
};
const MovieIdStore = createSlice({
  name: "switcher",
  initialState,
  reducers: {
    changer: (state, action) => {
      state.post = action.payload;
    },
   
  },
});
export default MovieIdStore.reducer;
export const IdReducer = MovieIdStore.actions;
// export default TabSwitcher.reducer
// export {TabSwitcher as postReducer}
