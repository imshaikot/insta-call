import React, { useEffect, useState, useRef, useCallback } from "react"
import { Flexbox, Button, Video } from "../components"
import Peer from "peerjs"

const getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia

export default () => {
    let call
    const [ myId, setMyId ] = useState('')
    const [ ringing, setRinging ] = useState(false)
    const [ answered, setAnswer ] = useState(false)
    const audioEl = useRef(null)
    const myMediaEl = useRef(null)
    const friendMediaEl = useRef(null)

    const peer = new Peer()

    peer.on('open', (id) => {
        if (!myId) setMyId(id)
    })
    
    peer.on('call', (callRef) => {
        setRinging(true)
        audioEl.current.play()
        call = callRef
      })
    
    peer.on('disconnected', () => {
        setAnswer(false)
        setRinging(false)
        window.location.reload()
    })

    const answerCall = useCallback(() => {
        setRinging(false)
        setAnswer(true)
        getUserMedia({video: true, audio: true}, function(stream) {
        call.answer(stream)
        call.on('stream', function(remoteStream) {
            console.log(stream)
            myMediaEl.current.srcObject = remoteStream
            friendMediaEl.current.srcObject = stream
        })
        }, function(err) {
        console.log('Failed to get local stream' ,err);
        })
    }, [call])
    
    return (
        <Flexbox centered={ true }>
            { answered ? (
                <Video refMain={myMediaEl} refPeer={friendMediaEl} onPressDisconnect={peer.disconnect} />
            ) : (
                ringing ? (
                    <h1>
                        Ringing...
                        <audio ref={audioEl}>
                            <source  src="godfather_guitar.mp3" />
                        </audio>
                        <Button onClick={answerCall}>Answer</Button>
                    </h1>
                ) : (
                    <>
                        <p>Waiting for someone to call you...</p>
                        <p>Meanwhile you may share your ID with them to call you:</p>
                        <b>{myId}</b>
                    </>
                )
            )}
        </Flexbox>
    )
}