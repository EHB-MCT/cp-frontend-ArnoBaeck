import FairytaleNavigation from "../../components/Fairytale/FairytaleNavigation"
import { Outlet } from "react-router"

function FairytaleLayout() {

    return (
        <div className="wrapper">
            <FairytaleNavigation />
            <Outlet />
        </div>
    )
}

export default FairytaleLayout