import PropTypes from 'prop-types';

function List(props) {
    return (
        <ul className={props.className}>
            {props.children}
        </ul>
    )
}

List.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
}

export default List;
