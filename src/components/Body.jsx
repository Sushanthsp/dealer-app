import React from 'react'
import ResponsiveAppBar from './Navbar'
import Grids from './Grid'
import Sign from './Sign'
import {auth} from '../config/fireBaseInit'
import { useAuthState } from 'react-firebase-hooks/auth';

function Body() {
  const [authState] = useAuthState(auth);

 console.log(authState)
  return (
    <>
    {authState ?  <div> 
      <ResponsiveAppBar/>
      <Grids/> 
      </div > :
      <Sign/>
      }
    </> 
  )
}

export default Body