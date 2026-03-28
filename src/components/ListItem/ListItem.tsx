import { ToDo } from "../../models/todo-item"
import { CardLink, CardContent, CardTitle, CardPreview, CardFooter, CardStatus, CardArrow } from "../../pages/ViewList.styled"

export const ListItem = ({ todo }: { todo: ToDo }) => {
    const previewText = todo.text.length > 100 ? todo.text.substring(0, 100) + '...' : todo.text

    return (
        <CardLink
            $done={todo.isDone}
            href={`/app/list/${todo.id}`}
        >
            <CardContent>
                <CardTitle>{todo.text}</CardTitle>
                <CardPreview>{previewText}</CardPreview>
            </CardContent>
            <CardFooter>
                <CardStatus $done={todo.isDone}>
                    {todo.isDone ? '✓ Выполнено' : '○ В процессе'}
                </CardStatus>
                <CardArrow>→</CardArrow>
            </CardFooter>
        </CardLink>
    )
}