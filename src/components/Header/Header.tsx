import { useDispatch } from 'react-redux'
import { toggleThemeAction } from '../../features/ThemeList'
import { HeaderButton, HeaderContainer, HeaderHeader, HeaderLink,  } from './Header.styled'

export const Header = () => {
    const dispatch = useDispatch()

    return (
        <HeaderHeader>
            <HeaderContainer>
                <HeaderLink to="/">ToDo</HeaderLink>
                <HeaderLink to="/list" >List</HeaderLink>
                <HeaderButton onClick={() => dispatch(toggleThemeAction())}/>
            </HeaderContainer>
        </HeaderHeader>
    )
}