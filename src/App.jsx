import { createContext, useState } from "react";
import Root from "./assets/Root";
import { getAllMovies } from "./data";

export let AuthContext = createContext(null);

function App() {
  let data = getAllMovies();

  let [productData, setproductData] = useState(
    data.map((product) => ({
      ...product,
      count: 1,
      total: 0,
    }))
  );
  const [mycart, setmycart] = useState([]);
  const [totalAmount, settotalAmount] = useState(0);
  const [discount, setdiscount] = useState(0);
  const [finalPrice, setfinalPrice] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  let search = () => {
    const filteredData = productData.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return filteredData;
  };

  let handleCart = (data, id) => {
    if (data.btn === "rem") return;

    const updatedProducts = productData.map((product) => {
      if (product.id === id) {
        const updated = {
          ...product,
          btn: "rem",
          left: product.left - 1,
          count: 1,
          total: product.price,
          fee: 15,
        };
        console.log("Updated product:", updated);
        const newTotalAmount = updated.total;
        const newDiscount = updated.total * 0.2;
        const newFinalPrice = newTotalAmount - newDiscount + updated.fee;
        setmycart([...mycart, updated]);
        settotalAmount(newTotalAmount);
        setdiscount(newDiscount);
        setfinalPrice(newFinalPrice);

        return updated;
      }
      return product;
    });

    console.log(updatedProducts);

    setproductData(updatedProducts);
  };

  let handleRemoveCart = (data, id) => {
    if (data.btn === "add") return;

    const filteredData = mycart.filter((product) => product.id !== id);

    setmycart(filteredData);

    const updatedData = productData.map((product) => {
      if (product.id === id) {
        return { ...product, btn: "add", left: product.left + 1 };
      }
      return product;
    });
    setproductData(updatedData);

    const newTotalAmount = filteredData.reduce(
      (sum, item) => sum + item.total,
      0
    );
    const newDiscount = filteredData.reduce(
      (sum, item) => sum + item.total * 0.2,
      0
    );
    const newFee = filteredData.reduce((sum, item) => sum + (item.fee || 0), 0);
    const newFinalPrice = newTotalAmount - newDiscount + newFee;

    settotalAmount(newTotalAmount);
    setdiscount(newDiscount);
    setfinalPrice(newFinalPrice);
  };

  let handleAdd = (item) => {
    const updatedData = productData.map((product) => {
      if (product.id === item.id && product.left > 0) {
        const newCount = product.count + 1;
        return {
          ...product,
          count: newCount,
          left: product.left - 1,
          total: newCount * product.price,
        };
      }
      return product;
    });

    setproductData(updatedData);

    const updatedCart = mycart.map((product) => {
      if (product.id === item.id && product.left > product.count) {
        return {
          ...product,
          count: product.count + 1,
          total: (product.count + 1) * product.price,
        };
      }
      return product;
    });

    setmycart(updatedCart);

    const newTotalAmount = updatedCart.reduce(
      (sum, product) => sum + product.price * product.count,
      0
    );
    const newDiscount = updatedCart.reduce(
      (sum, product) => sum + product.price * product.count * 0.2,
      0
    );
    const totalFees = updatedCart.reduce(
      (sum, product) => sum + (product.fee || 0),
      0
    );
    const newFinalPrice = newTotalAmount - newDiscount + totalFees;

    settotalAmount(newTotalAmount);
    setdiscount(newDiscount);
    setfinalPrice(newFinalPrice);
  };

  let handleminus = (item) => {
    const updatedData = productData.map((product) => {
      if (product.id === item.id && product.count > 1) {
        const newCount = product.count - 1;
        return {
          ...product,
          count: newCount,
          left: product.left + 1,
          total: newCount * product.price,
        };
      }
      return product;
    });

    setproductData(updatedData);

    // Update mycart: reduce count and update total
    const updatedCart = mycart.map((product) => {
      if (product.id === item.id && product.count > 1) {
        const newCount = product.count - 1;
        return {
          ...product,
          count: newCount,
          total: newCount * product.price,
        };
      }
      return product;
    });

    setmycart(updatedCart);

    const newTotalAmount = updatedCart.reduce(
      (sum, product) => sum + product.price * product.count,
      0
    );
    settotalAmount(newTotalAmount);

    const newDiscount = updatedCart.reduce(
      (sum, product) => sum + product.price * product.count * 0.2,
      0
    );
    setdiscount(newDiscount);

    const totalFees = updatedCart.reduce(
      (sum, product) => sum + (product.fee || 0),
      0
    );

    const newFinalPrice = newTotalAmount - newDiscount + totalFees;
    setfinalPrice(newFinalPrice);
  };

  console.log(mycart);

  let val = {
    handleCart,
    productData,
    handleRemoveCart,
    mycart,
    handleAdd,
    handleminus,
    totalAmount,
    settotalAmount,
    discount,
    setdiscount,
    finalPrice,
    setfinalPrice,
    search,
    searchTerm,
    setSearchTerm,
  };

  return (
    <AuthContext.Provider value={val}>
      <Root></Root>
    </AuthContext.Provider>
  );
}

export default App;
