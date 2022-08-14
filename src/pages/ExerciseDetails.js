import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Box } from "@mui/material";

import { exerciseOptions, fetchData,youtubeOptions } from "../utils/fetchData";
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercise from "../components/SimilarExercise";

function ExerciseDetails() {
  const { id } = useParams();

  const [exerciseDetail, setExerciseDetail] = useState([]);
  const [exerciseVideos,setExerciseVideos] = useState([])
  useEffect(() => {
    const fetchExerciseDetailsData = async () => {
      const exerciseIdUrl =
        "https://exercisedb.p.rapidapi.com/exercises/exercise";

      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailData = await fetchData(
        `${exerciseIdUrl}/${id}`,
        exerciseOptions
      );
      setExerciseDetail(exerciseDetailData);
      
      const query = encodeURIComponent(exerciseDetailData.name);

      const exerciseVideoData = await fetchData(`${youtubeSearchUrl}/search?query=` + query,youtubeOptions)

      setExerciseVideos(exerciseVideoData)
    };

    fetchExerciseDetailsData();
  }, [id]);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail}/>
      <ExerciseVideos exerciseVideos = {exerciseVideos}/>
      <SimilarExercise />
    </Box>
  );
}

export default ExerciseDetails;
