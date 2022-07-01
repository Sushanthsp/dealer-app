import React,{useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import img from '../../src/assets/bmw.png'
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import axios from 'axios'

export default function MediaCard({cusName, carBrand, carModel, carRegisteredState, kilometersDriven, year,price,url,email, dealerBid}) {

  const [dealersBid, setDealersBid] = useState(dealerBid)

  const postBid = async (e) =>
  {
    e.preventDefault();
    const response = await axios.put('https://us-central1-car-deal-9915c.cloudfunctions.net/app/api/update',{email, dealersBid})
    console.log(response)
  }

  return (
    <Grid item xs={6} >
     <Card sx={{ minWidth: 380 , m: 5}}>
      <CardMedia
        component="img"
        height="250"
        image={img}
        alt="green iguana"
      />
      <CardContent>
        <Typography variant="h4" color="text.primary">
          Customer name : {cusName} 
        </Typography>
        <Typography variant="h5" color="text.primary">
          Car Brand : {carBrand}
        </Typography>
        <Typography variant="h5" color="text.primary">
          Car Model : {carModel}
        </Typography>
        <Typography variant="h5" color="text.primary">
          Car Registered State: {carRegisteredState}
        </Typography>
        <Typography variant="h5" color="text.primary">
        Kilometers Driven : {kilometersDriven}
        </Typography>
        <Typography variant="h5" color="text.primary">
        year : {year}
        </Typography>
        <Typography variant="h5" color="text.primary">
        Price : {price}
        </Typography>
        <Typography variant="h5" color="text.primary">
       Your Bid Price : {dealersBid}
        </Typography>
      </CardContent>
      <CardActions>
        <form action="">
        <TextField id="standard-basic" label="Your Bid price" variant="standard" type="number" onChange={e=>setDealersBid(e.target.value)}/>
        <Button size="small" variant='contained' onClick={postBid}>Bid your price</Button>
        </form>
       
      </CardActions>
    </Card>
  </Grid>
  
  );
}
