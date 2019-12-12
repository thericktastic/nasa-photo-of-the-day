// The purpose of this card is to get

import React from "react";


const PhotoCard = props => {
    console.log(`PhotoCard: props: `, props)
    return (
        <div className="photoCard">
            <img className="image" src={props.src} alt="NASA pic of the day" />
            <h2>Photo Title: {props.title}</h2>
            <h3>Date Posted: {props.date}</h3>
            <p>Photo Description: {props.explanation}</p>
        </div>
    )
}

export default PhotoCard;