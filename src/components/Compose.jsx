import { FaTimes } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import Button from "../shared/Button";

function Compose({ clicked, handleDelete }) {
  const [text, setText] = useState("");
  const [receiverEmail, setReceiverEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [senderEmail, setSenderEmail] = useState(""); 
  const textareaRef = useRef(null);

  const adjustHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.max(
        textareaRef.current.scrollHeight,
        150
      )}px`;
    }
  };

  const handleInput = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    adjustHeight();
  }, [text]);

  const handleSubmit = (e)=>{
    e.preventDefault()
    // if(text.trim().length < 30 && receiverEmail < 20 && subject <20){
      const sendEmail={
        to:receiverEmail,
        subject:subject,
        body:text
      }
      console.log(sendEmail)
    // }else{
    //   console.log("you can not send")
    // }
  }

  if (clicked === "handleCompose") {
    return (
      <>
        <hr />
        <form onSubmit={handleSubmit}>
          <div className="composeCard">
            <div className="header-container">
              <h4 className="header-title">Compose:</h4>
            </div>
            <div className="text-display">

              <button onClick={handleDelete} className="close">
                <FaTimes color="purple" size={20} />
              </button>

              <div className="text-display">
                <h4>To: </h4>
                <input
                  type="email"
                  placeholder="Enter receiver's email"
                  className="input-field"
                  value={receiverEmail}
                  onChange={(e)=>setReceiverEmail(e.target.value)}
                />

                <h4>Subject: </h4>
                <input
                  type="text"
                  placeholder="Enter subject"
                  className="input-field"
                  value={subject}
                  onChange={(e)=>setSubject(e.target.value)}
                />

                <h4>Body:</h4>
                <textarea
                  placeholder="Enter your message"
                  value={text}
                  onChange={(e) => {
                    handleInput(e);
                    adjustHeight();
                  }}
                  ref={textareaRef}
                  className="textarea-field"
                ></textarea>
              </div>

              <div className="containerBtn">
                <Button type={'submit'} className="submit">Send</Button>
              </div>
            </div>
          </div>
        </form>
      </>
    );
  } else {
    return <></>;
  }
}

export default Compose;
