import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../Api/endPoints'
import ProductCard from '../../components/Porduct/ProductCard'
import classes from './Results.module.css'

function Results() {
  const [results, setResults] = useState([])
  const {categoryName} = useParams()
  useEffect(() => {
    
    axios.get(`${productUrl}/products/category/${categoryName}`)
  .then((res) => {
    console.log(categoryName);
    
    console.log(res);
    setResults(res.data)
    console.log(res.data);
    
  }).catch((err) => {
    console.log(err); 
  })
  }, []);
  


  return (
    <Layout>
      <section>
      <h1 style={{padding: '30px'}}>Results</h1>
      <p style={{padding: '30px'}}>Category / {categoryName}</p>
      <hr />
      <div className={classes.products_container}>
        {results?.map((product) => {
         return  <ProductCard key={product.id} Product={product} />
        })}
      </div>
      </section>


    </Layout>
  )
}

export default Results