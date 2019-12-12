import React from "react";

const PhotoDate = props => {
  console.log(`PhotoDate: props: `, props);
  return (<h3>Date Posted: {props.date}</h3>);
};

export default PhotoDate;
