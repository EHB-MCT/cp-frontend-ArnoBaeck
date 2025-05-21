import FairytaleNavigation from "../../components/Fairytale/FairytaleNavigation";
import { Outlet } from "react-router";

function FairytaleLayout() {
	return (
		<>
			<FairytaleNavigation />
			<Outlet />
		</>
	);
}

export default FairytaleLayout;
