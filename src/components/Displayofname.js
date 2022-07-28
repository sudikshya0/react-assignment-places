import React from 'react'
import './destination.css';

const Display = ({name,date,image}) => {
    return(
        <div className="info">
            <div>{<img urc={image} className="picture"/>}</div>
            <div className="address">{name}</div>
            <div className="date">{date}</div>
        </div>
    )
}
export default Display