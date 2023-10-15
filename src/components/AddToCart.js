import React, { useState } from 'react'
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import CartAmountToggle from './CartAmountToggle';
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../context/cartContext';

const AddToCart = ({product}) => {

    const {addToCart} = useCartContext();

    const {id, colors, stock} = product;

    const [color, setColor] = useState(colors[0]);
    const [amount, setAmount] = useState(1);

    const setDecrease = () => {
        amount > 1 ? setAmount(amount - 1) : setAmount(1);
    }

    const setIncrease = () => {
        amount < stock ? setAmount(amount + 1) : setAmount(stock);
    }

  return (
    <Wrapper>
      <div className="colors">
        <p>
            Colors: 
            {
                colors.map((curElem, index) => {
                    return (
                        <button key={index} style={{backgroundColor: curElem}} className={color === curElem ? 'btnStyle active' : 'btnStyle'} onClick={()=> setColor(curElem)}>
                            {color === curElem? <FaCheck className='checkStyle'/> : null}
                        </button>
                    )
                })
            }
        </p>
      </div>

      <CartAmountToggle 
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />

      <NavLink to='/cart'
          onClick={() => addToCart(id, color, amount, product)}
      >
            <button className="button" >Add To Cart</button>
      </NavLink>
    </Wrapper>
  )
};

const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: grey;
  }
  .btnStyle {
    width: 20px;
    height: 20px;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 10px;
    color: #fff;
  }

  /* we can use it as a global one too  */
  .amount-toggle {
    margin-top: 15px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      border: none;

      padding: 5px;
      border-radius: 20%;
      color: black;
      cursor: pointer;
      font-size: 1rem;
    }

    .amount-style {
      font-size: 1.3rem;
      color: #4a4a4a;
    }
  }

  .button{
    padding: 10px;
    margin-top: 15px;
    cursor: pointer;
    border-radius: 10px;
    border: 1px solid black;
    background-color: whitesmoke;
    color: black;
    transition: 0.5s;
  }

  .button:hover{
    background-color: black;
    color: whitesmoke;
  }
`;

export default AddToCart
