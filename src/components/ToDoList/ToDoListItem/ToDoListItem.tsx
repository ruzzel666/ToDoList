import { ToDo } from '../../../models/todo-item'
import { ToDoItem, ToDoItemControl, ToDoItemControls, ToDoItemText, ToDoItemDueDate } from './ToDoListItem.styled'

import checkIcon from '../../../assets/images/check.png'
import uncheckIcon from '../../../assets/images/uncheck.png'
import trashIcon from '../../../assets/images/trash.png'

export const ToDoListItem = (props: { toDoItem: ToDo, updateToDo: Function, deleteToDo: Function }) => {
    const isOverdue = props.toDoItem.dueDate ? new Date(props.toDoItem.dueDate) < new Date() && !props.toDoItem.isDone : false

    const formatDueDate = (dateString: string) => {
        const date = new Date(dateString)
        const now = new Date()
        const diffHours = Math.ceil((date.getTime() - now.getTime()) / (1000 * 60 * 60))

        if (diffHours < 0 && Math.abs(diffHours) < 24) {
            return `Просрочено ${Math.abs(diffHours)} ч.`
        } else {
            return date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })
        }
    }

    return (
        <ToDoItem $isOverdue={isOverdue}>
            <ToDoItemText>{props.toDoItem.text}</ToDoItemText>
            {props.toDoItem.dueDate && (
                <ToDoItemDueDate $isOverdue={isOverdue}>
                    {formatDueDate(props.toDoItem.dueDate)}
                </ToDoItemDueDate>
            )}
            <ToDoItemControls>
                <ToDoItemControl
                    $icon={trashIcon}
                    onClick={() => props.deleteToDo(props.toDoItem)}
                ></ToDoItemControl>
                <ToDoItemControl
                    $icon={props.toDoItem.isDone ? checkIcon : uncheckIcon}
                    onClick={() => props.updateToDo(props.toDoItem)}
                ></ToDoItemControl>
            </ToDoItemControls>
        </ToDoItem>
    )
}