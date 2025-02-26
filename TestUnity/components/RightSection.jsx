import TestCasesTable from "./TestCasesTable.jsx"


export default function RightSection (){
    return (
        <div className="RightContainer">
            <div className= "nav-bar">
                <div className="nav-left">
                    <h2>Test Cases</h2>
                    <div class="search-container">
                        <button class="search-button"><img className = "ele-logo" src="../images/search.png" alt="search-icon" /></button>
                        <input type="text" class="search-input" placeholder="Search"/>
                        <button class="search-button"><img className = "ele-logo" src="../images/voice-icon.png" alt="search-icon" /></button>
                    </div>
                    <button class="search-button"><img className = "nav-left-icon" src="../images/upload-1.png" alt="search-icon" /></button>
                    <button class="search-button"><img className = "nav-left-icon" src="../images/newTab.png" alt="search-icon" /></button>

                </div>
                <div className="nav-right">
                    <button className ="nav-right-button-1">Generate Test Case</button>
                    <button className ="nav-right-button-2">Create Test Case</button>
                </div>
            </div>
            <hr></hr>
            <TestCasesTable />
        </div>
    )
}