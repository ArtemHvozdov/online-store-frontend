import PropTypes from 'prop-types';

function Link(props) {
    return (
        <a className={props.className} href={props.href}>{props.linkText}</a>
    )
}

Link.propTypes = {
    className: PropTypes.string,
    href: PropTypes.string,
    linkText: PropTypes.string,
};

export default Link;