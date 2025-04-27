import DATA from "../api/dummyData.json"
import FairyTaleTile from "../components/FairyTaleTile";
import { useOutletContext } from "react-router-dom";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

function Home() {
    // The useOutletContext hook is used to access the context data passed from the parent route (Layout) to the child route (Home).
    const { searchTerm } = useOutletContext();

    const filteredFairyTales = DATA.filter((FairyTale) => 
        FairyTale.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const navigate = useNavigate();

    return (
        <>
            <div className="FairyTales">
                {filteredFairyTales.map((FairyTale) => (
                    <FairyTaleTile
                        key={FairyTale.id}
                        name={FairyTale.name}
                        author={FairyTale.author}
                        image={FairyTale.image}
                    />
                ))}
            </div>
            <Button label="All projects" onClick={() => navigate("/projects")} />
        </>
    )
}

export default Home;