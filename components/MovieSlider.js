import React from "react";
import PropTypes from "prop-types";
import Swiper from "react-native-swiper";
import Layout from "../constants/Layout";

const SWIPER_HEIGHT = Layout.height / 3;

// import { StyleSheet, View } from 'react-native'
// const styles = StyleSheet.create({
//     view : {
//         backgroundColor: "red",
//         height: SWIPER_HEIGHT
//     },
//     text: {}
// })

import styled from "styled-components";
import MovieSlide from "./MovieSlide";
const View = styled.View`
  height: ${SWIPER_HEIGHT};
`;

const MovieSlider = ({ movies }) => (
  movies ? 
  (
  <Swiper
    showsPagination={false}
    autoplay={true}
    style={{ height: SWIPER_HEIGHT }}
  >
    {movies.filter(movie => movie.backdrop_path !== null)
    .map(movie => (
      <View key={movie.id}>
        <MovieSlide 
          id={movie.id} 
          overview={movie.overview}
          title={movie.title}
          voteAvg={movie.vote_average}
          backgroundPhoto = {movie.backdrop_path}
          posterPhoto = {movie.poster_path}  
        />
      </View>
      )
    )}
  </Swiper>
  )
  : null

);

MovieSlider.propTypes = {
  movies: PropTypes.array
};

export default MovieSlider;