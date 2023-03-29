import { Outlet } from "react-router-dom";
import "../scss/dashboard.scss";

function Dashboard() {
    return (
        <div className="container">

            <h1>ZALOGUJ SIĘ ŻEBY KONTYNUOWAĆ!</h1>
            <Outlet />

            <a className="login" href="/signin">SignIn</a>
        </div>
    )
    
}

export default Dashboard;