import PropTypes from 'prop-types';

function Link(props) {
    return (
        <a className={props.className} href={props.href}>{props.linkText || props.children}</a>
    )
}

Link.propTypes = {
    className: PropTypes.string,
    href: PropTypes.string,
    linkText: PropTypes.string,
    children: PropTypes.node,
};

export default Link;