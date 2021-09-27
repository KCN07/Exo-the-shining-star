import React from 'react';
import './Member.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Member = (props) => {
    const {name, img, instruments, age, height, netWorth, donation} = props.members;
    // console.log(props);
    return (
        

<div className="card">
<img  className="member-img" src={img} alt="Avatar"/>
<div className="container">
  <h2><b>Name: {name}</b></h2> 
  <h3>Instruments: {instruments}</h3>
  <p>Age: {age} years</p>
  <p>Height: {height} m</p>
  <p>Net worth: ${netWorth} Million</p>
  <p>Donation: ${donation} billion</p>
  <button
          onClick={() => props.handleAddToCart(props.members)}
          className="btn-regular"
        >
          <FontAwesomeIcon icon={faShoppingCart} /> add to cart
  </button>
</div>
</div>
    );
};

export default Member;