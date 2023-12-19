import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	loggedIn: false,
	userDetails: {},
	userTheme: '',
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		login: (state) => {
			state.loggedIn = true;
		},
		logOut: (state) => {
			state.loggedIn = false;
			state.userDetails = {};
		},

		updateUserDetails: (state, action) => {
			state.userDetails = action.payload;
		},
		updateTheme: (state, action) => {
			state.userTheme = action.payload;
		},
	},
});

export const { login, logOut, updateUserDetails, updateTheme } =
	userSlice.actions;

export default userSlice.reducer;
