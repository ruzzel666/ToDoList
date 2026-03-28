import { useSelector } from "react-redux"
import { ListItem } from "../components/ListItem/ListItem"
import { ToDo } from "../models/todo-item"
import { RootState } from "../store"
import { ListWrapper, ListGrid, EmptyState } from "./ViewList.styled"

export const ViewList = () => {
    const todoList = useSelector((state: RootState) => state.todoList.todos)

    return (
        <ListWrapper>
            {todoList.length > 0 ? (
                <ListGrid>
                    {todoList.map((todo: ToDo) => (
                        <ListItem todo={todo} key={todo.id} />
                    ))}
                </ListGrid>
            ) : (
                <EmptyState>
                    <h2>Список задач пуст</h2>
                    <p>Добавьте первую задачу на главной странице</p>
                </EmptyState>
            )}
        </ListWrapper>
    )
}