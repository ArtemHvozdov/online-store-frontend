import PropTypes from 'prop-types';

function Input(props) {
    return (
        <input 
            type={props.type} 
            placeholder={props.placeholder}
            value={props.value}
            className={props.className}    
        />
    )
}

Input.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    className: PropTypes.string,
}

export default Input;