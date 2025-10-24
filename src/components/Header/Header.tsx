import { HeaderContainer, HeaderHeader, HeaderLink,  } from './Header.styled'

export const Header = () => {
    return (
        <HeaderHeader>
            <HeaderContainer>
                <HeaderLink to="/">ToDo</HeaderLink>
                <HeaderLink to="/list" >List</HeaderLink>
            </HeaderContainer>
        </HeaderHeader>
    )
}