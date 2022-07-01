import React, {useState, useEffect} from 'react'
import MediaCard from './Card'
import Grid from '@mui/material/Grid';
import axios from 'axios'

function Grids() {

  const [carList, setCarList] = useState([])

const fetchAsyncCars =async () =>
    {
      const response = await axios.get('https://us-central1-car-deal-9915c.cloudfunctions.net/app/api/all')
      setCarList(response.data)
    }

    console.log(carList)
    useEffect(() => {
      fetchAsyncCars();
    }, [])
    
  
  return (
    <div>
  <Grid container spacing={2}>
    {carList.map(car => <MediaCard key={car.email} cusName={car.name} carBrand={car.carBrand} carModel={car.carModel} carRegisteredState={car.carRegisteredState} kilometersDriven={car.kilometersDriven} year={car.year} price={car.bid} url={car.imageUrl} email={car.email} dealerBid={car.dealersBid}/>)}
    </Grid>
    </div>
    
  )
}

export default Grids