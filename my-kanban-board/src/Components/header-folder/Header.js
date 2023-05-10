import react, { useState } from "react";
import './header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';
import UserMenu from "./UserMenu";

const Header = () => {

    const [isClicked, setIsClicked] = useState(false)

    const handleClick = () => {
        setIsClicked(!isClicked)
    }

    return (
        <header>
            <nav className="header__navigation">
                <h1 className="header__navigation__logo">Awesome Kanban Board</h1>
                <div onClick={handleClick} className="header__navigation__user-menu-container">
                    <FontAwesomeIcon className="header__navigation__user-menu__icon" icon={faUser} />
                    {isClicked ? 
                        <FontAwesomeIcon className="header__navigation__user-menu__arrow" icon={faSortUp} /> :
                        <FontAwesomeIcon className="header__navigation__user-menu__arrow" icon={faSortDown} />
                    }
                </div>
                {isClicked ? <UserMenu /> : null}
            </nav>
        </header>
    )
}

export default Header
