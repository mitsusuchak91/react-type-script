import React, { useState } from 'react'
import Todo from '../models/todo';


type Props = {children: React.ReactNode};

type TodosContextObj = {
    items: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: string) => void;
}

export const TodosContext = React.createContext <TodosContextObj> ({
    items: [],
    addTodo: () => {},
    removeTodo: (id: string) => {}
});

const TodosContextProvider: React.FC <Props> = ({children}) => {

    const [todos, setTodos] = useState<Todo[]>([]); //this state will manage the arrays of Todo

    const addTodoHandler = (todoText: string) => {
        const NewTodo = new Todo(todoText);

        setTodos((prevTodos) => {
            return prevTodos.concat(NewTodo); //so we are not mutate the old state, we call new state through concat method
        });
    };

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.id !== todoId);
    });
  };

    const contextValue: TodosContextObj = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler
    };

    return <TodosContext.Provider value={contextValue}>{children}</TodosContext.Provider>;
};

export default TodosContextProvider;
