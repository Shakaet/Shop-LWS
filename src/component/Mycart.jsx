import React, { useCallback, useContext } from 'react'
import { AuthContext } from '../App'
import CartDetails from './CartDetails'

const Mycart = () => {

  let {mycart}=useContext(AuthContext)
  return (
    <div>

         <h2 className="text-2xl font-bold mb-6">YOUR CART {mycart.length}</h2>

         
          {
            mycart.map((item)=><CartDetails item={item}></CartDetails>)
          }

          
         





    </div>
  )
}

export default Mycart