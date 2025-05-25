import React from 'react'
import AnounceBar from '../component/AnounceBar'
import Nav from '../component/Nav'
import ProductSort from '../component/ProductSort'
import ProductList from '../component/ProductList'
import Mycart from '../component/Mycart'
import OrderSummary from '../component/orderSummary'
import Footer from '../component/Footer'

const Root = () => {
  return (
      <>
      
      <AnounceBar></AnounceBar>

      <div classNameName="py-5 px-5">
        <Nav></Nav>
       
  <main className="container mx-auto px-4 md:px-8 py-8">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      
      <div className="lg:col-span-2">
       <ProductSort></ProductSort>

       
        <div className="product-grid grid-cols-3">

          <ProductList></ProductList>
          
          
        </div>
      </div>

      
      <div className="lg:col-span-1">
        <div className="bg-white rounded-lg p-6 border border-gray-200">
         

          <Mycart></Mycart>

         
          <OrderSummary></OrderSummary>
         
        </div>
         
      </div>
    </div>
  </main>
  <Footer></Footer>
      </div>
     
    </>
  )
}

export default Root