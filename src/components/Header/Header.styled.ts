import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderHeader = styled.header`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 50px;
    background-color: #4682b4;
    display: flex;
    align-items: center;
`

export const HeaderContainer = styled.div`
    max-width: 97%;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`

export const HeaderLink = styled(NavLink)`
    text-decoration: none;
    padding: 10px;
    color: #fff;
    
      &.active {
        color: #ffffff33;
    }

    &:hover {
        color: #ffd700;
    }
`

export const HeaderButton = styled.button`
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: none;
    cursor: pointer;

    background: linear-gradient(135deg, #ff7f50, #ff4500);
    color: white;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;

    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-50%) scale(1.1);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25);
    }

    &:active {
        transform: translateY(-50%) scale(0.95);
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
    }
`








