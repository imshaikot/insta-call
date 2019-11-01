import React, { useRef, useCallback, useState } from "react"
import Peer from "peerjs"

import { Flexbox, Input, Button, Video } from "../components"


export default () => {

    const peer = new Peer()
    const videoEl = useRef(null)
    const friendsMediaEl = useRef(null)
    const [ connected, setConnect ] = useState(false)
    const [ friendId, setFriendId ] = useState('')
    

    const onInputUpdate = useCallback(({ target }) => {
        setFriendId(target.value)
    }, [friendId])

    const startCall = useCallback(() => {
        setConnect(true)
        const getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
        getUserMedia({video: true, audio: true}, function(stream) {
            const video = videoEl.current
            friendsMediaEl.current.srcObject = stream
            const call = peer.call(friendId, stream)
            call.on("stream", (remoteStream) => {
                video.srcObject = remoteStream
            })
        }, function(err) {
        console.log('Failed to get local stream' ,err)
        })
    }, [friendId, peer])

    const onDisconnectPress = () => {
        peer.disconnect()
    }

    peer.on('disconnected', () => {
        setConnect(false)
        window.location.reload()
    })

    return (
        <Flexbox centered={ true } >
            { connected ? ( 
            <Video
            refMain={videoEl} 
            refPeer={friendsMediaEl}
            onPressDisconnect={onDisconnectPress}
            /> ) : (
                <>
                    <h2>Connect to a friend</h2>
                    <Input placeholder="Put your friends id..." type="text" onChange={onInputUpdate} value={friendId} />
                    <Button onClick={startCall}>Connect</Button>
                </>
            )}
        </Flexbox>
    )
}