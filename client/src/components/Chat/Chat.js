import React,{useState, useEffect} from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
import { Redirect } from 'react-router';

import './Chat.css'
import InfoBar from './../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';

let socket;

const Chat = ({location}) => {

    const [name, setName] = useState('')
    const [room, setRoom] = useState('')
    const [isRedirect, setRedirect] = useState(false)
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])
    // const ENDPOINT = 'localhost:5000'
    const ENDPOINT = 'https://dhaval-meetup.herokuapp.com/'


    useEffect(() => {
        socket = io(ENDPOINT, (error) => 
        {
            if(error)
                alert(error)
        })
        const {name, room} = queryString.parse(location.search)
        setName(name)
        setRoom(room)     

        socket.emit('join', {name, room}, (error) => {

            if(error) {
                alert(error)
                setRedirect(true) 
            }
        })

        return () => {
            console.log('disconnect')
            socket.emit('disconnect')
            socket.off()
        }
    },[ENDPOINT, location.search])

    useEffect(() => {
        socket.on('message', (msg) => {
            setMessages([...messages, msg])
        })
    }, [messages])

    const sendMessage = (e) => {
        e.preventDefault()
        if(message)
            socket.emit('sendMessage', message)
        document.getElementById('textbox').focus()
    }
    if (isRedirect) {
        return <Redirect to="/meetup" />
    }
    return (
        <div className="outerContainer"> 
            <div className="container">
                <InfoBar room={room} />
                <Messages messages={messages} name={name} />
                <Input message={message} sendMessage={sendMessage} setMessage={setMessage}/>
            </div>
        </div>)
}
export default Chat