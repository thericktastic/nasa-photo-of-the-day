import React, { useState, useEffect } from "react";
import axios from "axios";
import Photo from "./Photo"
import PhotoTitle from "./PhotoTitle";
import PhotoDate from "./PhotoDate";
import PhotoDesc from "./PhotoDesc";
import styled from "styled-components";


const APODCard = styled.div`
    max-width: 1080px;
    margin: 0 auto;
    border: 2px solid #D9D9D9;
    background: #F2F2F2;
`;


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

    <APODCard>
    <Photo url={photo.hdurl} />
    <PhotoTitle title={photo.title} />
    <PhotoDate date={photo.date} />
    <PhotoDesc description={photo.explanation} />
    </APODCard>
);

}