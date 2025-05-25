import React, { useContext } from 'react'
import { getImageURL } from '../utils/ImageLink'
import Rating from './Rating'
import { AuthContext } from '../App'

const ProductCard = ({product}) => {

    let { handleCart,handleRemoveCart}=useContext(AuthContext)
  return (
    <div>





        <div className="bg-gray-100 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <img src={getImageURL(product.cover)} alt="Gradient Graphic T-shirt"
                className="h-full w-auto object-cover"></img>
            </div>
            <div className="p-4">
              <h3 className="font-medium">{product.title} </h3> 
              <div className="flex items-center justify-between">
                {/* <div className="flex items-center my-1">
                  <div className="flex text-yellow-400">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span className="text-gray-300">★</span>
                  </div>
                  <span className="text-xs text-gray-500 ml-1">4/5</span>
                </div> */}
                <Rating value={product.rating}></Rating>
                <span className="text-xs text-gray-700">({product.left} pcs left)</span>
              </div>
              <p className="font-bold">${product.price} </p> 

              <div>
                {
                product.btn ==="add" ?  <button onClick={()=>handleCart(product,product.id)}  className="w-full mt-2 bg-yellow-600 py-1 text-gray-100 rounded flex items-center justify-center">Add to Cart</button> :
                <button onClick={()=>handleRemoveCart(product,product.id)}  className="w-full mt-2 bg-red-800 py-1 text-gray-100 rounded flex items-center justify-center">Remove from Cart</button> 
              }
              </div>
              {/* <button className="w-full mt-2 bg-red-800 py-1 text-gray-100 rounded flex items-center justify-center">Remove from Cart</button> */}
               

            </div>
          </div>









    </div>
  )
}

export default ProductCard