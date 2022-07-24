import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';



import PropTypes from "prop-types";

import CounterStock from "../CounterStock/CounterStock";

const Item = ({ title, price, pictureUrl, description, stock }) => {
  return (
    <Card sx={{ maxWidth: 345, height: 450 }}>
      <CardMedia sx={{ objectFit: 'contain' }}
        component="img"
        height="200"
        image={pictureUrl}
        alt="Product"
      />
      <CardContent>
      <Typography gutterBottom variant="h5" component="div">
          ${price}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
  
        <Typography sx={{ height: 50 }} variant="body2" color="text.secondary">
          {description}
        </Typography>
        <CounterStock stock={stock} />
      </CardContent>
    </Card>
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
