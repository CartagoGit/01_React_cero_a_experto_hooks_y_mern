import React from "react";
import { TodoListitem } from "./TodoListitem";

export const TodoList = ({ todos, handleDelete, handleToggle }) => {
	return (
		<ul className='list-group list-group-flush'>
			{todos.map((todo, i) => (
				<TodoListitem
					key={todo.id}
					todo={todo}
					handleDelete={handleDelete}
					handleToggle={handleToggle}
					index={i}
				/>
			))}
		</ul>
	);
};
