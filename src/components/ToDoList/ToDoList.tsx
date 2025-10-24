import { ToDo } from '../../models/todo-item'
import { ToDoListItem } from './ToDoListItem/ToDoListItem'
import { ToDoListBlock, ToDoListComplate, ToDoListFailed } from './ToDoLits.styled'

export const ToDoList = (props: {todos: ToDo[], updateToDo: Function, deleteToDo: Function}) => {

    const checkedList = () => {
        return props.todos
            .filter((item) => !item.isDone)
            .map((item, idx) => {
                return (
                    <ToDoListItem 
                    toDoItem={item} 
                    key={idx} 
                    updateToDo={props.updateToDo} 
                    deleteToDo={props.deleteToDo} 
                    />
                )
            })
    }

    const uncheckedList = () => {
        return props.todos
            .filter((item) => item.isDone)
            .map((item, idx) => {
                return (
                    <ToDoListItem 
                        toDoItem={item} 
                        key={idx} 
                        updateToDo={props.updateToDo}
                        deleteToDo={props.deleteToDo}
                    />
                )
            })
    }

    return (
        <ToDoListBlock>
            <ToDoListFailed>{checkedList()}</ToDoListFailed>
            <ToDoListComplate>{uncheckedList()}</ToDoListComplate>
        </ToDoListBlock>
    )
}