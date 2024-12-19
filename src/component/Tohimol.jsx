import { tohimoluud } from "./array";
export function Tohimol() {
    return <div className="tohimoluud">
        <div className="tohimoluud-title">
            Товхимолууд
        </div>
        <div className="tohimoluud-scrollarea">
            <ul className="tohimoluud-list">
                {tohimoluud.map((tohimol) => {
                    return (
                        <li>
                            <p>{tohimol.date}</p>
                            <h1>{tohimol.title}</h1>
                        </li>
                    );
                })}
            </ul>
        </div>
 </div>
}
export default Tohimol; 