import React from "react";
import styled from 'styled-components';

const StyledCircle = styled.div`
    position: absolute;
    left: ${props => props.left};
    top: ${props => props.top};
    background: ${props => props.color};
    width: ${props => props.width};
    height: ${props => props.height};
    border-radius: ${props => props.border};
    filter: ${props => props.filter};
    opacity: ${props => props.opacity};
`

export const Circle = (props) => {
    return <StyledCircle {...props}/>
}