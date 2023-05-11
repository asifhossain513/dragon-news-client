import React from 'react';
import { Link } from "react-router-dom";

const Terms = () => {
    return (
        <div className="container">
            <h1>Our terms and condition</h1>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam corrupti laudantium, cumque quam eos sapiente reprehenderit earum nam et, expedita aperiam. Quos placeat voluptatibus aut dolores ipsa sed ut. Sed?</p>
            <Link to='/register'>Go Back to Register</Link>
        </div>
    );
};

export default Terms;