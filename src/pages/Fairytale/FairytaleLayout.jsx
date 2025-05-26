import { Outlet } from "react-router";

import FairytaleNavigation from "../../components/Fairytale/FairytaleNavigation";

function FairytaleLayout() {
	return (
		<>
			<FairytaleNavigation />
			<Outlet />
		</>
	);
}

export default FairytaleLayout;
