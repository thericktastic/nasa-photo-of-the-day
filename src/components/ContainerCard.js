import React, { useState, useEffect } from "react";
import axios from "axios";
import Photo from "./Photo"
import PhotoCard from "./PhotoCard";
import PhotoTitle from "./PhotoTitle";
import PhotoDate from "./PhotoDate";
import PhotoDesc from "./PhotoDesc";



export default function ContainerCard () {

const [photo, setPhoto] = useState([]);

useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=ietbMUrbmQZsTwOPejf1okcsyd98SN08yynF6Vlw")
    .then(response => {
        console.log(`Axios.get.then: `, response.data);
        setPhoto(response.data);
    })
    .catch(error => {
        console.log(`You failed! Here's why: `, error);
    });

}, []);

// return (

//         <div className="photo_container">
//         <PhotoCard
//         title = {photo.title}
//         date = {photo.date}
//         src = {photo.url}
//         explanation = {photo.explanation}
//         />
//         </div>
// );

return (

    <div className="photo_container">
    <Photo url={photo.url} />
    <PhotoTitle title={photo.title} />
    <PhotoDate date={photo.date} />
    <PhotoDesc description={photo.explanation} />
    </div>
);

}