import Header from "./components/Header";
import EmailInboxList from "./components/EmailInboxList";
import EmailAddressData from "./components/data/EmailAddressData";
import TempmailStats from "./components/TempmailStats";
import TempmailForm from "./components/TempmailForm";
import { useState } from "react";

function App() {
  const [emailData, setEmailData] = useState(EmailAddressData);

  const deleteEmailInbox = (id) => {
    setEmailData(emailData.filter((item) => item.id !== id));
  };

  return (
    <>
      <Header />
      <div className="container">
        <TempmailForm />
        <hr />

        <div className="header-container">
          <h4 className="header-title-inbox">Inbox:</h4>
        </div>
        <TempmailStats emailData={emailData} />
        <EmailInboxList emailData={emailData} handleDelete={deleteEmailInbox} />
      </div>
    </>
  );
}

export default App;
