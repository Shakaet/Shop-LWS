import React, { useContext } from 'react'
import { getImageURL } from '../utils/ImageLink'
import { AuthContext } from '../App'





const CartDetails = ({item}) => {


   let {handleAdd,handleminus,productData}= useContext(AuthContext)


   

    
  return (
    <div>

          <div className="flex items-start space-x-4 pb-4 border-b border-gray-200 mb-4">
            <div className="w-16 h-16 bg-gray-100 rounded flex-shrink-0 flex items-center justify-center">
              <img src={getImageURL(item.cover)} alt="Gradient Graphic T-shirt"
                className="h-full w-auto object-cover"></img>
            </div>
            <div className="flex-grow">
              <div className="flex justify-between">
                <h3 className="font-medium">{item.title}</h3>
                <span className="text-red-500 text-sm">×</span>
              </div>
              <p className="text-sm text-gray-500">Size: {item.size}</p>
              <p className="text-sm text-gray-500">Color: {item.color}</p>
              <div className="flex justify-between items-center mt-2">
                <p className="font-bold">${item.price}</p>
                <div className="flex items-center space-x-2">
                  <button onClick={()=>handleminus(item)} className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center">−</button>

                  <span key={item.id} className="text-sm">
                  {item.count}
                </span>

                 
                  <button onClick={()=>handleAdd(item)}  className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center">+</button>
                </div>
              </div>
            </div>
          </div>

    </div>
  )
}

export default CartDetails