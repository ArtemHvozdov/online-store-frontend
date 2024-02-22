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
    type: PropTypes.strting,
    placeholder: PropTypes.strting,
    value: PropTypes.strting,
    className: PropTypes.strting,
}

export default Input;