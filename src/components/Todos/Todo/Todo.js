import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
	destroyTodo,
	updateTodo,
} from '../../../store/features/todos/todoSlice';

export default function Todo({ todo }) {
	const [isEditing, setIsEditing] = useState(false);
	const [value, setValue] = useState(todo.title);
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		if (e.key === 'Enter') {
			dispatch(updateTodo({ id: todo.id, title: value }));
			setIsEditing(false);
		}
	};

	const handleDelete = () => {
		dispatch(destroyTodo(todo.id));
	};

	return (
		<li className='list-group-item d-flex justify-content-between align-items-center'>
			{isEditing ? (
				<input
					type='text'
					className='form-control edit-input'
					value={value}
					onChange={(e) => setValue(e.target.value)}
					onKeyUp={handleSubmit}
				/>
			) : (
				<span className='task-text'>{todo.title}</span>
			)}

			<div className='btn-group'>
				<button
					type='button'
					className='btn btn-danger btn-sm delete-btn'
					onClick={handleDelete}
				>
					&#x2715;
				</button>
				<button
					type='button'
					className='btn btn-primary btn-sm edit-btn'
					onClick={() => setIsEditing(true)}
				>
					&#9998;
				</button>
			</div>
		</li>
	);
}
