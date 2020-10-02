import React from 'react'
import './InfoBar.css'

import closeIcon from './../../Icon/close.png'
import onlineIcon from './../../Icon/online.png'

const InfoBar = ({room}) => {
  return  <div className="infoBar">
            <div className="leftInnerContainer">
                <img className="onlineIcon" alt='online' src={onlineIcon} />
                <h3>{room}</h3>
            </div>
            <div className="rightInnerContainer">
                <a href="/meetup"><img alt='close' src={closeIcon} /></a>
            </div>
        </div>
}

export default InfoBar