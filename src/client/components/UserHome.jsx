import "../../styles/userHome.css";

import Header from "./Header";

function UserHome() {
    return (
        <div className="page-container">
            <Header />
            <div className="profile-main-section">
                <div className="user-stats">
                    <div className="stat">
                       <h2>Total Games</h2>
                       <p>107</p>
                    </div>
                    <div className="stat">
                        <h2>Total Wins</h2>
                        <p>67</p>
                    </div>
                    <div className="stat">
                        <h2>Win Percentage</h2>
                        <p>13%</p>
                    </div>
                </div>
                <div className="user-info">
                    <div className="user-info-last-games">
                        <h3>Last 5 Games:</h3>
                        <div>
                            <p>W</p>
                            <p>L</p>
                            <p>L</p>
                            <p>W</p>
                            <p>W</p>
                        </div>
                    </div>
                    <div className="user-info-profile">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserHome;