import React from 'react'

export default function Card(props) {
    return (
        <div className="card-container">
            <img src={`../images/${props.item.img}`} className="card-image" />

        <div className='info'>
            <div className='location'><h3> <span className='pin'>📌</span> {props.item.location} <span><a href={`${props.item.maps}`}>View on Google Maps</a></span> </h3></div>
            <h1 className='title'>{props.item.title}</h1>
            <p className='date'>{props.item.date}</p>
            <p className='description'>{props.item.description}</p>
        </div>
        </div>
    )
}