const Card = (props) => {
    return (
        <div className="card">
            <img src={props.img} />
            <div className="content">
                <p className="type">{props.type}</p>
                <h2 className="title">{props.title}</h2>
                <p className="author">{props.author}</p>
            </div>
        </div>
    );
}

export default Card;