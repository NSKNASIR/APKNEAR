import { motion, AnimatePresence } from "framer-motion";
import EmailInboxItem from "./EmailInboxItem";
import PropTypes from "prop-types";

function EmailInboxList({ emailData, handleDelete }) {
  if (!emailData || emailData.length === 0) {
    return <p>No inbox data.</p>;
  }
  
  return (
    <div className="feedback-list">
      <AnimatePresence>
        {emailData.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }} // Optional: adding transition for smooth animation
          > 
            <EmailInboxItem
              item={item}
              handleDelete={handleDelete}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

EmailInboxList.propTypes = {
  emailData: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired, // Adding propTypes for handleDelete
};

export default EmailInboxList;
