import React from 'react'
import Emoji from 'react-emoji'

import './MessageComponent.css'

const MessageComponent = ({msg: {user, text}, name}) => {
    let isCurrentUser = false
    const username = name.trim().toLowerCase()
    if(user === username)
        isCurrentUser = true

    return (
        isCurrentUser 
        ? (<div className="messageContainer justifyEnd">
                <p className="sentText pr-10">{username}</p>
                <div className="messageBox backgroundBlue">
                    <p className="messageText colorWhite">{Emoji.emojify(text)}</p>
                </div>
            </div>
        ) : 
          (<div className="messageContainer justifyStart">
            <div className="messageBox backgroundLight">
            <p className="messageText colorDark">{Emoji.emojify(text)}</p>
            </div>
            <p className="sentText pl-10 ">{user}</p>
          </div>)
    )
}
export default MessageComponent