import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {

  const [products, setProducts] = useState([])
  const [currentPage,setCurrentPage] = useState(0)

  const fetchData = async () => {
      const res = await fetch("https://dummyjson.com/products?limit=500")
      const data = await res.json()
      setProducts(data.products)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const RENDER_PAGES = 10
  const  noOfProducts = Math.ceil(products.length / RENDER_PAGES)
  const start = currentPage * RENDER_PAGES
  const end = start + RENDER_PAGES

  console.log(noOfProducts);
  console.log(start);
  console.log(end);
 
  const handleChangePage = (n) => {
    setCurrentPage(n)
  }



  return (
    <>
      <div className="main-div">
        <div className="pagination">
          <span>Pagination</span>
           <div className="paginationButton">
           {[...Array(noOfProducts).keys()].map((item, index) => {
              return <button key={index} onClick={()=> handleChangePage(index)}>
                {item}
              </button>
            })}
           </div>
        </div>
        <div className="card-div">
          {!products.length ? <span>Loading.....</span> : products.slice(start,end).map((item) => {
            return <Card key={item.id} image={item.images[0]} title={item.title}/>
          })}
        </div>
      </div>
    </>
  );
}

export default App;
