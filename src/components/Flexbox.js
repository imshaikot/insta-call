import styled from "styled-components"

export default styled.div`
    display: flex;
    padding: 10px;
    ${({ centered }) => {
        if (centered) {
            return `
                justify-content: center;
                align-items: center;
                flex-direction: column;
                height: 100vh;
            `
        }
    }}
`