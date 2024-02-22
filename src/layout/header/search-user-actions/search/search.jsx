import Input from "../../../../components/input/input";
import searchIcon from "./../../../../../public/icons/search-icon.svg"
import './search.css'

function Search() {
    return (
        <div className="search">
            <Input 
                type="text"
                placeholder="Пошук"
                className="search__input"
            />
            <button>
                <img src={searchIcon} alt="" />
            </button>
        </div>
    )
}

export default Search