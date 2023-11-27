import './App.css';
import {useDispatch} from 'react-redux'
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';

function App() {
  const dispatch= useDispatch();
  return (
    <div >
      <Navbar/>
      <hr />
      <Dashboard/>
    </div>
  );
}

export default App;
