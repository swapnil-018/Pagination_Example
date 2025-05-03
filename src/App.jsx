import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {

  const [products, setProducts] = useState([])

  const fetchData = async () => {
      const res = await fetch("https://dummyjson.com/products?limit=500")
      const data = await res.json()
      setProducts(data)
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
          <Card />
        </div>
      </div>
    </>
  );
}

export default App;
