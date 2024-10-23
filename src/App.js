import Header from "./components/Header";
import EmailInboxList from "./components/EmailInboxList";
import EmailAddressData from "./components/data/EmailAddressData";
import TempmailStats from "./components/TempmailStats";
import TempmailForm from "./components/TempmailForm";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Routes instead of Route
import About from './pages/About';
import AboutIconLink from "./components/AboutIconLink";

function App() {
  const [emailData, setEmailData] = useState(EmailAddressData);

  const deleteEmailInbox = (id) => {
    setEmailData(emailData.filter((item) => item.id !== id));
  };

  return (
    <Router>
      <Header />
      <div className="container">
        <Routes> 
          <Route 
            path="/" 
            element={
              <>
                <TempmailForm />
                <hr />
                <div className="header-container">
                  <h4 className="header-title-inbox">Inbox:</h4>
                </div>
                <TempmailStats emailData={emailData} />
                <EmailInboxList emailData={emailData} handleDelete={deleteEmailInbox} />
              </>
            } 
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <AboutIconLink />
      </div>
    </Router>
  );
}

export default App;
