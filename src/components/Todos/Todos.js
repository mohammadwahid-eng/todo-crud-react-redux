import React from 'react';
import Todo from './Todo/Todo';
import { useSelector } from 'react-redux';

export default function Todos() {
	const { todos } = useSelector((state) => state.todosR);
	return (
		<ul className='list-group' id='todo-list'>
			{todos && todos.length > 0
				? todos.map((item) => <Todo key={item.id} todo={item} />)
				: 'No todos'}
		</ul>
	);
}
