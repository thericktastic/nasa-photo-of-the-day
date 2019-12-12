import React from "react";

const Photo = props => {
  console.log(`Photo: props: `, props);
  return (<img className="image" src={props.url} alt="NASA pic of the day" />);
};

export default Photo;
