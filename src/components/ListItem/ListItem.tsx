import { ToDo } from "../../models/todo-item"
import { ListItemLink } from "./ListItem.styled"

export const ListItem = ({ todo }: {todo: ToDo}) => {
    return (
        <ListItemLink
            href={`/list/${todo.id}`}
            target="_blank"
            rel="noreferrer"
            isDone={todo.isDone}
        >
        {todo.text}
        </ListItemLink>
    )
}