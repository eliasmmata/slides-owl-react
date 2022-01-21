import React from "react";
import { Link, useNavigate } from "react-router-dom";

import './Cart.scss';

const Cart = () => {
    const navigate = useNavigate();
    return (
        <div className="cart-container">
            <div>
                <h3>Cart Implementation</h3>
                <Link to="/home">
                    <button onClick={() => navigate(-1)} className="app-button">
                        <i class="pi pi-chevron-left" style={{ marginRight: `1rem` }}></i>
                        Volver
                    </button>
                </Link>
            </div>
        </div>

    )

}

export default Cart;