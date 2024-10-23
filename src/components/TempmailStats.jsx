import PropTypes from 'prop-types'

function TempmailStats({emailData}) {
  
  return (
    <div className="feedback-stats">
      <h4>{emailData.length} Emails</h4>
      <h4>Spam 0</h4>
    </div>
  )
}
TempmailStats.propTypes={
  emailData: PropTypes.array.isRequired
}

export default TempmailStats
