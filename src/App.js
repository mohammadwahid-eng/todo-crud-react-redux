import Todos from './components/Todos/Todos';
import AddTodoForm from './components/Todos/TodoForm/AddTodoForm';

function App() {
	return (
		<div className='container mt-5'>
			<h1 className='text-center mb-4'>To Do List</h1>
			<div className='row justify-content-center'>
				<div className='col-md-8'>
					<div className='card'>
						<div className='card-body'>
							<AddTodoForm />
							<Todos />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
