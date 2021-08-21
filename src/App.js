import Nav from './Components/Nav.js'
import Foot from './Components/foot.js';
import './App.css'
import Search from './Components/SearchEngine.js';
import Random from './Components/Random.js';

function App() {
  return ( 
    <div className = "App" >
    <Nav />

      <br />
      <br/>
      <br/>
      <br />
      <Search />
      <br />
      <br />
      <br/>
      <Random/>
      <br/>

    <Foot/>
    </div>
  );
}

export default App;
