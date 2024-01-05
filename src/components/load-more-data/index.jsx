import { useEffect, useState } from "react";
import "./styles.css";

const LoadMoreData = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton,setDisableButton] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function fetchProducts() {
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const data = await response.json();
      console.log(data);
      console.log(data.products);
      setLoading(false);
      setProducts([...products,...data.products]);
    }
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if(products && products.length === 100){
        setDisableButton(true);
    }
  })

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      {products.map((item) => (
        <div key={item.id} className="product">
          <img
            src={item.thumbnail}
            alt={item.title}
            style={{ height: "100%", width: "100%" }}
          />
          <h2>{item.title}</h2>
        </div>
      ))}
      <div>
        <button disabled={disableButton} onClick={() => setCount(count + 1)}>Load More</button>
      </div>
    </div>
  );
};

export default LoadMoreData;
