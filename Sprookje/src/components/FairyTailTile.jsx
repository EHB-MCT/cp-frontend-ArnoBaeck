function FairyTailTile(props){
    return(
        <li className="FairyTailItem">
            <img src={props.image} alt="" className="FairyTailPreview" />
            <div className="movieInformation">
                <p className="FairyTailName">{props.name}</p>
                <p className="FairyTailAuthor">{props.author}</p>
            </div>
        </li>
    )
}

export default FairyTailTile;