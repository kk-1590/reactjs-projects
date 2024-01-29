import { useState } from "react";
import useFetch from ".";
import "./style.css";

export default function UseFetchHookTest() {
  
    const [products,setProducts] = useState([]);
    const { data, error, pending } = useFetch(
      "https://dummyjson.com/products",
      {}
    );

  function handleClick() {    
    console.log(data, error, pending);
    setProducts(data);
  }


  return (
    <div>
      <div style={{display:'flex',justifyContent:'flex-start',alignItems:'center',gap:'2rem'}}>
        <h1>Use fetch hook</h1>
        <button type="button" onClick={handleClick}>
          Get Data
        </button>
      </div>

      {products &&
        products.products &&
        products.products.map((item) => {
          return <h3 key={item.id}>{item.title}</h3>;
        })}
    </div>
  );
}
