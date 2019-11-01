import React from "react"
import styled from "styled-components"

const getSizeFont = ({  size }) => {
    switch (size) {
        case 'sm': 
        return '12px'
        case 'md':
            return '15px'
        default:
            return '20px'
    }
}

const getWidth = ({  size }) => {
    switch (size) {
        case 'sm': 
        return '100px'
        case 'md':
            return '125px'
        default:
            return '40%'
    }
}
const getHeight = ({  size }) => {
    switch (size) {
        case 'sm': 
        return '30px'
        case 'md':
            return '45px'
        default:
            return '60px'
    }
}

const Button = styled.button`
    border: 1px solid #eee;
    background-color: transparent;
    font-size: ${getSizeFont};
    width: ${ getWidth };
    height: ${ getHeight };
    outline: none;
    margin: 10px;
    cursor: pointer;
    transition: background-color 250ms;
    &:hover {
        background-color: rgba(0, 0, 0, .1);
    }
`

export default ({ onClick, size, children }) => (
    <Button onClick={onClick} size={size} >
        {children}
    </Button>
)