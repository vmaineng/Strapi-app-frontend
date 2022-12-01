import React from 'react'
import { Link } from 'react-router-dom'
import { useQuery, gql} from '@apollo/client'

const CATEGORIES = gql`
query GetCategory{
  categories{
    name,
    id
  }
}`

function SiteHeader() {
  const { loading, error, data } = useQuery(CATEGORIES)
  
  if (loading) return <p>Loading categories...</p>
  if (error) return <p>Error fetching categories</p>

  return (
    <div>
        <Link to ="/"><h1>Mai's Reviews</h1></Link>
        <nav className="categories">
          <span>
            Filter categories by category:  </span>
            {data.categories.map(category => (
              <Link key={category.id} to={`/category/${category.id}`}>
                {category.name}
              </Link>
))}
         
        </nav>
    </div>
  )
}

export default SiteHeader