import { ToDoListItem } from "./ToDoListItem/ToDoListItem"
import { ToDo } from "../../models/todo-item"
import { ToDoListContainer, ToDoListFailed, ToDoListCompleted } from "./ToDoList.styled"

export const ToDoList = (props: { todos: ToDo[], updateToDo: Function, deleteToDo: Function }) => {
    const checkedList = () => {
        return props.todos
            .filter((item) => !item.isDone)
            .map((item) => {
                return (
                    <ToDoListItem
                        toDoItem={item}
                        key={item.id}
                        updateToDo={props.updateToDo}
                        deleteToDo={props.deleteToDo}
                    />
                )
            })
    }

    const unCheckedList = () => {
        return props.todos
            .filter((item) => item.isDone)
            .map((item) => {
                return (
                    <ToDoListItem
                        toDoItem={item}
                        key={item.id}
                        updateToDo={props.updateToDo}
                        deleteToDo={props.deleteToDo}
                    />
                )
            })
    }

    return (
        <ToDoListContainer>
            <ToDoListFailed className="todo-list failed">
                {checkedList()}
            </ToDoListFailed>
            <ToDoListCompleted className="todo-list completed">
                {unCheckedList()}
            </ToDoListCompleted>
        </ToDoListContainer>
    )
}