import React from 'react';
import {useState, useEffect} from "react"
import Member from '../Member/Member';
import Cart from '../Cart/Cart'
import './Members.css'

const Members = () => {
    const [members, setmembers] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
       fetch("./members.JSON")
       .then((res) => res.json())
       .then((data)=> setmembers(data))
    }, []);

    const handleAddToCart = (member) => {
        const newCart = [...cart, member];
        setCart(newCart);
      
      };

    return (
        <div className="members-container">
            <div className="member-container">
                {
                    members.map(member => (
                        <Member
                        key={member.id}
                        members = {member}
                        handleAddToCart={handleAddToCart}
                        ></Member>
                    ))
                }
                
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Members;