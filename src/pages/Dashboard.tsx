import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import {
    DashboardWrapper,
    DashboardTitle,
    StatsGrid,
    StatCard,
    StatCardIcon,
    StatCardValue,
    StatCardLabel,
    ChartsGrid,
    ChartCard,
    ChartTitle,
    ChartWrapper,
} from './Dashboard.styled'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    LineChart,
    Line,
} from 'recharts'

export const Dashboard = () => {
    const todos = useSelector((state: RootState) => state.todoList.todos)
    const theme = useSelector((state: RootState) => state.themeList.theme)
    const isDark = theme.name === 'dark'

    // Статистика
    const totalTasks = todos.length
    const completedTasks = todos.filter(t => t.isDone).length
    const overdueTasks = todos.filter(t => t.dueDate && new Date(t.dueDate) < new Date() && !t.isDone).length
    const pendingTasks = totalTasks - completedTasks

    // Прогресс выполнения
    const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0

    // Данные для графика по дням недели
    const getWeekData = () => {
        const days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
        const today = new Date()
        const dayOfWeek = today.getDay() || 7
        const mondayOffset = dayOfWeek - 1

        return days.map((day, index) => {
            const dayDate = new Date(today)
            dayDate.setDate(today.getDate() - mondayOffset + index)
            dayDate.setHours(0, 0, 0, 0)

            const nextDay = new Date(dayDate)
            nextDay.setDate(nextDay.getDate() + 1)

            const completed = todos.filter(todo => {
                if (!todo.isDone || !todo.dueDate) return false
                const todoDate = new Date(todo.dueDate)
                todoDate.setHours(0, 0, 0, 0)
                return todoDate.getTime() === dayDate.getTime()
            }).length

            return {
                day,
                completed,
                date: dayDate.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' }),
            }
        })
    }

    // Данные для графика по месяцам
    const getMonthData = () => {
        const months = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек']
        const currentMonth = new Date().getMonth()

        return months.slice(0, currentMonth + 1).map((month, index) => {
            const monthDate = new Date(new Date().getFullYear(), index, 1)
            const nextMonth = new Date(new Date().getFullYear(), index + 1, 0)

            const completed = todos.filter(todo => {
                if (!todo.isDone || !todo.dueDate) return false
                const todoDate = new Date(todo.dueDate)
                return todoDate.getMonth() === index && todoDate.getFullYear() === new Date().getFullYear()
            }).length

            return { month, completed }
        })
    }

    // Данные для круговой диаграммы
    const pieData = [
        { name: 'Выполнено', value: completedTasks, color: '#27ae60' },
        { name: 'В процессе', value: pendingTasks - overdueTasks, color: '#f39c12' },
        { name: 'Просрочено', value: overdueTasks, color: '#e74c3c' },
    ].filter(d => d.value > 0)

    const weekData = getWeekData()
    const monthData = getMonthData()

    const chartColors = {
        text: isDark ? '#ecf0f1' : '#2c3e50',
        grid: isDark ? '#34495e' : '#ecf0f1',
        bar: isDark ? '#3498db' : '#2980b9',
    }

    return (
        <DashboardWrapper>
            <DashboardTitle>Дашборд продуктивности</DashboardTitle>

            <StatsGrid>
                <StatCard>
                    <StatCardIcon $color="#3498db">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                        </svg>
                    </StatCardIcon>
                    <StatCardValue>{totalTasks}</StatCardValue>
                    <StatCardLabel>Всего задач</StatCardLabel>
                </StatCard>

                <StatCard>
                    <StatCardIcon $color="#27ae60">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                    </StatCardIcon>
                    <StatCardValue>{completedTasks}</StatCardValue>
                    <StatCardLabel>Выполнено</StatCardLabel>
                </StatCard>

                <StatCard>
                    <StatCardIcon $color="#e74c3c">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                        </svg>
                    </StatCardIcon>
                    <StatCardValue>{overdueTasks}</StatCardValue>
                    <StatCardLabel>Просрочено</StatCardLabel>
                </StatCard>

                <StatCard>
                    <StatCardIcon $color="#f39c12">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                        </svg>
                    </StatCardIcon>
                    <StatCardValue>{completionRate}%</StatCardValue>
                    <StatCardLabel>Продуктивность</StatCardLabel>
                </StatCard>
            </StatsGrid>

            <ChartsGrid>
                <ChartCard>
                    <ChartTitle>Активность по дням (эта неделя)</ChartTitle>
                    <ChartWrapper>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={weekData}>
                                <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} />
                                <XAxis dataKey="day" stroke={chartColors.text} />
                                <YAxis stroke={chartColors.text} />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: isDark ? '#2c3e50' : '#fff',
                                        border: 'none',
                                        borderRadius: '8px',
                                        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                                    }}
                                    labelStyle={{ color: chartColors.text }}
                                />
                                <Bar dataKey="completed" fill={chartColors.bar} radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </ChartWrapper>
                </ChartCard>

                <ChartCard>
                    <ChartTitle>Активность по месяцам ({new Date().getFullYear()})</ChartTitle>
                    <ChartWrapper>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={monthData}>
                                <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} />
                                <XAxis dataKey="month" stroke={chartColors.text} />
                                <YAxis stroke={chartColors.text} />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: isDark ? '#2c3e50' : '#fff',
                                        border: 'none',
                                        borderRadius: '8px',
                                        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                                    }}
                                    labelStyle={{ color: chartColors.text }}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="completed"
                                    stroke="#27ae60"
                                    strokeWidth={3}
                                    dot={{ fill: '#27ae60', r: 5 }}
                                    activeDot={{ r: 7 }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </ChartWrapper>
                </ChartCard>

                <ChartCard>
                    <ChartTitle>Соотношение задач</ChartTitle>
                    <ChartWrapper>
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    data={pieData}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                                    outerRadius={100}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {pieData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: isDark ? '#2c3e50' : '#fff',
                                        border: 'none',
                                        borderRadius: '8px',
                                        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                                    }}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    </ChartWrapper>
                </ChartCard>
            </ChartsGrid>
        </DashboardWrapper>
    )
}
