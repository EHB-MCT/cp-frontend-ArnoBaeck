import DATA from "../api/dummyData.json"
import FairyTaleTile from "../components/FairyTaleTile";
import { useOutletContext, useNavigate } from "react-router-dom";
import Button from "../components/Button";

function Home() {
    // The useOutletContext hook is used to access the context data passed from the parent route (Layout) to the child route (Home).
    const { searchTerm } = useOutletContext();

    const filteredFairyTales = DATA.filter((FairyTale) => 
        FairyTale.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const navigate = useNavigate();

    // The spread operator (...) is used to create a copy of the filteredFairyTales array.
    const randomElements = [];
    const mappedData = [...filteredFairyTales];
    const numberOfItems = 4;

    for (let i = 0; i < numberOfItems && mappedData.length > 0; i++) {
        const randomIndex = Math.floor(Math.random() * mappedData.length);
        randomElements.push(mappedData[randomIndex]);
        mappedData.splice(randomIndex, 1);
    }

    return (
        <div className="wrapper">
            <h1>In the spotlight</h1>
            <div className="FairyTales">
                {randomElements.map((FairyTale) => (
                    <FairyTaleTile
                        key={FairyTale.id}
                        id={FairyTale.id}
                        name={FairyTale.name}
                        author={FairyTale.author}
                        image={FairyTale.image}
                    />
                ))}
            </div>
            <div className="allProjectsBtn">
                <Button label="All projects" onClick={() => navigate("/projects")} />
            </div>
        </div>
    )
}

export default Home;