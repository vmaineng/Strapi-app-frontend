import './App.css';
import SiteHeader from './components/SiteHeader';
import Homepage from './pages/Homepage';
import ReviewDetails from './pages/ReviewDetails';
import Category from './pages/Category';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
     <SiteHeader />
      
     <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/details/:id" element={<ReviewDetails />} />
        <Route path="/category/:id" element={<Category />} />
      </Routes>

    </div>
  );
}

export default App;
