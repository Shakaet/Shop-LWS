import React, { useContext } from 'react'

import ProductCard from './ProductCard'
import { getAllMovies } from '../data'
import { AuthContext } from '../App'

const ProductList = () => {


    let {search}=useContext(AuthContext)


    let productData= search()


  




  
  return (
    <div>

      <div className="grid grid-cols-3 gap-5">

        {
          productData.map((product)=><ProductCard product={product}></ProductCard>)
        }



             


          </div>

        
    </div>
  )
}

export default ProductList