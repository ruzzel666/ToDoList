import { ToDo } from "../../models/todo-item"
import { CardLink, CardContent, CardTitle, CardPreview, CardFooter, CardStatus, CardArrow, CardDueDate } from "../../pages/ViewList.styled"

export const ListItem = ({ todo }: { todo: ToDo }) => {
    const previewText = todo.text.length > 100 ? todo.text.substring(0, 100) + '...' : todo.text

    const isOverdue = todo.dueDate ? new Date(todo.dueDate) < new Date() && !todo.isDone : false

    const formatDueDate = (dateString: string) => {
        const date = new Date(dateString)
        const now = new Date()
        const diffMs = date.getTime() - now.getTime()
        const diffHours = Math.ceil(diffMs / (1000 * 60 * 60))
        const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24))

        if (diffHours < 0 && Math.abs(diffHours) < 24) {
            return `Просрочено ${Math.abs(diffHours)} ч. назад`
        } else if (diffDays < 0) {
            return `Просрочено ${Math.abs(diffDays)} дн. назад`
        } else if (diffDays === 0) {
            return `Сегодня до ${date.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })}`
        } else if (diffDays === 1) {
            return `Завтра до ${date.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })}`
        } else {
            return date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })
        }
    }

    return (
        <CardLink
            $done={todo.isDone}
            $isOverdue={isOverdue}
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
                {todo.dueDate && (
                    <CardDueDate $isOverdue={isOverdue}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
                        </svg>
                        {formatDueDate(todo.dueDate)}
                    </CardDueDate>
                )}
                <CardArrow>→</CardArrow>
            </CardFooter>
        </CardLink>
    )
}