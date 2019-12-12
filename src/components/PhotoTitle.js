import React from "react";
// import ContainerCard from "./ContainerCard";

const PhotoTitle = props => {
    console.log(`PhotoTitle: props: `, props)
    return (
        <>
            <h2>Photo Title: {props.title}</h2>
        </>
    )
}



export default PhotoTitle;