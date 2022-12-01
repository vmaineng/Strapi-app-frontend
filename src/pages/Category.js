import React from 'react'
import { useQuery, gql} from '@apollo/client'
import { Link, useParams } from 'react-router-dom'

const CATEGORY = gql`
query GetCategory($id: ID!) {
  category(id: $id) {
    name,
    id,
    reviews {
      title,
      body,
      rating,
      id,
      categories {
        name,
        id
      }
    }
  }
}`

function Category() {
  const { id } = useParams()
  const { loading, error, data } = useQuery(CATEGORY, {
    variables: {id: id}
  });

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

   console.log(data)

  return (
    <div>
      <h2>{data.category.name}</h2>
      {data.category.reviews.map(review => (
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

export default Category