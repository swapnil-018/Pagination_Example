import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {

  const [products, setProducts] = useState([])

  const fetchData = async () => {
      const res = await fetch("https://dummyjson.com/products?limit=500")
      const data = await res.json()
      setProducts(data.products)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <div className="main-div">
        <div className="pagination">
          <span>Pagination</span>
        </div>
        <div className="card-div">
          {!products.length ? <span>Loading.....</span> : products.map((item) => {
            return <Card key={item.title} image={item.images[0]} title={item.title}/>
          })}
        </div>
      </div>
    </>
  );
}

export default App;
