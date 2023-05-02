import react from "react";
import './header.scss'

const Header = () => {
    return (
        <header>
            <nav className="header__navigation">
                <h1 className="header__navigation__logo">Awesome Kanban Board</h1>
                <div className="header__navigation__user-menu">menu</div>
            </nav>
        </header>
    )
}

export default Header
