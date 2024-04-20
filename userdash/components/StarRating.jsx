import React, { useState } from 'react'
import { Rating as SimpleRating } from 'react-simple-star-rating'

export function StarRating({ rating }) {
  return (
    <div className='App'>
      <SimpleRating
        // set the ratingValue prop to the ratingState value
        readonly
        initialValue={rating}
        allowHover={false}
        fillColor='yellow'
        emptyColor='lightgrey'
        size={30}
      />
    </div>
  )
}