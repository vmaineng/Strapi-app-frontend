import React from 'react'
import { useParams } from 'react-router-dom'
//import useFetch from '../hooks/useFetch'
import { useQuery, gql} from '@apollo/client'

const REVIEW = gql`
query GetReview($id: ID!) {
  review(id: $id) {
    title, 
    body,
    rating,
    id
  }
}`

function ReviewDetails() {
  const { id } = useParams()
  const { loading, error, data } = useQuery(REVIEW, {
    variables: {id: id}
  })
  //const { loading, error, data } = useFetch('http://localhost:1337/api/reviews/' + id)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  console.log(data)

  return (
    <div>ReviewDetails
      <p className="rating">{data.review.rating}</p>
          <h2>{data.review.title}</h2>
          
          <small>console list</small>

          <p>{data.review.body}...</p>
          
    </div>
  )
}

export default ReviewDetails