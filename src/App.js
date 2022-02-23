import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Images from './Components/images';
import Cards from './Components/Cards';
import Data from './data'

function App() {
  const dataElements = Data.map(data => {
    return <Cards  
    key = {data.id}
    data={data}
    />
  })
  return (
    <div className="App">
      <Navbar/>
      <Images/>
      <section className="cards-list">
                {dataElements}
            </section>
    </div>
  );
}

export default App;
