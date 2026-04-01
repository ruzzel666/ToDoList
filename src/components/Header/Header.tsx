import { useLocation, Link } from 'react-router-dom'
import { HeaderWrapper, HeaderContainer, HeaderLink, ToggleButton, ToggleControl } from './Header.styled'
import { useDispatch, useSelector } from 'react-redux'
import { toggleThemeAction } from '../../feature/themeList'
import { RootState } from '../../store'

export const Header = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    const theme = useSelector((state: RootState) => state.themeList.theme)

    return (
        <HeaderWrapper>
            <HeaderContainer>
                <HeaderLink as={Link} to="/" $active={location.pathname === '/'}>ToDo</HeaderLink>
                <HeaderLink as={Link} to="/dashboard" $active={location.pathname === '/dashboard'}>Dashboard</HeaderLink>
                <HeaderLink as={Link} to="/list" $active={location.pathname === '/list'}>List</HeaderLink>
                <ToggleButton>
                    <ToggleControl onClick={() => dispatch(toggleThemeAction())} $themeName={theme.name} />
                </ToggleButton>
            </HeaderContainer>
        </HeaderWrapper>
    )
}