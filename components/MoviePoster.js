import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import makePhotoUrl from '../utils/makePhotoUrl'

const Poster = styled.Image`
    width: 110px;
    height: 160px;
    border-radius: 2.5px;
`

const MoviePoster = ({ posterPath }) => {
    return (
        <Poster
            source = {{ uri: makePhotoUrl(posterPath)}}
        />
    )
}

MoviePoster.propTypes = {
    posterPath: PropTypes.string.isRequired
}

export default MoviePoster;