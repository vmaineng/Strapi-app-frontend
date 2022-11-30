import React from 'react'
import useFetch from '../hooks/useFetch'
import { Link } from 'react-router-dom'

function Homepage() {
    const { loading, error, data } = useFetch('http://localhost:1337/api/reviews')

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  console.log(data)

  return (
    <div>
      {data.map(review => (
        <p key={review.id} className="review-card">
          <p className="rating">{review.rating}</p>
          <h2>{review.title}</h2>
          
          <small>console list</small>

          <p>{review.body.substring(0, 200)}...</p>
          <Link to={`/details/${review.id}`}>Read more</Link>
        </p>
      ))}
    </div>
  )
}

export default Homepage