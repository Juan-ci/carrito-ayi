import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ContadorCarrito from './ContadorCarrito';

const Product = ({id, name, description, image, stock, price}) => {
  return (
    <div>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Cantidad disponible: {stock}
        </Typography>
      </CardContent>
      <CardActions>
        <ContadorCarrito key={id} stock={stock}/>
      </CardActions>
    </Card>
    </div>
  )
}

export default Product