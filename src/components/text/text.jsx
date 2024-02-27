import PropTypes from 'prop-types';

function Text(props) {
    return <span className={props.className} style={props.style}>{props.text}</span>
}

Text.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string,
    style: PropTypes.object,
}

export default Text;
