import React from "react"
import styled from "styled-components"
import { Button } from ".";

const VideoBig = styled.video`
    background-color: #000;
    width: 100%;
    height: 100%;
`
const VideoInner = styled.video`
    position: absolute;
    background-color: #000;
    height: 144px;
    width: 180px;
    bottom: 50px;
    right: 50px;
    border: 1px solid #fff;
`
const DisconnectButtonContainer = styled.div`
    background-color: red;
    color: #fff;
    position: absolute;
    bottom: 20px;
    left: 250px;
    margin: 0;
    padding: 0;
`

const Container = styled.div`
    position: relative;
    height: 480px;
    width: 640px;
`

export default ({ 
    refMain, 
    refPeer, 
    onLoadedMetadataMain, 
    onLoadedMetadataPeer,
    onPressDisconnect
}) => {
    return (
        <Container>
            <VideoBig ref={refMain} onLoadedMetadata={onLoadedMetadataMain} autoPlay />
            <VideoInner muted ref={refPeer} onLoadedMetadata={onLoadedMetadataPeer} autoPlay />
            <DisconnectButtonContainer>
                <Button size="sm" onClick={onPressDisconnect}>Disconnect</Button>
            </DisconnectButtonContainer>
        </Container>
    )
}