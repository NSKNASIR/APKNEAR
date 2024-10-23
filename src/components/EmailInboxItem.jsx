import { FaTimes, FaCopy } from "react-icons/fa";
import Card from "../shared/Card";
import PropTypes from "prop-types";

function EmailInboxItem({ item, handleDelete }) {
  const handleCopy = (id) => {
    navigator.clipboard.writeText(item.body);
  };
 
  return (
    <Card>
      <div className="num-display">{item.id}</div>

        <button onClick={() => handleCopy(item.id)} className="copy">
          <FaCopy color="green" size={20} />
        </button>
        <button onClick={() => handleDelete(item.id)} className="close">
          <FaTimes color="purple" size={20} />
        </button>


      <div className="text-display">
        <h5>Receiver: {item.reciverEmail}</h5>
        <h5>Sender: {item.senderEmail}</h5>
        <h4>Subject: {item.subject}</h4>
        <p>
          <h4>Body:</h4> {item.body}
        </p>
        <hr />
      </div>
    </Card>
  );
}

EmailInboxItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default EmailInboxItem;
