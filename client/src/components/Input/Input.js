import React from 'react'

import './Input.css'

const Input = ({message, setMessage, sendMessage}) => {

  return  <form className="form">
            <input 
                id='textbox'
                className="input"
                type="text"
                placeholder="Enter a message ..."
                value={message}
                onChange={e => setMessage(e.target.value)}
                onKeyPress = {e => { if(e.key === 'Enter') 
                                        {
                                            setMessage('')
                                            return sendMessage(e)
                                        } else 
                                            return null
                                     }} />
            <button className="sendButton" onClick={e => {setMessage(''); sendMessage(e)}}>Send</button>
        </form>
}
export default Input

