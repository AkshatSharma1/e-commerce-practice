// import styling
import "./category-item.styles.scss";

// Making a category component
import React from "react";

//props we will receive as json data in form of an object having id, title and image
const CategoryItem = ({ category }) => {
  // destructure title and imageurl
  const { title, imageUrl } = category;

  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
