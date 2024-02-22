import PropTypes from 'prop-types';
import Link from "./../../../components/link/link";

function MenuItem(props) {
    return (
        <li className={props.classNameLi}>
            <Link className={props.classNameLink} href={props.href} linkText={props.menuItemText}/>
        </li>
    )
}

MenuItem.propTypes = {
    classNameLi: PropTypes.string,
    classNameLink: PropTypes.string,
    href: PropTypes.string,
    menuItemText: PropTypes.string,
};

export default MenuItem;
