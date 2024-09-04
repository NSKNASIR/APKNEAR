import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Card from "../shared/Card";
import Compose from "./Compose";
import Button from "../shared/Button";
import EmailList from "./data/EmailList"; 
import { FaPlus } from "react-icons/fa";

function TempmailForm() {
  const [compose, setCompose] = useState(false);
  const [message, setMessage] = useState("");
  const [emailList, setEmailList] = useState(EmailList[1].emails);
  const [counter, setCounter] = useState(EmailList[0].counter);
  const [emailListItem, setEmailListItem] = useState("");


  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("10 minute por ei code run hochhe...");

      setEmailList((prevList) =>
        prevList.filter((email) => !email.deleteTime || email.deleteTime > Date.now())
      );
    }, 600000); 

    return () => clearInterval(intervalId); 
  }, []);

  useEffect(() => {
    let currentCounter = counter;
  
    while (currentCounter < emailList.length && emailList[currentCounter]?.use) {
      currentCounter++;
    }
    if (currentCounter < emailList.length) {
      setEmailListItem(emailList[currentCounter].email);
      setCounter(currentCounter);
    } else {
      setEmailListItem("");
    }
  }, [emailList, counter]);

  // Delete and change email
  const handleDeleteAndChangeEmail = () => {

    const newList = emailList.filter((_, idx) => idx !== counter);
    setEmailList(newList);
    const newCounter = Math.min(counter, newList.length - 1);
    setCounter(newCounter);

   
    if (newCounter < newList.length) {
      setEmailListItem(newList[newCounter].email);
    } else {
      setEmailListItem(""); 
    }

    createEmailAddress();
  };

  const handleCompose = () => {
    setCompose(true);
  };

  const handleComposeDelete = () => {
    setCompose(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(emailListItem);
    setMessage("Email address copied!");
    setTimeout(() => setMessage(""), 2000); 
  };

  const handleEmailChange = (e) => {
    setEmailListItem(e.target.value);
  };

  const createEmailAddress = () => {
    const newEmail = {
      id: emailList.length,
      email: `${Math.random().toString(36).substring(2, 10)}@bookcaliforniatour.com`,
      use: false,
      deleteTime: Date.now() + 10 * 60 * 1000 
    };
    setEmailList((prevList) => [...prevList, newEmail]);
  };

  return (
    <>
      <Card reverse>
        <form>
          <h2>Your Temporary Email Address is Ready</h2>
          <div className="input-group card">
            <input
              onChange={handleEmailChange}
              type="text"
              placeholder="Your temporary email..."
              value={emailListItem}
            />
          </div>
          <div id="copychange">
            <Button
              onClick={handleCopy}
              className="submit"
              disabled={!emailListItem}
            >
              Copy
            </Button>
            <Button onClick={handleDeleteAndChangeEmail} className="submit">
              Change
            </Button>
            <Button onClick={handleDeleteAndChangeEmail} className="submit">
              Delete
            </Button>
            <Button onClick={handleCompose} className="submit">
              <FaPlus size={20} color="white" />
              Compose
            </Button>
          </div>
          {message && <div className="message">{message}</div>}
        </form>
      </Card>

      <AnimatePresence>
        {compose && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <Compose
              clicked="handleCompose"
              handleDelete={handleComposeDelete}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default TempmailForm;
