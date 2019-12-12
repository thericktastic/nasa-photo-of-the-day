import React from "react";

const PhotoDesc = props => {
  console.log(`PhotoDesc: props: `, props);
  return (<p>Photo Description: {props.description}</p>);
};

export default PhotoDesc;
