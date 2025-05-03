import "./App.css";
import Card from "./components/Card";

function App() {
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
