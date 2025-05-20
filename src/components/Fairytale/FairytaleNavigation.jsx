function FairytaleNavigation() {
    return (
        <nav className="fairytaleNavigation">
            <li>
                <button onClick={() => window.history.back()}>
                    Go Back
                </button>
            </li>
        </nav>
    );
}

export default FairytaleNavigation;
