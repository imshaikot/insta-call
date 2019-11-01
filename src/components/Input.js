import styled from "styled-components"

export default styled.input`
    outline: none;
    height: 80px;
    width: 40%;
    padding-left: 30px;
    padding-right: 30px;
    font-size: 30px;
    color: gray;
    border: 1px solid #eee;
    background-color: rgba(0, 0, 0, 0.03);
    transition: background-color 250ms;
    &:focus {
        background-color: transparent;
    }
`