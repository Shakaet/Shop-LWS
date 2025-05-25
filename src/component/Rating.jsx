import React from 'react'

import star from "../assets//star.svg"

const Rating = ({value}) => {

    
  return (


    
    <div className="flex items-center my-1">
                  {[...Array(value)].map((_, i) => (
            <img key={i} src={star} width="14" height="14" alt="star" />
                    ))}
                  <span className="text-xs text-gray-500 ml-1">{value}/5</span>
                </div>
  )
}

export default Rating