import React from 'react'
import './destination.css';

const Display = ({name,date,image}) => {
    return(
        <div className="container">
        <div className="info">
            <img src={image} className="picture"/>
            <div className="address">{name}</div>
            <div className="date">{date}</div>
        </div>
        </div>
    )
}
export default Display