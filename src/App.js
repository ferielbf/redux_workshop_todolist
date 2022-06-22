import './App.css';
import MainPage from './components/MainPage';
import NavBar from './components/NavBar';
import Tasks from './components/Tasks';

function App() {


  return (
    <div className="App">
      <NavBar/>
     <MainPage/>
     <Tasks/>
    </div>
  );
}

export default App;
