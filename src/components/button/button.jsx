import PropTypes from 'prop-types'

function Button(props) {
    return <button type={props.btnType} className={props.className}>{props.btnText}</button>
}

Button.propTypes = {
    btnType: PropTypes.string,
    btnText: PropTypes.string,
    className: PropTypes.string,
}

export default Button;
