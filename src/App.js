import './App.css';
import Home from './twitter/components/home/Home';
import MenuBar from './twitter/MenuBar';
import SearchBar from './twitter/SearchBar';
function App() {
  return (
      <div className='container'>
        <div className='wrapper-all'>
        <MenuBar/>
        <Home/>
        <SearchBar/>
        </div>
       </div>
  );
}

export default App;
