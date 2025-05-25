import { createContext, useState } from "react"
import Root from "./assets/Root"
import AnounceBar from "./component/AnounceBar"
import Footer from "./component/Footer"
import Mycart from "./component/Mycart"
import Nav from "./component/Nav"
import OrderSummary from "./component/orderSummary"
import ProductList from "./component/ProductList"
import ProductSort from "./component/ProductSort"
import { getAllMovies } from "./data"




export let AuthContext= createContext(null)


function App() {

   let data=getAllMovies()


   let [productData,setproductData]=useState(data)
  let [mycart,setmycart]=useState([])

  let [count,setCount]=useState(1)

  let [total,setTotal]=useState(0)
  

  let handleCart = (data, id) => {
  if (data.btn === "rem") return;

  

  const updatedProducts = productData.map((product) => {
    if (product.id === id) {
      const updated = { ...product, btn: "rem", left: product.left - 1 };
      console.log("Updated product:", updated);
      setmycart([...mycart, updated]);
      setTotal(updated.price) // ✅ Log the updated object here
      return updated;
    }
    return product;
  });

  console.log(updatedProducts)
  
  
  setproductData(updatedProducts);
};






  let handleRemoveCart=(data,id)=>{

     if(data.btn==="add"){
      return
    }

    
    let filteredData=mycart.filter((product)=>product.id !==id)

    setmycart(filteredData)



    let updatedData=productData.map((product)=>{
      if(product.id=== id){

        let updated={...product,btn:"add",left:product.left+1}
        return updated
      }
      return product

    })
    setproductData(updatedData)

   





  }




  let handleAdd=(item)=>{
    

    if(item.left>count){
          // setTotal(item.price+total)
     setCount((prevCount) => {

      let newCount=prevCount+1
    
    
    // Update total using the new count
    setTotal(item.price * newCount);
    
    return newCount
  });


    }

    
    

    let updatedData=productData.map((product)=>{

      if(product.id===item.id && product.left>0){
        return {...product,left:product.left-1}
         
      }
      return product
      
    })
    setproductData(updatedData)

  

    
    
    
  }
   let handleminus = (item) => {
  if (count > 1) {
    // Decrement count and update total together
    setCount((prevCount) => {
      const newCount = prevCount - 1;
      setTotal(item.price * newCount);
      return newCount;
    });

    // Update product data (add 1 back to stock)
    const updatedData = productData.map((product) => {
      if (product.id === item.id) {
        return { ...product, left: product.left + 1 };
      }
      return product;
    });

    setproductData(updatedData);
  }
};

 

  console.log(mycart)

  let val={
    handleCart,
    productData,
    handleRemoveCart,
    mycart,
    handleAdd,
    handleminus,
    count,
    total
  }




  


  return (

    <AuthContext.Provider value={val}>

       <Root></Root>

    </AuthContext.Provider>
   
  )
}

export default App
