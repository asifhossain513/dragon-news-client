import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/categories')
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.log(error));
  }, [])
    return (
      <div>
        <h1>All Categories</h1>

        <div>
          {categories.map((category) => (
            <p key={category.id} className=" hover-bg-info py-2 ">
              <Link className="text-decoration-none text-secondary ps-2" to={`/category/${category.id}`}>
                {category.name}
              </Link>
            </p>
          ))}
        </div>
      </div>
    );
};

export default LeftNav;