
import Home from './component/Home';  
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Services from './services/Services';
import './index.css';  
import Navbar from './component/Navbar';
import Blog from './blog/Blog';
import Footer from './footer/Footer';
import Order from './order/Order';
import { OrderProvider } from "./order/OrderContext"; 

function App() {  
  return (  
    <div className="App">  
        <OrderProvider>
      <Router>
        <Navbar/>
          <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/services" element={<Services/>} />
          <Route path='/blog'element={<Blog/>}/>
          <Route path="/order" element={<Order />} />  
          <Route path="/order/:id" element={<Order />} />  
          </Routes>
          <Footer/>
        </Router>
        </OrderProvider>
    </div>  
  );  
}  

export default App;