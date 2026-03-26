import { Link } from "react-router-dom"

export const NotFound = () => {
    return (
        <div className="not-found">
            <div className="not-found__container">
                <h1 className="not-found__title">404</h1>
                <p className="not-found__text">Страница не найдена</p>
                <Link to="/" className="not-found__link">На главную</Link>
            </div>
        </div>
    )
}