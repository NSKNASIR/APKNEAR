
import PropTypes from 'prop-types'
import Compose from '../components/Compose'
function Button({onClick,children, version,type,isDisable}) {
  
  return (
    <button onClick={onClick} type={type} disabled={isDisable} className={`btn btn-${version}`}>
        {children}
    </button>
  )
}
 
Button.defaultProps= {
    type:'button',
    version:'secondary',
    isDisable:false
} 
Button.propTypes= {
    children: PropTypes.node.isRequired,
    type: PropTypes.string,
    version: PropTypes.string,
    isDisable:PropTypes.bool
}

export default Button
