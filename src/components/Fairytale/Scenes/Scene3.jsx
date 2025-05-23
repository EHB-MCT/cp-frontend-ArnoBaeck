import envoirement from '../../../assets/scene3_envoirement.svg';
import hansel from '../../../assets/scene3_hansel.svg';
import gretel from '../../../assets/scene3_gretel.svg';
import witch from '../../../assets/scene3_witch.svg';
import cane from '../../../assets/scene3_cane.svg';
import key from '../../../assets/scene3_key.svg';
import cellDoor from '../../../assets/scene3_cell_door.svg';

function Scene3() {
	return (
		<div className="scene scene3">
			<img src={envoirement} alt="envoirement" className="envoirement_scene3" />
            <img src={hansel} alt="hansel" className="hansel_scene3" />
            <img src={gretel} alt="gretel" className="gretel_scene3" />
            <img src={witch} alt="witch" className="witch_scene3" />
            <img src={cane} alt="cane" className="cane_scene3" />
            <img src={key} alt="key" className="key_scene3" />
            <img src={cellDoor} alt="cellDoor" className="cell_door_scene3" />
		</div>
	);
}

export default Scene3;
