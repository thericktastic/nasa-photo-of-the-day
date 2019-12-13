import React, { useState, useEffect } from "react";
import axios from "axios";
import Photo from "./Photo"
import PhotoTitle from "./PhotoTitle";
import PhotoDate from "./PhotoDate";
import PhotoDesc from "./PhotoDesc";
import styled from "styled-components";

const APODContainer = styled.div`
    max-width: 1080px;
    margin: 0 auto;
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

return (

    <APODContainer>
    <Photo url={photo.url} />
    <PhotoTitle title={photo.title} />
    <PhotoDate date={photo.date} />
    <PhotoDesc description={photo.explanation} />
    </APODContainer>
);

}