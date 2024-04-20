import React, { useState } from 'react'
import { Rating as SimpleRating } from 'react-simple-star-rating'

export function StarRating({ rating }) {
  return (
    <div className='App'>
      <SimpleRating
        // set the ratingValue prop to the ratingState value
        readonly
        allowFraction={true}
        
        initialValue={rating}
        allowHover={false}
        fillColor='#FFD700'
        emptyColor='#f5f0eb'
        size={30}
      />
    </div>
  )
}