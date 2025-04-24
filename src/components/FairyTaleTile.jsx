function FairyTaleTile(props) {
    return (
        <div className="FairyTale">
            <div className="FairyTalePreview">
                <img src={props.image} alt={`Preview ${props.name}`} />
                <div className="FairyTaleTitle">
                    <h2>{props.name}</h2>
                    <p>{props.author}</p>
                </div>
            </div>
        </div>
    )
}

export default FairyTaleTile;