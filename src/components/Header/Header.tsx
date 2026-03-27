import { useLocation, Link } from 'react-router-dom'
import { HeaderWrapper, HeaderContainer, HeaderLink } from './Header.styled'

export const Header = () => {
    const location = useLocation()

    return (
        <HeaderWrapper>
            <HeaderContainer>
                <HeaderLink as={Link} to="/" active={location.pathname === '/'}>ToDo</HeaderLink>
                <HeaderLink as={Link} to="/list" active={location.pathname === '/list'}>List</HeaderLink>
            </HeaderContainer>
        </HeaderWrapper>
    )
}