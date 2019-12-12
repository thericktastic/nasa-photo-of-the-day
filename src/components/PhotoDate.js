import React from "react";
import styled from "styled-components";

const APODDate = styled.p`
    font-family: 'Space Mono', monospace;
`;

const PhotoDate = props => {
  console.log(`PhotoDate: props: `, props);
  return (<APODDate>Date Posted: {props.date}</APODDate>);
};

export default PhotoDate;
