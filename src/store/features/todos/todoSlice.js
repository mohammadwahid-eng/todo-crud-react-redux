import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	todos: [],
};

export const postSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		createTodo: (state, action) => {
			state.todos = state.todos.concat({ ...action.payload, id: Date.now() });
		},
		updateTodo: (state, action) => {
			const { id, title } = action.payload;
			state.todos = state.todos.map((item) => {
				if (item.id === id) item.title = title;
				return item;
			});
		},
		destroyTodo: (state, action) => {
			state.todos = state.todos.filter((item) => item.id !== action.payload);
		},
	},
});

export const { createTodo, updateTodo, destroyTodo } = postSlice.actions;

export default postSlice.reducer;
