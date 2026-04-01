import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import { NotFound } from "./pages/404";
import { ToDoListPage } from "./pages/ToDoListPage";
import { ViewList } from "./pages/ViewList";
import { ViewListItem } from "./pages/ViewListItem";
import { Dashboard } from "./pages/Dashboard";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";
import { useSelector } from "react-redux";
import { RootState } from "./store";

const NotFoundWrapper = () => {
    const theme = useSelector((state: RootState) => state.themeList.theme)

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <NotFound />
        </ThemeProvider>
    )
}

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <NotFoundWrapper />,
        children: [
            { path: '/', element: <ToDoListPage /> },
            { path: '/dashboard', element: <Dashboard /> },
            { path: '/list', element: <ViewList />, },
            { path: '/list/:id', element: <ViewListItem /> }
        ]
    },
    {
        path: '*',
        element: <NotFoundWrapper />
    }
], { basename: '/ToDoList/' })