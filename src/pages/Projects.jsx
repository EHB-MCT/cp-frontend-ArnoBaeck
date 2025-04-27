import DATA from "../api/dummyData.json"
import FairyTaleTile from "../components/FairyTaleTile";
import { useOutletContext } from "react-router-dom";

function Projects() {
    const { searchTerm } = useOutletContext();

    const filteredFairyTales = DATA.filter((FairyTale) => 
        FairyTale.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="FairyTales">
            {filteredFairyTales.map((FairyTale) => (
                <FairyTaleTile
                    key={FairyTale.id}
                    id={FairyTale.id}
                    name={FairyTale.name}
                    author={FairyTale.author}
                    image={FairyTale.image}
                />
            ))}
        </div>
    )
}

export default Projects;