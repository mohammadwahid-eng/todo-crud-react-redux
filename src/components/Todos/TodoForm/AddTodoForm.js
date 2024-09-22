import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTodo } from '../../../store/features/todos/todoSlice';

export default function AddTodoForm() {
	const [todo, setTodo] = useState('');
	const [error, setError] = useState('');
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!todo.trim().length) {
			setError('Please add new task');
			return;
		}
		dispatch(createTodo({ title: todo }));
		setTodo('');
		setError('');
	};

	return (
		<form method='POST' className='mb-3' onSubmit={handleSubmit}>
			<div className='input-group'>
				<input
					type='text'
					className='form-control'
					placeholder='Add new task'
					value={todo}
					onChange={(e) => setTodo(e.target.value)}
					onKeyUp={(e) =>
						todo.trim().length || e.key === 'Enter'
							? setError('')
							: setError('Please add new task')
					}
				/>
				<button className='btn btn-primary' type='submit'>
					Add
				</button>
			</div>
			{error && <small className='text-danger d-block mt-1'>{error}</small>}
		</form>
	);
}
