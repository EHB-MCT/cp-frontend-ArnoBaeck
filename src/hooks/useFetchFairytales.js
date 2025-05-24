import { useEffect, useState } from "react";

const DATA_URL = "https://raw.githubusercontent.com/EHB-MCT/cp-frontend-MaximWesterbeek/refs/heads/main/course-project/public/api/fairytaleList.json";

function useFetchFairytales() {
	const [fairytales, setFairyTales] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await fetch(DATA_URL);
				if (!response.ok) throw new Error("Failed to fetch fairy tales");
				const data = await response.json();
				setFairyTales(data);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		}

		fetchData();
	}, []);

	return { fairytales, loading, error };
}

export default useFetchFairytales;