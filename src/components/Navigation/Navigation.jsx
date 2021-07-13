import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import useWindowDimensions from '../../middlewares/windowViewport'

const LinkList = styled.ul`
width: 20%;
font-size: 18px;
line-height: 1.8;
    li a {
        color: black;

        &:hover {
            color: blue;
            text-decoration: underline;
        }
    }
`

export function Navigation() {
    const {width} = useWindowDimensions()

    return (
        <>
        <LinkList hidden={width < 1024 ? "hidden" : ""}>
            <li>
                <Link to="/">Temas</Link>
            </li>
            <li>
                <Link to="/">Bíblia completa</Link>
            </li>
            <li>
                <Link to="/">Velho Testamento</Link>
            </li>
            <li>
                <Link to="/">Novo Testamento</Link>
            </li>
            <li>
                <Link to="/">Versículos Favoritos</Link>
            </li>
        </LinkList>
        </>
    )
}

