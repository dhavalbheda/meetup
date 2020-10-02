import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'
import './Messages.css'

import MessageComponent from './MessageComponent/MessageComponent'

const Messages = ({messages, name}) => {
  return <ScrollToBottom className="messages">
            {messages.map((obj,idx) => 
                            <div key={idx}>
                                <MessageComponent msg={obj} name={name} />
                            </div>
                        )}
         </ScrollToBottom>
}
export default Messages