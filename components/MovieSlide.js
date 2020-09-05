import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';
import makePhotoUrl from '../utils/makePhotoUrl';
import Layout from '../constants/Layout';
import MoviePoster from './MoviePoster';
import { TINT_COLOR } from '../constants/Colors';
import MovieRating from "./MovieRating"

const Container = styled.View`
    flex: 1;
    position: relative;
`;

const BgImage = styled.Image`
    width: ${Layout.width};
    height: ${Layout.height / 3};
    opacity: 0.3;
    position: absolute;
`;

const PosterBox = styled.View`
    flex : 1;
    flex-direction: row;
    align-items: center;
    padding-horizontal: 30px;
    justify-content: space-between;
`

const Description = styled.View`
    width: 60%;
    align-items : flex-start;
`

const Title = styled.Text`
    color: ${TINT_COLOR};
    font-size: 14px;
    font-weight: 600;
`

const Overview = styled.Text`
    color: ${TINT_COLOR};
    font-size: 12px;
`
const VoteContainer = styled.View`
    margin: 10px 0px;
`

const ButtonContent = styled.TouchableOpacity`
    background-color : #e74c3c;
    border-radius: 5px;
    padding: 3px;
    margin-top: 10px
`

const ButtonText = styled.Text`
    color: ${TINT_COLOR};
    font-size : 12px;
`

const MovieSlide = ({ id, posterPhoto, backgroundPhoto, title, voteAvg, overview }) => {
    return (
        <Container>
            <BgImage 
                source={{ uri: makePhotoUrl(backgroundPhoto) }} 
            />
            <PosterBox>
                <MoviePoster posterPath={posterPhoto} />
                <Description>
                    {title ? 
                    (<Title>{title}</Title>) : null }
                    {voteAvg ? 
                    (<VoteContainer>
                        <MovieRating votes={voteAvg} inSlide={true} />
                    </VoteContainer>) : null }
                    {overview ?
                    (<Overview>{overview.length > 120 ?
                        `${overview.substring(0,120)}...` : overview}
                    </Overview>) : null }
                    <ButtonContent>
                        <ButtonText>Go Detetail</ButtonText>
                    </ButtonContent>
                </Description>
            </PosterBox>
        </Container>
    )
}

MovieSlide.propTypes = {
    // id: PropTypes.string.isRequired,
    // posterPhoto: PropTypes.string.isRequired, 
    // backgroundPhoto: PropTypes.string.isRequired, 
    // title: PropTypes.string.isRequired, 
    // voteAvg: PropTypes.number.isRequired, 
    // overview: PropTypes.string.isRequired
}

export default MovieSlide;