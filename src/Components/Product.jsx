
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ContadorCarrito from './ContadorCarrito';
import IconButton from '@mui/material/IconButton';
import AddShoppingCart from '@mui/icons-material/AddShoppingCart';
import { useState} from 'react';

const Product = ({ id, name, description, image, stock, price }) => {

  const [currentStock, setCurrentStock] = useState(stock);
  

  return (

    <div className="productCards">
      <Card sx={{
        maxWidth: 345,
        ':hover': {
          transform: 'scale(1.1)',
          transition: '1s',
        },
      }}>
        <CardMedia
          component="img"
          height="180"
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
            Cantidad disponible: {currentStock}
          </Typography>
        </CardContent>
        <CardActions className="cardButtons">
          <ContadorCarrito key={id} currentStock={currentStock} setCurrentStock={setCurrentStock} originalStock ={stock}/>
          <IconButton style={{ color: 'white' }} aria-label="Agregar al carrito" id="shoppingCart">
            <AddShoppingCart />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  )
}

export default Product