import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import MoviePoster from "./MoviePoster";
import MovieRating from "./MovieRating";
import { TINT_COLOR } from "../constants/Colors";

const Container = styled.View`
    align-items: center;
    margin-right: 20px;
`;

const Title = styled.Text`
  color: ${TINT_COLOR};
  font-size: ${props => props.big ? "14px" : "12px"};
  margin-vertical: 5px;
`;

const HContainer = styled.View`
  margin-bottom: 20;
  flex-direction: row;
`

const Column = styled.View`
  margin-left : 20;

`
const Overview = styled.Text`
    color: ${TINT_COLOR};
    font-size: 12px;
    margin-vertical: 10px;
`

const MovieItem = ({ id, posterPhoto, title, voteAvg, overview, horizontal = false }) => (
  horizontal ? (
    <HContainer>
      <MoviePoster posterPath={posterPhoto} />
      <Column>
        <Title big={true}>{title.length > 15 ? `${title.substring(0, 12)}...` : title}</Title>
        <MovieRating votes={voteAvg} />
        {overview ?
          (<Overview>{overview.length > 150 ?
            `${overview.substring(0, 147)}...` : overview}
          </Overview>) : null}
      </Column>
    </HContainer>) :
    (<Container>
      <MoviePoster posterPath={posterPhoto} />
      <Title>{title.length > 15 ? `${title.substring(0, 12)}...` : title}</Title>
      <MovieRating votes={voteAvg} />
    </Container>)
);

MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  posterPhoto: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  voteAvg: PropTypes.number.isRequired
};

export default MovieItem;