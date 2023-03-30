import { Outlet } from "react-router-dom";
import "../scss/dashboard.scss";

function Dashboard() {
    return (
        <>
        <Outlet />
        <div className="main">
        <div className="container">

            <h1>ZALOGUJ SIĘ ŻEBY KONTYNUOWAĆ!</h1>
            

            <a className="login" href="/signin">SignIn</a>
        </div>
        </div>
        </>
    )

    
}

export default Dashboard;