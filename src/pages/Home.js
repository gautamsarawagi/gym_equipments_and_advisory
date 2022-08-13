import React from 'react'
import {Box} from '@mui/material'
import HeroBanner from '../components/HeroBanner'
import SearchExercise from '../components/SearchExercise'
import Exercies from "../components/Exercises"

function Home() {
  return (
    <div>
      <HeroBanner/>
      <SearchExercise/>
      <Exercies/>
      
    </div>
  )
}

export default Home