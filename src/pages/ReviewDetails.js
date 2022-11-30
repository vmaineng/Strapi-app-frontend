import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

function ReviewDetails() {
  const { id } = useParams()
  const { loading, error, data } = useFetch('http://localhost:1337/api/reviews/' + id)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  console.log(data)

  return (
    <div>ReviewDetails
      <p className="rating">{data.rating}</p>
          <h2>{data.title}</h2>
          
          <small>console list</small>

          <p>{data.body}...</p>
          
    </div>
  )
}

export default ReviewDetails