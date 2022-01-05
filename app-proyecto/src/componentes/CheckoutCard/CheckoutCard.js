import React from 'react'
import './CheckoutCardCss.css'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import accounting from 'accounting';
import DeleteIcon from '@mui/icons-material/Delete';
import {useStateValue} from '../../helper/StateProvider';
import { actionTypes } from '../../helper/Reducer';
import { styled } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';



export const CheckoutCard = ({producto : {id,name,price,image,description,rating,productType}}) => {

  const [{basket},dispatch]= useStateValue();
  const [expanded, setExpanded] = React.useState(false);
  
  const removeItem = () => dispatch({
    type: actionTypes.REMOVE_ITEM,
    id: id,
  })

  return (
<Card sx={{ maxWidth: 345 }}>
      <CardHeader
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
      <CardActions disableSpacing className="cardActions">
        <div className="estrellas">
        {Array(rating)
        .fill()
        .map((_,i) => (
          <p>&#11088;</p>
        ))}
        </div>
        <IconButton>
      <DeleteIcon fontSize="large" onClick={removeItem}></DeleteIcon>
      </IconButton>
      </CardActions>
     
    </Card>
  );
}

export default CheckoutCard
