import "../../styles/userHome.css";

import image from "../../assets/images/profile-pic-test.png";

import Header from "./Header";
import Quiz from "./Quiz";

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
                        <h3>Recent Games:</h3>
                        <div className="wins-losses">
                            <div className="recent-opponent">
                                <p className="win">W</p>
                                <p>Theunis Tansie</p>
                                <img src={image} alt={"profile"} width={40} height={40}/>
                            </div>
                            <div className="recent-opponent">
                                <p className="loss">L</p>
                                <p>Adam Knoetze</p>
                                <img src={image} alt={"profile"} width={40} height={40}/>
                            </div>
                            <div className="recent-opponent">
                                <p className="loss">L</p>
                                <p>Timmy White</p>
                                <img src={image} alt={"profile"} width={40} height={40}/>
                            </div>
                            <div className="recent-opponent">
                                <p className="win">W</p>
                                <p>Hailey Reed</p>
                                <img src={image} alt={"profile"} width={40} height={40}/>
                            </div>
                            <div className="recent-opponent">
                                <p className="win">W</p>
                                <p>Dustin Dingleman</p>
                                <img src={image} alt={"profile"} width={40} height={40}/>
                            </div>
                        </div>
                    </div>
                    <div className="user-info-profile">

                    </div>
                </div>
            </div>
            <Quiz />
        </div>
    )
}

export default UserHome;