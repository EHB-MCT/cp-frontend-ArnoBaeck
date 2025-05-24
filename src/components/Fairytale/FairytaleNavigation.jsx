function FairytaleNavigation() {
    return (
        <nav className="fairytaleNavigation">
            <li>
                <button onClick={() => window.history.back()} className="backBtn">
                    Go Back
                </button>
            </li>
        </nav>
    );
}

export default FairytaleNavigation;
