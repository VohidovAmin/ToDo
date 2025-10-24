import styled from "styled-components";

interface LinkProps {
    isDone: boolean;
}

export const ListItemLink = styled.a<LinkProps>`
    text-decoration: none;
    padding: 10px;

    color: ${(props) => props.isDone ? 'green' : 'red'};
`