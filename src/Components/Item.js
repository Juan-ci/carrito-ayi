import React from "react";

import PropTypes from "prop-types";

import CounterStock from "./CounterStock";

const Item = ({ title, price, pictureUrl, description, stock }) => {
  return (
    <div className="item box">
      <div className="item-header">
        <img src={pictureUrl} alt="" className="item-image" />
      </div>
      <div className="item-details">
        <span className="item-price">${price}</span>
        <span className="item-title">{title}</span>
        <span className="item-description">{description}</span>
      </div>
      <CounterStock stock={stock} />
    </div>
  );
};

//Uso de PropTypes
Item.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  pictureUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  stock: PropTypes.number.isRequired,
};

export default Item;
