import React,{useState} from 'react'
import {Box} from '@mui/material'
import HeroBanner from '../components/HeroBanner'
import SearchExercise from '../components/SearchExercise'
import Exercies from "../components/Exercises"

function Home() {
  
const [bodyPart, setBodyPart] = useState('all')
const [exercises,setExercises] = useState([])

  return (
    <div>
      <HeroBanner/>
      <SearchExercise setExercises={setExercises} bodyPart={bodyPart} setBodyPart = {setBodyPart}/>
      <Exercies setExercises={setExercises} exercises={exercises} bodyPart={bodyPart}/>
      
    </div>
  )
}

export default Home