import './App.css';
import SiteHeader from './components/SiteHeader';
import Homepage from './pages/Homepage';
import ReviewDetails from './pages/ReviewDetails';
import Category from './pages/Category';
import { Routes, Route } from "react-router-dom";
//import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

//apollo client
// const client = new ApolloClient({
//   uri: 'http://localhost:1337/graphql',
//   cache: new InMemoryCache()
// });

function App() {
  return (
    <div className="App">
     <SiteHeader />
     {/* <ApolloProvider client={client}> */}
     <Routes>
      
        <Route exact path="/" element={<Homepage />} />
        <Route path="/details/:id" element={<ReviewDetails />} />
        <Route path="/category/:id" element={<Category />} />
      
      </Routes>
      {/* </ApolloProvider> */}
    </div>
  );
}

export default App;
