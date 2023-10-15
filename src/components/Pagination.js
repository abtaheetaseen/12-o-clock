import React from 'react'
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Pagination = ({title}) => {

    return (
        <Wrapper>
          <NavLink to="/">Home/</NavLink>{title}
        </Wrapper>
      );
    };
    
    const Wrapper = styled.section`
      height: 10px;
      background-color: ghostwhite;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-size: 1rem;
      padding-left: 1.2rem;
      color: #ff4f4f;
      text-transform: upperCase;
    
      a {
        font-size: 1rem;
      }
    `;

export default Pagination
