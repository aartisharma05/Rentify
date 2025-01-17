import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import SellerDashboard from "./components/Seller/SellerDashboard";
import UserDashboard from "./components/User/UserDashboard";
import { LocationProvider } from "./components/LocationProvider";

const App = () => {
  return (
    <LocationProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/seller-dashboard" element={<SellerDashboard />} />
        </Routes>
      </Router>
    </LocationProvider>
  );
};

export default App;
