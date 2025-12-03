import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import RegisterPage from "./Components/RegisterPage";
import PageNotFound from "./Components/PageNotFound";
import LoginPage from "./Components/LoginPage";
import ContactsApp from "./Components/ContactsApp";
import NotAuthorized from "./Components/NotAuthorized";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<PageNotFound /> } />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="not-authorized" element={<NotAuthorized />} />
          <Route path="/contacts" element={<ContactsApp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
