// The purpose of this card is to get

import React from "react";


const PhotoCard = props => {
    console.log(props)

    return (
        <div className="photoCard">
            <img className="image" src={props.src} alt="NASA pic of the day" />
            <h2>Photo Title: {props.title}</h2>
            <h3>Photo: {props.date}</h3>
            <p>Photo Description: {props.description}</p>
        </div>
    )
}

export default PhotoCard;