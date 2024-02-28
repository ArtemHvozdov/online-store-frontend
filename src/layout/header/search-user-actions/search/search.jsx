import Input from "../../../../components/input/input";
import searchIcon from "./../../../../../public/icons/search-icon.svg"
import './search.css';
import PropTypes from 'prop-types';


function Search(props) {
    return (
        <div className="search">
            <Input 
                type="text"
                placeholder="Пошук"
                className={`search__input ${props.isFixed ? 'fixed' : ''}`}
                // className="search__input"
            />
            <button>
                <img className={`search__icon ${props.isFixed ? 'fixed' : ''}`} src={searchIcon} alt="" />
            </button>
        </div>
    )
}

Search.propTypes = {
    isFixed: PropTypes.bool
}

export default Search