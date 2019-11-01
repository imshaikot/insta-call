import React from "react"
import styled from "styled-components"
import { Button } from "../components"

const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export default ({ toShare, toDownload }) => (
    <Container>
        <Button size="lg" onClick={toShare}>Join a call</Button>
        <Button size="lg" onClick={toDownload}>Start a call</Button>
    </Container>
)