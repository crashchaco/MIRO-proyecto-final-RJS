import React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import accounting from 'accounting';
import {useStateValue} from '../../helper/StateProvider'
import { actionTypes } from '../../helper/Reducer';
import './Productos.css';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const Producto = ({producto : {id,name,price,image,description,rating,productType}}) => {
 
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [{basket},dispatch]= useStateValue();
 
  const addToBasket = () => {
      dispatch({
          type: actionTypes.ADD_TO_BASKET,
          item: {
              id,
              name,
              productType,
              image,
              price,
              rating,
              description,
          }
      })
  }
  
  return (
<Card className="cardCss" sx={{ maxWidth: 345 }}>
      <CardHeader
        // avatar={
        //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
        //     R
        //   </Avatar>
        // }
        action={
       <Typography
        variant='h6'
        color='textSecondary'>
        {accounting.formatMoney(price)}
       </Typography>
        }
        title={name}
        subheader="en Stock"
      />
      <CardMedia
        component="img"
        height="290"
        image={image}
        alt="RTX 3090"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         {productType}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Agregar al carrito" onClick={addToBasket}>
          <AddShoppingCartIcon fontSize="large"/>
        </IconButton>
        {Array(rating)
        .fill()
        .map((_,i) => (
          <p>&#x1F47D;</p>
        ))}
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          
          <Typography paragraph>
            {description}
          </Typography>
         
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default Producto
