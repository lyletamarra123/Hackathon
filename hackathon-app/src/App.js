import NavigationBar from './navigation/NavigationBar';
import Routers from './routers/Routers';
import './app.css';

function App() {
  return (
    <div className='dashboard'>
      <div className="navbar">
        <NavigationBar />
      </div>
      <div class='content'>
        <Routers />
      </div>
    </div>
  );
}

export default App;
