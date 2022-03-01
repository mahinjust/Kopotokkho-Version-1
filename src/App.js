import Topbar from './components/navigation/Topbar';
import BottomBar from './components/navigation/BottomBar';
import MobileProductCart from './Pages/MobileProductCart';
import ProductCart from './Pages/ProductCart';
import Shop from './Pages/Shop';
import MobileShop from './Pages/MobileShop';
import MobileTopBar from './components/mobile/navigation/TopBar';
import MobileBottomBar from './components/mobile/navigation/BottomBar';

function App() {
  return (
    <div className="App">
      <Topbar/>
      {/* <MobileTopBar/> */}
      <Shop/>                         
      <BottomBar/>
      {/* <MobileBottomBar/> */}
    </div>
  );
}

export default App;
