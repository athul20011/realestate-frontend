import React from 'react'
import { categories } from "../data";
import { Link } from "react-router-dom";
import "../styles/Categories.scss"

function Categories() {
  return (
    <div className="categories">
      <h2> Top Categories of <span style={{color:"red"}} >your Expectations</span></h2>
      <p className=''>
        Explore our wide range of vacation rentals that cater to all types of
        travelers. Immerse yourself in the local culture, enjoy the comforts of
        home, and create unforgettable memories in your dream destination.
      </p>
      <div className="categories_list">
        {categories?.slice(1, 7).map((category, index) => (
          <Link to={`/properties/category/${category.label}`}>
            <div className="category" key={index}>
              <img src={category.img} alt={category.label} />
              <div className="overlay"></div>
              <div className="category_text">
                <p>{category.label}</p>
              </div>
            </div>
            <div>
            </div>
          </Link>
          
        ))}
      </div>
    </div>
  )
}

export default Categories