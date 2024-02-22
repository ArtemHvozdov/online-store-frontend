import profileIcon from './../../../../../../public/icons/profile-icon.svg';
import favoritesIcon from './../../../../../../public/icons/favorites-icon.svg';
import cartIcon from './../../../../../../public/icons/cart-icon.svg';
import './user-actions.css'

function UserActions() {
    return (
        <div className="user__actions">
            <button className="user__actions-profile">
                <img src={profileIcon} alt="" />
            </button>
            <button className="user__actions-favorites">
                <img src={favoritesIcon} alt="" />
            </button>
            <button className="user__actions-cart">
                <img src={cartIcon} alt="" />
            </button>
        </div>
    )
}

export default UserActions;