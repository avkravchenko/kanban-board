import React from "react";
import './userMenu.scss';

const UserMenu = () => {
    return (
        <div className="user-menu__list">
            <ul className="user-menu__ul">
                <li>Profile</li>
                <li>Log Out</li>
            </ul>
        </div>
    )
}

export default UserMenu;