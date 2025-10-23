import { useDispatch, useSelector } from "react-redux";
import { ToDo } from "../models/todo-item"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RootState } from "../store";
import { createAction, deleteAction, updateAction } from "../features/todoList";
import { ToDoList } from "../components/ToDoList/ToDoList";
import { Form } from "../components/Form/Form";

export const ToDoListPage = () => {
    const todoList = useSelector((state: RootState) => state.todoList.todos)
    const dispatch = useDispatch()

    const createNewToDo = (text: string) => {
        dispatch(createAction(text))    
        toast.success("Задача добавлена!");
    }

    const updateToDo = (toDoItem: ToDo) => {
        dispatch(updateAction(toDoItem))
        toast.info("Задача обновлена!");
    }

    const deleteToDo = (toDoItem: ToDo) => {
        dispatch(deleteAction(toDoItem))
        toast.error("Задача удалена!");
    }

    return (
        <>
            <ToastContainer position="bottom-right" autoClose={3000} />
            <Form createNewToDo={createNewToDo} />
            <ToDoList todos={todoList} updateToDo={updateToDo} deleteToDo={deleteToDo} />
        </>
    )
}