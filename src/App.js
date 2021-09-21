import './App.css';
import Parent from './Components/Parent';
import HomeContainer from './Container/HomeContainer'
import HeaderContainer from './Container/HeaderContainer';
function App() {
  return (
    <div className="App">
      {/* <Parent/> */}
      <HeaderContainer/>
    <HomeContainer/>
    </div>
  );
}

export default App;
