import MainMenu from "./MainMenu.jsx"
import data from "../data.js"

export default function LeftSection (){

    const MainElements = data.map(element => {
        return(
            <MainMenu 
                key = {element.id}
                {...element}
            />
        )
    })
    return (
        <div className="leftContainer">
            <div className ="leftTop">
                <div className="title">
                    <img className="main-logo" src="../images/sparkle_main_icon.png" alt="Main-logo"/>
                    <span>TB Copilot</span>
                </div>
                <div className="project-holder-name">
                    <form action="onSubmit">
                        <select id="project-holder" name="ph-name">
                            <option value="swift">Ranjan's Project</option>
                            <option value="volvo">Kavya's Project</option>
                            <option value="ford">Vishwanath's Project</option>
                        </select>
                    </form>
                </div>
                {MainElements}
            </div>
            
            <div className="leftBottom">
                <div className="ele-bottom">
                    <img className = "ele-logo" src="../images/planes.png" alt="logo" />
                    <span>Integrations</span>
                </div>
                <div className="ele-bottom">
                    <img className = "ele-logo" src="../images/calendar.png" alt="logo" />
                    <span>Settings</span>
                </div>
                <div className="ele-bottom">
                    <img className = "ele-logo" src="../images/gps_location.png" alt="logo" />
                    <span>View Documentation</span>
                    <button className="documentation"><img className = "ele-logo" src="../images/newTab.png" alt="link" /></button>
                </div>
                <div id="user" className="ele-bottom">
                    <img className="user-logo" src="../images/user.jpg" alt="user" />
                    <div className="user-details">
                        <h3>AR Vishwanath</h3>
                        <p>vishwanath98@gmail.com</p>
                    </div>
                    <div>
                        <img className="ele-logo" src="../images/up-and-down-arrow.png" alt="up-down" />
                    </div>
                </div>
            </div>
        </div>
    )
        
    
}