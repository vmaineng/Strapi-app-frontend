 import { useEffect, useState } from 'react'
 //import Homepage from '../pages/Homepage';

 const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
  
// useEffect(() => {
//   fetch('http://localhost:1337/api/reviews')
//   .then((r) => r.json())
//   .then(data => setData(data))
// }, []);

// <Homepage />


    useEffect(() => {
      const fetchData = async () => {
        setLoading(true)
        
        try {
          const res = await fetch(url)
          const json = await res.json()
  
          setData(json);
          setLoading(false)
        } catch (error) {
          setError(error)
          setLoading(false)
        }
      }
  
      fetchData();
    }, [url])
  
return { loading, error, data }
    //return { data }
   }

 export default useFetch