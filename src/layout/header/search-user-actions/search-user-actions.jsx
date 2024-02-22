import './search-user-actions.css';
import Search from './search/search';
import UserActions from './search/user-actions/user-actions';

function SearchUserActions() {
    const styles = {
        display: "flex",
        gap: "26px",
    }

    return (
        <div style={styles} className="search-user-actions">
            <Search />
            <UserActions />
        </div>
    )
}

export default SearchUserActions;