import React from "react";
import styled from "styled-components";
import Product from "./Product";

const GridView = ({ products }) => {
  return (
    <Wrapper>
      <div className="container grid grid-three-column">
        {products.map((curElem) => {
          return <Product key={curElem.id} {...curElem} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5rem 0;

  .container {
    max-width: 120rem;
  }

  .grid {
    gap: 3rem;
  }

  figure {
    width: auto;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    
    img {
      max-width: 100%;
      height: 13rem;
      transition: all 0.2s linear;
    }
  }

  .caption{
    padding-left: 1rem;
    color: #9b9b9b;
  }
  

  .card {
    background-color: ghostwhite;
    border: 1px solid black;

    .card-data {
      padding: 0 1rem;
    }

    .card-data-flex {
      margin: 2rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .card-data--price {
      color: black};
    }

    h3 {
      color: black;
      text-transform: capitalize;
    }

    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        background-color: rgb(98 84 243);
      }

      &:hover a {
        color: #fff;
      }
      a {
        color: rgb(98 84 243);
        font-size: 1.4rem;
      }
    }
  }
`;

export default GridView;
