import React from "react";
import styled from "styled-components";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from "../context/filterContext";

const Sort = () => {
  const { filter_products, grid_view, setGridView,  sorting } =
    useFilterContext();
  return (
    <Wrapper className="sort-section">
      {/* 1st column  */}
      <div className="sorting-list--grid">
        <button
          className="active sort-btn">
          <BsFillGridFill className="icon" />
        </button>
      </div>
      {/* 2nd column  */}
      <div className="product-data">
        <p>{`${filter_products.length} Products Available`}</p>
      </div>

      {/* 3rd column  */}
      <div className="sort-selection">
        <form action="#">
          <label htmlFor="sort"></label>
          <select
            name="sort"
            id="sort"
            className="sort-selection--style"
            onClick={sorting}>
            <option value="lowest">Price(lowest)</option>
            <option value="#" disabled></option>
            <option value="highest">Price(highest)</option>
            <option value="#" disabled></option>
            <option value="a-z">Price(a-z)</option>
            <option value="#" disabled></option>
            <option value="z-a">Price(z-a)</option>
          </select>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;

    .sort-btn {
      padding: 2px 4px;
      cursor: pointer;
      border-radius: 20%;
    }

    .icon {
      font-size: 1rem;
    }
    .active {
      background-color: black;
      color: #fff;
    }
  }

  .sort-selection .sort-selection--style {
    padding: 0.5rem;
    cursor: pointer;

    .sort-select--option {
      padding: 0.5rem 0;
      cursor: pointer;
      height: 2rem;
      padding: 10px;
    }
  }

`;

export default Sort;
