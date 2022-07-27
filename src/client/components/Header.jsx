import "../../styles/header.css"

function Header() {
    return (
        <div className="header-container-wrapper">
            <div className="header-container">
                <div className="navBar-left">
                    <div className="nav-link">Profile</div>
                    <div className="nav-link">Quizzes</div>
                    <div className="nav-link">Challenges</div>
                    <div className="nav-link">Logout</div>
                </div>
                <div className="navBar-right"></div>
            </div>
        </div>
    )
}

export default Header;