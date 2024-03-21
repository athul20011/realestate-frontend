import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import CreateListing from './pages/CreateListing';
import ListingDetails from "./pages/ListingDetails";
import WishList from './pages/WishList';
import PropertyList from "./pages/PropertyList";
import ReservationList from "./pages/ReservationList";
import CategoryPage from "./pages/CategoryPage";
import Searchpage from './pages/Searchpage';
import About from './components/About';
import TripList from './pages/TripList';
import Payment from './components/Payment';
import Contact from './components/Contact';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/create-listing" element={<CreateListing />} />
          <Route path="/About" element={<About />} />
          <Route path="/properties/:listingId" element={<ListingDetails />} />
          <Route path="/properties/category/:category" element={<CategoryPage />} />
          <Route path="/properties/search/:search" element={<Searchpage />} />
          {/* <Route path="/:userId/payment" element={<Payment />} /> */}

          <Route path="/:userId/trips" element={<TripList />} />
          <Route path="/:userId/wishList" element={<WishList />} />
          <Route path="/:userId/properties" element={<PropertyList />} />
          <Route path="/:userId/reservations" element={<ReservationList />} />
          <Route path="/contact" element={<Contact />} />




      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
