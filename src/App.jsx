import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  let name = "swapnil"
  console.log(name)
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
 
  const handleChangePage = (n) => {
    setCurrentPage(n)
  }

  const goNext = () => {
    setCurrentPage((prev) => prev + 1)
  } 
  const goPrev = () => {
    setCurrentPage((prev) => prev - 1)
  } 

  return (
    <>
      <div className="main-div">
        <div className="pagination">
          <span>Pagination</span>
           <div className="paginationButton">
            <button onClick={goPrev}>Prev</button>
           {[...Array(noOfProducts).keys()].map((item, index) => {
              return <button className={`${index === currentPage ? "active" : null}`} key={index} onClick={()=> handleChangePage(index)}>
                {item}
              </button>
            })}
            <button onClick={goNext}>Next</button>
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
